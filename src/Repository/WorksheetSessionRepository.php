<?php

namespace App\Repository;

use App\Entity\Worksheet;
use App\Entity\WorksheetSession;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

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

    public function findCurrentWorksheetSession(Worksheet $worksheet): ?WorksheetSession
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

    public function findCurrentWorksheetSessionByWorksheetId(int $worksheetId): ?WorksheetSession
    {
        $now = new \DateTime();

        return $this->createQueryBuilder('ws')
            ->join('ws.worksheet', 'w')
            ->where('ws.startAt <= :now')
            ->andWhere('ws.endAt >= :now')
            ->andWhere('w.id = :worksheetId')
            ->setParameter('now', $now)
            ->setParameter('worksheetId', $worksheetId)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function countOldWorksheetSessions(Worksheet $worksheet): int
    {
        $now = new \DateTime();

        return $this->createQueryBuilder('ws')
            ->select('count(ws.id)')
            ->where('ws.endAt < :now')
            ->andWhere('ws.worksheet = :worksheet')
            ->setParameter('now', $now)
            ->setParameter('worksheet', $worksheet)
            ->getQuery()
            ->getSingleScalarResult();
        ;
    }

    public function countWorksheetSessions(Worksheet $worksheet): int
    {
        return $this->createQueryBuilder('ws')
            ->select('count(ws.id)')
            ->where('ws.worksheet = :worksheet')
            ->setParameter('worksheet', $worksheet)
            ->getQuery()
            ->getSingleScalarResult();
        ;
    }

    public function countWorksheetSessionsByWorksheetId(int $worksheetId): int
    {
        return $this->createQueryBuilder('ws')
            ->select('count(ws.id)')
            ->join('ws.worksheet', 'w')
            ->where('w.id = :worksheetId')
            ->setParameter('worksheetId', $worksheetId)
            ->getQuery()
            ->getSingleScalarResult();
    }
    
    public function countCompletedWorksheetSessions(Worksheet $worksheet): int
    {
        return $this->createQueryBuilder('ws')
            ->select('count(ws.id)')
            ->where('ws.worksheet = :worksheet')
            ->andWhere('ws.isCompleted = true')
            ->setParameter('worksheet', $worksheet)
            ->getQuery()
            ->getSingleScalarResult();
        ;
    }

    public function countCompletedWorksheetSessionsByWorksheetId(int $worksheetId): int
    {
        return $this->createQueryBuilder('ws')
            ->select('count(ws.id)')
            ->join('ws.worksheet', 'w')
            ->where('w.id = :worksheetId')
            ->andWhere('ws.isCompleted = true')
            ->setParameter('worksheetId', $worksheetId)
            ->getQuery()
            ->getSingleScalarResult();
    }
}
