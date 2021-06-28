<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class DashboardController extends AbstractController
{
    /**
     * @Route("/dashboard/{id}", name="app_patient_dashboard")
     * @Security("is_granted('ROLE_PATIENT') or is_granted('ROLE_ADMIN')",
     *  message="Vous n'avez pas le droit d'accéder à cette zone")
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function dashboard(Patient $patient): Response
    {
        return $this->render('patient/dashboard.html.twig', ['patient' => $patient]);
    }
}
