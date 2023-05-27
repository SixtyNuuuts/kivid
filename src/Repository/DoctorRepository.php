<?php

namespace App\Repository;

use App\Entity\Doctor;
use App\Repository\FindForOauthTrait;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Doctor|null find($id, $lockMode = null, $lockVersion = null)
 * @method Doctor|null findOneBy(array $criteria, array $orderBy = null)
 * @method Doctor[]    findAll()
 * @method Doctor[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DoctorRepository extends ServiceEntityRepository
{
    use FindForOauthTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Doctor::class);
    }

    public function findFFMKRDoctors(): ?array
    {
        return $this->createQueryBuilder('d')
            ->where('d.FFMKRAdhesion IS NOT NULL')
            ->getQuery()
            ->getResult()
        ;
    }

    public function countAllDoctors(): int
    {
        return $this->createQueryBuilder('d')
            ->select('count(d.id)')
            ->getQuery()
            ->getSingleScalarResult();
        ;
    }
}
