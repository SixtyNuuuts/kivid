<?php

namespace App\Security\Voter;

use App\Entity\Doctor;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class DoctorVoter extends Voter
{
    protected function supports(string $attribute, $subject): bool
    {
        return in_array($attribute, ['IS_OWNER']) && is_numeric($subject);
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user instanceof Doctor) {
            return false;
        }

        switch ($attribute) {
            case 'IS_OWNER':
                return (int)$subject === $user->getId();
        }

        return false;
    }
}
