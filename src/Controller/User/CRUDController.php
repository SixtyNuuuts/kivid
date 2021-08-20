<?php

namespace App\Controller\User;

use App\Form\DoctorFormType;
use App\Form\PatientFormType;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

class CRUDController extends AbstractController
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
     * @Route("/{userType}/{id}/edit", name="app_user_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, string $userType, int $id, SluggerInterface $slugger): Response
    {
        $repository = $this->patientRepository;
        $formType = PatientFormType::class;

        if ('doctor' === $userType) {
            $repository = $this->doctorRepository;
            $formType = DoctorFormType::class;
        }

        $user = $repository->findOneById($id);

        $form = $this->createForm($formType, $user);

        if (!$user) {
            throw new NotFoundResourceException();
        }

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form['avatarFile']->getData();
            if ($uploadedFile) {
                $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/avatar';
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = strtolower($slugger->slug($originalFilename))
                               . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
                $uploadedFile->move($destination, $newFilename);
                $user->setAvatarUrl('/uploads/avatar/' . $newFilename);
            }

            $this->getDoctrine()->getManager()->flush();

            $this->addFlash('success', 'Votre profil a été mis à jour !');

            return $this->redirectToRoute('app_user_edit', ['userType' => $userType, 'id' => $user->getId()]);
        }

        return $this->render("crud/edit.html.twig", [
            'user' => $user,
            'form' => $form->createView(),
        ]);
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
