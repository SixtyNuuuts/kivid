<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/patient")
 */
class DashboardController extends AbstractController
{
    /**
     * @Route("/{id}/dashboard", name="app_patient_dashboard")
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function dashboard(Patient $patient): Response
    {
        return $this->render('patient/dashboard.html.twig', [
            'patient' => $patient,
            'doctorView' => false,
        ]);
    }
}
