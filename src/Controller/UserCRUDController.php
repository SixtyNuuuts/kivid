<?php

namespace App\Controller;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Form\DoctorFormType;
use App\Form\PatientFormType;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

/**
 * @Route("/user")
 */
class UserCRUDController extends AbstractController
{
    private $patientRepository;
    private $doctorRepository;

    public function __construct(PatientRepository $patientRepository, DoctorRepository $doctorRepository)
    {
        $this->patientRepository = $patientRepository;
        $this->doctorRepository = $doctorRepository;
    }

    /**
     * @Route("/{id}/edit", name="app_user_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, int $id, SluggerInterface $slugger): Response
    {
        $user = $this->patientRepository->findOneById($id) ?? $this->doctorRepository->findOneById($id);

        if (!$user) {
            throw new NotFoundResourceException();
        }

        if ($user instanceof Patient) {
            $form = $this->createForm(PatientFormType::class, $user);
        }

        if ($user instanceof Doctor) {
            $form = $this->createForm(DoctorFormType::class, $user);
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
            
            $referer = filter_var($request->headers->get('referer'), FILTER_SANITIZE_URL);
            
            return $this->redirect($referer);
        }

        $template = $request->query->get('fetch') ? 'modal_edit' : 'edit';

        return $this->render("crud/{$template}.html.twig", [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }
}
