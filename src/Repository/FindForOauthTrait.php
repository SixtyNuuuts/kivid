<?php

namespace App\Repository;

use App\Entity\User;

trait FindForOauthTrait
{
    /**
     * Looking for a user for the oauth.
     */
    public function findForOauth(string $service, ?string $serviceId, ?string $email): ?User
    {
        if (null === $serviceId || null === $email) {
            return null;
        }

        return $this->createQueryBuilder('u')
            ->where('u.email = :email')
            ->orWhere("u.{$service}Id = :serviceId")
            ->setMaxResults(1)
            ->setParameters([
                'email' => $email,
                'serviceId' => $serviceId,
            ])
            ->getQuery()
            ->getOneOrNullResult();
    }
}
