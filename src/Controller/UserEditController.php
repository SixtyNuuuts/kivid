<?php

namespace App\Controller;

use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
     * @Route("/parametres", name="app_settings_user_edit", methods={"GET", "POST"})
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
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('edit_profil' . $user->getId(), $data->_token)) {
                $user->setFirstname($data->firstname)
                     ->setLastname($data->lastname)
                     ->setGender($data->gender)
                ;

                if ($userType === 'patient' && $data->birthdate) {
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
                            'Cet email est déjà utilisé par un membre, veuillez en entrer un autre',
                            500,
                        );
                    }

                    $user->setEmail($data->email);

                    $user->setIsVerified(false);

                    $resendEmail = true;
                }

                $avatarUrl = null;
                if ($data->avatar) {
                    $avatarParts = explode(";base64,", $data->avatar);
                    $avatarTypeAux = explode("image/", $avatarParts[0]);
                    $avatarType = $avatarTypeAux[1];
                    $avatarBase64 = base64_decode($avatarParts[1]);
                    $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/avatar';
                    $filename =  uniqid() . '.' . $avatarType;

                    file_put_contents($destination . '/' . $filename, $avatarBase64);

                    $avatarUrl = '/uploads/avatar/' . $filename;
                    $user->setAvatarUrl($avatarUrl);
                }

                $this->getDoctrine()->getManager()->flush();

                return $this->json(
                    [
                        'message' => "Votre profil a été mis à jour !",
                        'resendEmail' => $resendEmail,
                        'avatarUrl' => $avatarUrl
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
}
