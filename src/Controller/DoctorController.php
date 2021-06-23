<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/kine")
 */
class DoctorController extends AbstractController
{
    /**
     * @Route("/", name="app_doctor_dashboard")
     */
    public function dashboard(): Response
    {
        return $this->render('doctor/dashboard.html.twig');
    }
}
