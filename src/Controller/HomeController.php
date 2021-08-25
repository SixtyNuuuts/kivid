<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    /**
     * @Route("/conditions-utilisation", name="app_conditions_utilisation")
     */
    public function conditionsUtilisation(): Response
    {
        return $this->render('home/conditions-utilisation.html.twig');
    }

    /**
     * @Route("/politique-confidentialite", name="app_politique-confidentialite")
     */
    public function politiqueConfidentialite(): Response
    {
        return $this->render('home/politique-confidentialite.html.twig');
    }

    /**
     * @Route("/maquette", name="app_maquette")
     */
    public function maquette(): Response
    {
        return $this->render('home/maquette.html.twig');
    }
}
