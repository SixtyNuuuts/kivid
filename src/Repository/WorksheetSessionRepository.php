<?php

namespace App\Repository;

use App\Entity\WorksheetSession;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method WorksheetSession|null find($id, $lockMode = null, $lockVersion = null)
 * @method WorksheetSession|null findOneBy(array $criteria, array $orderBy = null)
 * @method WorksheetSession[]    findAll()
 * @method WorksheetSession[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WorksheetSessionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WorksheetSession::class);
    }

    public function findCurrentWorksheetSession($worksheet): ?WorksheetSession
    {
        $now = new \DateTime();

        return $this->createQueryBuilder('ws')
            ->where('ws.startAt <= :now')
            ->andWhere('ws.endAt >= :now')
            ->andWhere('ws.worksheet = :worksheet')
            ->setParameter('now', $now)
            ->setParameter('worksheet', $worksheet)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    public function countWorksheetSessions($worksheet): int
    {
        return $this->createQueryBuilder('ws')
            ->select('count(ws.id)')
            ->where('ws.worksheet = :worksheet')
            ->setParameter('worksheet', $worksheet)
            ->getQuery()
            ->getSingleScalarResult();
        ;
    }
}
