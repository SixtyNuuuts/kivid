<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/kine")
 */
class DoctorController extends AbstractController
{
    /**
     * @Route("/", name="app_doctor_dashboard")
     * @isGranted("ROLE_DOCTOR", message="Vous n'avez pas le droit d'accéder à cette zone")
     */
    public function dashboard(): Response
    {
        return $this->render('doctor/dashboard.html.twig');
    }
}
