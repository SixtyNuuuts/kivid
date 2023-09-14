<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\CalendlyEvent;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method CalendlyEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method CalendlyEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method CalendlyEvent[]    findAll()
 * @method CalendlyEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CalendlyEventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CalendlyEvent::class);
    }

    // public function findCurrentCalendlyEvent(User $user): ?CalendlyEvent
    // {
    //     $now = new \DateTime();

    //     return $this->createQueryBuilder('s')
    //         ->where('s.currentPeriodStart <= :now')
    //         ->andWhere('s.currentPeriodEnd >= :now')
    //         ->andWhere('s.patient = :user')
    //         ->setParameter('now', $now)
    //         ->setParameter('user', $user)
    //         ->orderBy('s.currentPeriodEnd', 'DESC')
    //         ->setMaxResults(1)
    //         ->getQuery()
    //         ->getOneOrNullResult()
    //     ;
    // }
}
