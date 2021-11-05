<?php

namespace App\Security\Voter;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Repository\PatientRepository;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class UserAccessVoter extends Voter
{
    private $patientRepository;

    public function __construct(
        PatientRepository $patientRepository
    ) {
        $this->patientRepository = $patientRepository;
    }

    protected function supports(string $attribute, $subject): bool
    {
        return in_array($attribute, ['IS_OWNER', 'IS_OWNER_OR_OWNERDOC']) && is_numeric($subject);
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (in_array('ROLE_ADMIN', $user->getRoles())) {
            return true;
        }

        if (!$user instanceof Patient && !$user instanceof Doctor) {
            return false;
        }

        switch ($attribute) {
            case 'IS_OWNER':
                return (int)$subject === $user->getId();

            //IS OWNER OR OWNER's DOCTOR
            case 'IS_OWNER_OR_OWNERDOC':
                if ((int)$subject === $user->getId()) {
                    return true;
                }

                $patient = $this->patientRepository->findOneBy(['id' => $subject]);

                if ($patient->getDoctor() === $user) {
                    return true;
                }

                return false;
        }

        return false;
    }
}
