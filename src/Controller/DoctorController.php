<?php

namespace App\Controller;

use App\Entity\Doctor;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/kine")
 */
class DoctorController extends AbstractController
{
    /**
     * @Route("/{id}", name="app_doctor_dashboard")
     * @isGranted("ROLE_DOCTOR", message="Vous n'avez pas le droit d'accéder à cette zone")
     */
    public function dashboard(Doctor $doctor): Response
    {
        return $this->render('doctor/dashboard.html.twig', ['doctor' => $doctor]);
    }
}
