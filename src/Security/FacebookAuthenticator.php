<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use League\OAuth2\Client\Provider\FacebookUser;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class FacebookAuthenticator extends AbstractSocialAuthenticator
{
    protected $serviceName = 'facebook';

    public function getUserFromResourceOwner(ResourceOwnerInterface $facebookUser): ?User
    {
        if (!($facebookUser instanceof FacebookUser)) {
            throw new \RuntimeException('Expecting FacebookClient as the first parameter');
        }

        /** @var PatientRepository $patientRepository*/
        $patientRepository = $this->em->getRepository(Patient::class);

        /** @var DoctorRepository $doctorRepository*/
        $doctorRepository = $this->em->getRepository(Doctor::class);

        $user = $patientRepository->findForOauth('facebook', $facebookUser->getId(), $facebookUser->getEmail())
                ?? $doctorRepository->findForOauth('facebook', $facebookUser->getId(), $facebookUser->getEmail());

        if ($user) {
            if (!$user->getFacebookId()) {
                $user->setFacebookId($facebookUser->getId());
            }
            if (!$user->getFirstname()) {
                $user->setFirstname($facebookUser->getFirstname());
            }
            if (!$user->getLastname()) {
                $user->setLastname($facebookUser->getLastname());
            }
            if (!$user->getAvatarUrl()) {
                $user->setAvatarUrl($facebookUser->getPictureUrl());
            }
        }

        if (!$user) {
            $user = new Patient();
            $user->setFacebookId($facebookUser->getId())
                 ->setEmail($facebookUser->getEmail())
                 ->setFirstname($facebookUser->getFirstName())
                 ->setLastname($facebookUser->getLastName())
                 ->setAvatarUrl($facebookUser->getPictureUrl())
            ;

            $this->em->persist($user);
        }

        $this->em->flush();
        return $user;
    }
}
