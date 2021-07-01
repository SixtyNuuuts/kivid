<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Form\SearchFormType;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;

/**
 * @Route("/kine")
 */
class PatientManagementController extends AbstractController
{
    /**
     * @Route("/{id}/patients", name="app_doctor_patients", methods={"GET","POST"})
     */
    public function patientsList(Request $request, Doctor $doctor, PatientRepository $patientRepository): Response
    {
        $patients = $patientRepository->findAll();

        $form = $this->createForm(SearchFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $patients = $patientRepository->searchWithWords($form->get('search')->getData());
        }

        return $this->render("doctor/patients_list.html.twig", [
            'searchForm' => $form->createView(),
            'doctor' => $doctor,
            'allPatients' => $patients,
            'doctorPatients' => $doctor->getPatients(),
        ]);
    }

    /**
     * @Route("/{id}/add/patient/{idPatient}", name="app_doctor_add_patient", methods={"GET","POST"})
     */
    public function addPatient(
        Doctor $doctor,
        int $idPatient,
        PatientRepository $patientRepository,
        EntityManagerInterface $em
    ): RedirectResponse {
        $patient = $patientRepository->findOneById($idPatient);

        if ($doctor->getPatients()->contains($patient)) {
            $this->addFlash('danger', 'Cet utilisateur fait déjà partie de vos patients');

            return $this->redirectToRoute('app_doctor_patients', [ 'id' => $doctor->getId() ]);
        }

        $doctor->addPatient($patient);

        $em->flush();

        $this->addFlash('success', 'Patient ajouté !');

        return $this->redirectToRoute('app_doctor_patients', [ 'id' => $doctor->getId() ]);
    }

    /**
     * @Route("/{id}/remove/patient/{idPatient}", name="app_doctor_remove_patient", methods={"GET","POST"})
     */
    public function removePatient(
        Doctor $doctor,
        int $idPatient,
        PatientRepository $patientRepository,
        EntityManagerInterface $em
    ): RedirectResponse {
        $patient = $patientRepository->findOneById($idPatient);

        $doctor->removePatient($patient);

        $em->flush();

        $this->addFlash('success', 'Patient retiré !');

        return $this->redirectToRoute('app_doctor_patients', [ 'id' => $doctor->getId() ]);
    }
}
