<?php

namespace App\Repository;

use App\Entity\Commentary;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Commentary|null find($id, $lockMode = null, $lockVersion = null)
 * @method Commentary|null findOneBy(array $criteria, array $orderBy = null)
 * @method Commentary[]    findAll()
 * @method Commentary[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentaryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Commentary::class);
    }

    public function countCommentariesByWorksheet($worksheet)
    {
        return $this->createQueryBuilder('c')
            ->select('count(c.id)')
            ->where('c.worksheet = :worksheet')
            ->setParameter('worksheet', $worksheet)
            ->getQuery()
            ->getSingleScalarResult();
        ;
    }
}
