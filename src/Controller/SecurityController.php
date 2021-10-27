<?php

namespace App\Controller;

use App\Controller\RedirectFromIsGrantedTrait;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    use RedirectFromIsGrantedTrait;

    /**
     * @Route("/connexion/{userType}", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils, string $userType = 'patient'): Response
    {
        if ($this->getUser()) {
            return $this->redirectFromIsGranted();
        }

        return $this->render('security/login.html.twig', [
            'error' => $authenticationUtils->getLastAuthenticationError(),
            'getLastUsername' => $authenticationUtils->getLastUsername(),
            'userType' => $userType === "praticien" ? "doctor" : "patient",
        ]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank.');
    }
}
