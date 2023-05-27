<?php

namespace App\Security;

use App\Entity\User;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Core\User\InMemoryUser;

trait RedirectFromRoleTrait
{
    /**
     * @param User|InMemoryUser $user.
     */
    public function redirectFromRole($user): RedirectResponse
    {
        if (in_array('ROLE_PATIENT', $user->getRoles())) {
            return new RedirectResponse(
                $this->urlGenerator->generate('app_patient_dashboard', ['id' => $user->getId()])
            );
        }

        if (in_array('ROLE_DOCTOR', $user->getRoles())) {
            return new RedirectResponse(
                $this->urlGenerator->generate('app_doctor_dashboard', ['id' => $user->getId()])
            );
        }

        if (in_array('ROLE_ADMIN', $user->getRoles())) {
            return new RedirectResponse(
                $this->urlGenerator->generate('app_admin_dashboard')
            );
        }

        if (in_array('ROLE_FFMKR_ADMIN', $user->getRoles())) {
            return new RedirectResponse(
                $this->urlGenerator->generate('app_ffmkr_admin_dashboard')
            );
        }

        return new RedirectResponse($this->urlGenerator->generate('app_home'));
    }
}
