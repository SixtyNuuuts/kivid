<?php

namespace App\Controller\FFMKR;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/ffmkr")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="app_ffmkr_admin_dashboard")
     */
    public function index(): Response
    {
        return $this->render('admin/ffmkr/dashboard.html.twig');
    }
}
