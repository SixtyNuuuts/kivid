<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/patient")
 */
class PatientController extends AbstractController
{
    /**
     * @Route("/", name="app_patient_dashboard")
     */
    public function dashboard(): Response
    {
        return $this->render('patient/dashboard.html.twig', [
            'controller_name' => 'PatientController',
        ]);
    }
}
