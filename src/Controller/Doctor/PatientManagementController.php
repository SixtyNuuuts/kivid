<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Form\SearchFormType;
use App\Repository\PatientRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
        $patients = $patientRepository->findAll(['created_at' => 'desc']);

        $form = $this->createForm(SearchFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $patients = $patientRepository->searchWithWords($form->get('search')->getData());
            dd($patients);
        }

        return $this->render("doctor/patients_list.html.twig", [
            'searchForm' => $form->createView(),
            'allPatients' => $patients,
            'doctorPatients' => $doctor->getPatients(),
        ]);
    }
}
