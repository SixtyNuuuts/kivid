<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Form\DoctorFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/kine")
 */
class CRUDController extends AbstractController
{
    /**
     * @Route("/{id}/edit", name="app_doctor_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Doctor $doctor, SluggerInterface $slugger): Response
    {
        $form = $this->createForm(DoctorFormType::class, $doctor);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form['avatarFile']->getData();
            if ($uploadedFile) {
                $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/avatar';
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = strtolower($slugger->slug($originalFilename))
                               . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
                $uploadedFile->move($destination, $newFilename);
                $doctor->setAvatarUrl('/uploads/avatar/' . $newFilename);
            }

            $this->getDoctrine()->getManager()->flush();

            $this->addFlash('success', 'Votre profil a été mis à jour !');

            return $this->redirectToRoute('app_doctor_dashboard', ['id' => $doctor->getId()]);
        }

        $template = $request->query->get('fetch') ? 'modal_edit' : 'account_setting';

        return $this->render("doctor/{$template}.html.twig", [
            'doctor' => $doctor,
            'form' => $form->createView(),
        ]);
    }
}
