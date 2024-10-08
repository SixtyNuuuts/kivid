<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Subscription;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Subscription|null find($id, $lockMode = null, $lockVersion = null)
 * @method Subscription|null findOneBy(array $criteria, array $orderBy = null)
 * @method Subscription[]    findAll()
 * @method Subscription[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SubscriptionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Subscription::class);
    }

    public function findCurrentSubscription(User $user): ?Subscription
    {
        $now = new \DateTime();

        return $this->createQueryBuilder('s')
            ->where('s.currentPeriodStart <= :now')
            ->andWhere('s.currentPeriodEnd >= :now')
            ->andWhere('s.patient = :user')
            ->setParameter('now', $now)
            ->setParameter('user', $user)
            ->orderBy('s.currentPeriodEnd', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
}
