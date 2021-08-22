<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use Symfony\Component\HttpClient\HttpClient;
use League\OAuth2\Client\Provider\GoogleUser;
use App\Security\Exception\NotVerifiedEmailException;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class GoogleAuthenticator extends AbstractSocialAuthenticator
{
    protected $serviceName = 'google';

    public function getUserFromResourceOwner(ResourceOwnerInterface $googleUser, string $userType): ?User
    {
        if (!($googleUser instanceof GoogleUser)) {
            throw new \RuntimeException('Expecting GoogleUser as the first parameter');
        }

        if (true !== ($googleUser->toArray()['email_verified'] ?? null)) {
            throw new NotVerifiedEmailException();
        }

        /** @var PatientRepository $patientRepository*/
        $patientRepository = $this->em->getRepository(Patient::class);

        /** @var DoctorRepository $doctorRepository*/
        $doctorRepository = $this->em->getRepository(Doctor::class);

        $user = $patientRepository->findForOauth('google', $googleUser->getId(), $googleUser->getEmail())
             ?? $doctorRepository->findForOauth('google', $googleUser->getId(), $googleUser->getEmail());

        if ($user) {
            if (!$user->getGoogleId()) {
                $user->setGoogleId($googleUser->getId());
            }
            if (!$user->getFirstname()) {
                $user->setFirstname($googleUser->getFirstname());
            }
            if (!$user->getLastname()) {
                $user->setLastname($googleUser->getLastname());
            }
            if (!$user->getAvatarUrl()) {
                // requete à l'url de l'image car sans ça prob d'affichage de l'avatar.
                HttpClient::create()->request('GET', $googleUser->getAvatar());
                $user->setAvatarUrl($googleUser->getAvatar());
            }
        }

        if (!$user) {
            // requete à l'url de l'image car sans ça prob d'affichage de l'avatar.
            HttpClient::create()->request('GET', $googleUser->getAvatar());
            $user = 'doctor' === $userType ? new Doctor() : new Patient();
            $user->setGoogleId($googleUser->getId())
                 ->setEmail($googleUser->getEmail())
                 ->setFirstname($googleUser->getFirstName())
                 ->setLastname($googleUser->getLastName())
                 ->setAvatarUrl($googleUser->getAvatar())
                 ->setIsVerified(true);
            ;

            $this->em->persist($user);
        }

        $this->em->flush();
        return $user;
    }
}
