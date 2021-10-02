<?php

namespace App\Repository;

use App\Entity\PartOfBody;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PartOfBody|null find($id, $lockMode = null, $lockVersion = null)
 * @method PartOfBody|null findOneBy(array $criteria, array $orderBy = null)
 * @method PartOfBody[]    findAll()
 * @method PartOfBody[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PartOfBodyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PartOfBody::class);
    }
}
