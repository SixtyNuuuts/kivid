<?php

namespace App\Repository;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Repository\FindForOauthTrait;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Patient|null find($id, $lockMode = null, $lockVersion = null)
 * @method Patient|null findOneBy(array $criteria, array $orderBy = null)
 * @method Patient[]    findAll()
 * @method Patient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PatientRepository extends ServiceEntityRepository
{
    use FindForOauthTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Patient::class);
    }

    /**
     * @return Patient[]
     */
    public function findAllWithoutDoctor(Doctor $doctor)
    {
        $q = $this->getEntityManager()->createQuery(
            ' select p from App\Entity\Patient p
                where NOT EXISTS (
                    select dp from App\Entity\DoctorPatient dp where dp.doctor = :doctor and dp.patient = p.id
                )
            '
        )->setParameters([
            'doctor' => $doctor
        ]);

        return $q->getResult();
    }

    /**
     * Recherche les patients en fonction de searchTerm
     * @return Patient[]
     */
    public function searchWithWords($searchTerm)
    {
        $qb = $this->createQueryBuilder('p');

        $searchTermArray = explode(" ", $searchTerm);

        foreach ($searchTermArray as $term) {
            if ($term) {
                $qb->where('ILIKE(p.firstname, :searchTerm) = TRUE')
                ->orWhere('ILIKE(p.lastname, :searchTerm) = TRUE')
                ->orWhere('ILIKE(p.email, :searchTerm) = TRUE')
                ->setParameter(':searchTerm', $term);
            }
        }

        return $qb
            ->getQuery()
            ->getResult()
        ;
    }
}
