<?php

namespace App\Repository;

use App\Entity\Doctor;
use App\Entity\Worksheet;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Worksheet|null find($id, $lockMode = null, $lockVersion = null)
 * @method Worksheet|null findOneBy(array $criteria, array $orderBy = null)
 * @method Worksheet[]    findAll()
 * @method Worksheet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WorksheetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Worksheet::class);
    }

    public function findByDoctor(Doctor $doctor, ?int $maxresult, ?int $firstresult)
    {
        return $this->createQueryBuilder('w')
                ->where('w.doctor = :doctor')
                ->setParameter(':doctor', $doctor)
                ->setMaxResults($maxresult)
                ->setFirstResult($firstresult)
                ->orderBy('w.createdAt', 'DESC')
                ->getQuery()->getResult();
    }

    public function findByDoctorPatientNull(Doctor $doctor, ?int $maxresult, ?int $firstresult)
    {
        return $this->createQueryBuilder('w')
                ->where('w.doctor = :doctor')
                ->andWhere('w.patient IS NULL')
                ->setParameter(':doctor', $doctor)
                ->setMaxResults($maxresult)
                ->setFirstResult($firstresult)
                ->orderBy('w.createdAt', 'DESC')
                ->getQuery()->getResult();
    }

    public function findDoctorWorksheets(Doctor $doctor)
    {
        $q = $this->getEntityManager()->createQuery(
            'select w from App\Entity\Worksheet w
                where EXISTS (
                    select p from App\Entity\Prescription p where p.doctor = :doctor and p.worksheet = w.id
                )
            '
        )->setParameters([
            'doctor' => $doctor
        ]);

        return $q->getResult();
    }
}
