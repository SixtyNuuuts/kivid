<?php

namespace App\Controller;

use App\Entity\Patient;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class PatientController extends AbstractController
{
    /**
     * @Route("/{id}", name="app_patient_dashboard")
     * @isGranted("ROLE_PATIENT", message="Vous n'avez pas le droit d'accéder à cette zone")
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function dashboard(Patient $patient): Response
    {
        return $this->render('patient/dashboard.html.twig', ['patient' => $patient]);
    }
}
