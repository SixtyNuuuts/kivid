<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Form\DoctorFormType;
use App\Form\PatientFormType;
use App\Security\EmailVerifier;
use Symfony\Component\Mime\Address;
use Symfony\Component\Form\FormInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;

/**
 * @Route("/register")
 */
class RegistrationController extends AbstractController
{
    private $emailVerifier;
    private $passwordHasher;

    public function __construct(EmailVerifier $emailVerifier, UserPasswordHasherInterface $passwordHasher)
    {
        $this->emailVerifier = $emailVerifier;
        $this->passwordHasher = $passwordHasher;
    }

    /**
     * @Route("/patient", name="app_register_patient")
     */
    public function registerPatient(Request $request): Response
    {
        $patient = new Patient();
        $form = $this->createForm(PatientFormType::class, $patient);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->registerUser($form, $patient);

            return $this->redirectToRoute('app_home');
        }

        return $this->render('registration/register_patient.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/doctor", name="app_register_doctor")
     */
    public function registerDoctor(Request $request): Response
    {
        $doctor = new Doctor();
        $form = $this->createForm(DoctorFormType::class, $doctor);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->registerUser($form, $doctor);

            return $this->redirectToRoute('app_home');
        }

        return $this->render('registration/register_doctor.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    public function registerUser(FormInterface $form, User $user): void
    {
        $user->setPassword(
            $this->passwordHasher->hashPassword(
                $user,
                $form->get('password')->getData()
            )
        );

        if ($user instanceof Patient) {
            $user->setRoles(['ROLE_USER', 'ROLE_PATIENT']);
        }

        if ($user instanceof Doctor) {
            $user->setRoles(['ROLE_USER', 'ROLE_DOCTOR']);
        }

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // generate a signed url and email it to the user
        $this->emailVerifier->sendEmailConfirmation(
            'app_register_verify_email',
            $user,
            (new TemplatedEmail())
                ->from(new Address('contact@kivid.fr', '"Kivid Contact"'))
                ->to($user->getEmail())
                ->subject('Veuillez confirmer votre email')
                ->htmlTemplate('registration/confirmation_email.html.twig')
        );
    }

    /**
     * @Route("/verify/email", name="app_register_verify_email")
     */
    public function verifyUserEmail(Request $request): Response
    {
        // $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $this->getUser());
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('verify_email_error', $exception->getReason());

            return $this->redirectToRoute('app_home');
        }

        $this->addFlash('success', 'Votre adresse e-mail a été vérifiée.');

        return $this->redirectToRoute('app_home');
    }
}
