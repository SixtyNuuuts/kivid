<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Form\PatientFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class CRUDController extends AbstractController
{
    /**
     * @Route("/{id}/edit", name="app_patient_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Patient $patient, SluggerInterface $slugger): Response
    {
        $form = $this->createForm(PatientFormType::class, $patient);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form['avatarFile']->getData();
            if ($uploadedFile) {
                $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/avatar';
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = strtolower($slugger->slug($originalFilename))
                               . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
                $uploadedFile->move($destination, $newFilename);
                $patient->setAvatarUrl('/uploads/avatar/' . $newFilename);
            }

            $this->getDoctrine()->getManager()->flush();

            $this->addFlash('success', 'Votre profil a été mis à jour !');

            return $this->redirectToRoute('app_patient_dashboard', ['id' => $patient->getId()]);
        }

        $template = $request->query->get('fetch') ? 'modal_edit' : 'account_setting';

        return $this->render("patient/{$template}.html.twig", [
            'patient' => $patient,
            'form' => $form->createView(),
        ]);
    }
}
