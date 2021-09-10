<?php

namespace App\User;

use App\Entity\User;

class UserService
{
    public function getCivility(?string $gender): ?string
    {
        return  $gender ? ("male" === $gender ? 'M. ' : 'Mme ') : null;
    }

    public function getUserName(User $user): string
    {
        $name = $user->getFirstname() || $user->getLastname()
                ? "{$user->getFirstname()} {$user->getLastname()}"
                : $user->getEmail();

        return $this->getCivility($user->getGender()) . $name;
    }
}
