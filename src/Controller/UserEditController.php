<?php

namespace App\Controller;

use App\Form\DoctorFormType;
use App\Form\PatientFormType;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\String\Slugger\SluggerInterface;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Translation\Exception\NotFoundResourceException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserEditController extends AbstractController
{
    private $patientRepository;
    private $doctorRepository;

    public function __construct(
        PatientRepository $patientRepository,
        DoctorRepository $doctorRepository
    ) {
        $this->patientRepository = $patientRepository;
        $this->doctorRepository = $doctorRepository;
    }

    /**
     * @Route("/settings/user/edit", name="app_settings_user_edit", methods={"GET", "POST"})
     * @isGranted("IS_AUTHENTICATED_FULLY")
     */
    public function settingsUserEdit(
        Request $request,
        SluggerInterface $slugger,
        UserPasswordHasherInterface $passwordHasher
    ): Response {
        $user = $this->getUser();
        $userType = null;

        if ($this->isGranted('ROLE_PATIENT')) {
            $repository = $this->patientRepository;
            $userType = 'patient';
        }

        if ($this->isGranted('ROLE_DOCTOR')) {
            $repository = $this->doctorRepository;
            $userType = 'doctor';
        }

        if ($request->isMethod('post')) {
            $avatar = $request->files->get('avatar');

            if ($avatar) {
                $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/avatar';
                $originalFilename = pathinfo($avatar->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = strtolower($slugger->slug($originalFilename))
                                . '-' . uniqid() . '.' . $avatar->guessExtension();
                $avatar->move($destination, $newFilename);
                $avatarUrl = '/uploads/avatar/' . $newFilename;
                $user->setAvatarUrl($avatarUrl);

                $this->getDoctrine()->getManager()->flush();

                return $this->json(
                    ['message' => "L'avatar a été mis à jour", 'avatarUrl' => $avatarUrl],
                    200,
                );
            }

            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('edit_profil' . $user->getId(), $data->_token)) {
                $user->setFirstname($data->firstname)
                     ->setLastname($data->lastname)
                     ->setGender($data->gender)
                ;

                if ($userType === 'patient') {
                    $user->setBirthdate(new \DateTimeImmutable($data->birthdate));
                }

                if ($userType === 'doctor') {
                    $user->setEntityName($data->entityName)
                         ->setStreet($data->street)
                         ->setCity($data->city)
                    ;
                }

                if ($data->plainPassword) {
                    $hashedPassword = $passwordHasher->hashPassword(
                        $user,
                        $data->plainPassword
                    );

                    $user->setPassword($hashedPassword);
                }

                $resendEmail = false;

                if ($data->email !== $user->getEmail()) {
                    $patientWithThisEmail = $this->patientRepository->findOneBy(['email' => $data->email]);
                    $doctorWithThisEmail = $this->doctorRepository->findOneBy(['email' => $data->email]);

                    if ($patientWithThisEmail || $doctorWithThisEmail) {
                        return $this->json(
                            'Cet email est déjà utilisé par un membre, veuillez en entrer un autre.',
                            500,
                        );
                    }

                    $user->setEmail($data->email);

                    $user->setIsVerified(false);

                    $resendEmail = true;
                }

                $this->getDoctrine()->getManager()->flush();

                return $this->json(
                    [
                        'message' => "Votre profil a été mis à jour !",
                        'resendEmail' => $resendEmail
                    ],
                    200,
                );
            }

            return $this->json(
                "Une erreur s'est produite lors de l'édition du profil",
                500
            );
        }

        return $this->render("settings/profil.html.twig", ['currentUser' => $user]);
    }

    /**
     * @Route("/{userType}/all", name="app_user_get_all", methods={"GET"})
     */
    public function getAll(string $userType): JsonResponse
    {
        $repository = $this->patientRepository;
        $serializeGroup = 'patient_read';

        if ('doctors' === $userType) {
            $repository = $this->doctorRepository;
            $serializeGroup = 'doctor_read';
        }

        return $this->json($repository->findAll(), 200, [], ['groups' => $serializeGroup]);
    }
}
