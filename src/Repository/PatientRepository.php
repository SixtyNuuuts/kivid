<?php

namespace App\Repository;

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

    // public function findAllWithoutDoctor($doctor)
    // {
    //     if (null === $doctor) {
    //         return null;
    //     }
    //     // $qb = $this->createQueryBuilder('p');
    //     // return $qb->join('p.doctors', 'f')
    //     // ->where($qb->expr()->neq('f.id', $doctor->getId()))
    //     // ->getQuery()
    //     // ->getResult();

    //     return $this->createQueryBuilder('p')
    //         ->where('p.doctors = :doctor')
    //         ->setParameter(':doctor', $doctor)
    //         ->getQuery()
    //         ->getResult()
    //     ;
    // }


    /**
     * Recherche les patients en fonction de searchTerm
     * @return Patient[]
     */
    public function searchWithWords($searchTerm)
    {
        $qb = $this->createQueryBuilder('p');

        if (null === $searchTerm) {
            return $qb
                ->getQuery()
                ->getResult()
            ;
        }

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
