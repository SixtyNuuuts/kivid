<?php

namespace App\Repository;

use App\Entity\ExerciseStat;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ExerciseStat|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExerciseStat|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExerciseStat[]    findAll()
 * @method ExerciseStat[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExerciseStatRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExerciseStat::class);
    }

    // /**
    //  * @return ExerciseStat[] Returns an array of ExerciseStat objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ExerciseStat
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
