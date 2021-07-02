<?php

namespace App\Repository;

use App\Entity\DoctorPatient;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method DoctorPatient|null find($id, $lockMode = null, $lockVersion = null)
 * @method DoctorPatient|null findOneBy(array $criteria, array $orderBy = null)
 * @method DoctorPatient[]    findAll()
 * @method DoctorPatient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DoctorPatientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DoctorPatient::class);
    }
}
