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

    // /**
    //  * @return WorksheetSession[] Returns an array of WorksheetSession objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('w.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?WorksheetSession
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
