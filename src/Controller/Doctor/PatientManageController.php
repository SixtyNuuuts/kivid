<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Repository\PatientRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/kine")
 */
class PatientManageController extends AbstractController
{
    /**
     * @Route("/{id}/patients", name="app_doctor_patients", methods={"GET"})
     */
    public function patientsList(Doctor $doctor, PatientRepository $patientRepository): Response
    {
        return $this->render("doctor/patients_list.html.twig", [
            'patients' => $doctor->getPatients(),
        ]);
    }
}
