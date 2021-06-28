<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\RedirectResponse;

trait RedirectFromIsGrantedTrait
{
    public function redirectFromIsGranted(): RedirectResponse
    {
        if ($this->isGranted('ROLE_PATIENT')) {
            return $this->redirectToRoute('app_patient_dashboard', ['id' => $this->getUser()->getId()]);
        }

        if ($this->isGranted('ROLE_DOCTOR')) {
            return $this->redirectToRoute('app_doctor_dashboard', ['id' => $this->getUser()->getId()]);
        }

        if ($this->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('app_admin_dashboard');
        }

        return $this->redirectToRoute('app_home');
    }
}
