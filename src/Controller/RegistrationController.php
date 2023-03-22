<?php

namespace App\Controller;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\FFMKRAdhesion;
use App\Security\EmailVerifier;
use Symfony\Component\Mime\Address;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use App\Security\LoginFormAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\FFMKRAdhesionRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;

class RegistrationController extends AbstractController
{
    use RedirectFromIsGrantedTrait;

    private $emailVerifier;

    public function __construct(EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }

    /**
     * @Route("/inscription", name="app_register")
     */
    public function register(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        UserAuthenticatorInterface $authenticator,
        LoginFormAuthenticator $formAuthenticator,
        EntityManagerInterface $em,
        PatientRepository $patientRepository,
        DoctorRepository $doctorRepository,
        FFMKRAdhesionRepository $FFMKRAdhesionRepository,
        ?string $registerType
    ): Response {
        if ($this->getUser()) {
            return $this->redirectFromIsGranted();
        }

        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('registration', $data->_token) && !empty($data->userType) && !empty($data->email)) {
                $patientWithThisEmail = $patientRepository->findOneBy(['email' => $data->email]);
                $doctorWithThisEmail = $doctorRepository->findOneBy(['email' => $data->email]);

                if ($patientWithThisEmail || $doctorWithThisEmail) {
                    return $this->json(
                        'Cet email est déjà utilisé par un membre',
                        500,
                    );
                }

                $user = 'doctor' === $data->userType ? new Doctor() : new Patient();

                if ('doctor' === $data->userType) {                    
                    $userFFMKRAdhesion = $FFMKRAdhesionRepository->findOneBy(['email'=> $data->email]);
                    if($userFFMKRAdhesion instanceof FFMKRAdhesion) {
                        if($data->registerType === 'ffmkr') {
                            $data->firstname = ucwords(strtolower($userFFMKRAdhesion->getFirstname()));
                            $data->lastname = ucwords(strtolower($userFFMKRAdhesion->getLastName()));
                        }

                        $userFFMKRAdhesion->setDoctor($user);
                    }
                    if ($data->registerType === 'ffmkr' && !$userFFMKRAdhesion instanceof FFMKRAdhesion) {
                        return $this->json(
                            'ffmkr-adhesion-not-found',
                            200,
                        );    
                    }
                }

                if(empty($data->firstname)||empty($data->lastname)||empty($data->plainPassword))
                    return $this->json('Erreur', 500,);
        
                $user->setEmail($data->email)->setFirstname($data->firstname)->setLastname($data->lastname);
                $user->setPassword(
                    $passwordHasher->hashPassword($user, $data->plainPassword)
                );

                $em->persist($user);

                try {
                    $em->flush();
                } catch (UniqueConstraintViolationException $e) {
                    return $this->json(
                        "Cet email est déjà utilisé par un patient",
                        500
                    );
                }

                // generate a signed url and email it to the user
                $this->emailVerifier->sendEmailConfirmation(
                    'app_verify_email',
                    $user,
                    (new TemplatedEmail())
                        ->from(new Address('contact@kivid.fr', '"Kivid Contact"'))
                        ->to($user->getEmail())
                        ->subject('Veuillez confirmer votre email')
                        ->htmlTemplate('registration/confirmation_email.html.twig')
                );

                $authenticator->authenticateUser(
                    $user,
                    $formAuthenticator,
                    $request
                );

                return $this->json(
                    "Nous vous avons envoyé un email à l'adresse <strong>{$user->getEmail()}</strong> 
                    contenant un lien de confirmation",
                    200
                );
            }

            return $this->json('Erreur',500,);
        }

        return $this->render('registration/register.html.twig', ['registerType'  => $registerType]);
    }

    /**
     * @Route("/inscription/ffmkr", name="app_register_ffmkr")
     */
    public function registerFFmkr() 
    {    
        return $this->forward('App\Controller\RegistrationController::register', ['registerType'  => 'ffmkr']);
    }

    /**
     * @Route("/verify/email", name="app_verify_email")
     * @isGranted("IS_AUTHENTICATED_FULLY")
     */
    public function verifyUserEmail(Request $request): Response
    {
        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $this->getUser());
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('danger', $exception->getReason());

            return $this->redirectToRoute('app_home');
        }

        $this->addFlash('success', 'Votre adresse e-mail a été vérifiée.');

        return $this->redirectFromIsGranted();
    }

    /**
     * @Route("/{userType}/{id}/resend/verify-email", name="app_user_resend_verify_email", methods={"GET"})
     */
    public function resendVerifyEmail(
        string $userType,
        int $id,
        PatientRepository $patientRepository,
        DoctorRepository $doctorRepository
    ): JsonResponse {
        $repository = $patientRepository;

        if ('doctor' === $userType) {
            $repository = $doctorRepository;
        }

        $user = $repository->findOneBy(['id' => $id]);

        // generate a signed url and email it to the user
        $this->emailVerifier->sendEmailConfirmation(
            'app_verify_email',
            $user,
            (new TemplatedEmail())
            ->from(new Address('contact@kivid.fr', '"Kivid Contact"'))
            ->to($user->getEmail())
            ->subject('Veuillez confirmer votre email')
            ->htmlTemplate('registration/confirmation_email.html.twig')
        );

        return $this->json(
            "Nous vous avons envoyé un email à l'adresse <strong>{$user->getEmail()}</strong> 
            contenant un lien de confirmation",
            200,
            [],
        );
    }
}
