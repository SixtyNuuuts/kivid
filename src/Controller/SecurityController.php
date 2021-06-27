<?php

namespace App\Controller;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Form\LoginFormType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser() instanceof Patient) {
            return $this->redirectToRoute('app_patient_dashboard', ['id' => $this->getUser()->getId()]);
        }

        if ($this->getUser() instanceof Doctor) {
            return $this->redirectToRoute('app_doctor_dashboard', ['id' => $this->getUser()->getId()]);
        }

        $form = $this->createForm(LoginFormType::class, ['email' => $authenticationUtils->getLastUsername()]);

        return $this->render('security/login.html.twig', [
            'loginForm' => $form->createView(),
            'error' => $authenticationUtils->getLastAuthenticationError(),
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
