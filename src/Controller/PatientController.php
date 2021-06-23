<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/patient")
 */
class PatientController extends AbstractController
{
    /**
     * @Route("/", name="app_patient_dashboard")
     * @isGranted("ROLE_PATIENT", message="Vous n'avez pas le droit d'accéder à cette zone")
     */
    public function dashboard(): Response
    {
        return $this->render('patient/dashboard.html.twig');
    }
}
