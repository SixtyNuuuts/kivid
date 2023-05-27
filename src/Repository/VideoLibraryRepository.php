<?php

namespace App\Repository;

use App\Entity\VideoLibrary;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method VideoLibrary|null find($id, $lockMode = null, $lockVersion = null)
 * @method VideoLibrary|null findOneBy(array $criteria, array $orderBy = null)
 * @method VideoLibrary[]    findAll()
 * @method VideoLibrary[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VideoLibraryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VideoLibrary::class);
    }

    // /**
    //  * @return VideoLibrary[] Returns an array of VideoLibrary objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VideoLibrary
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
