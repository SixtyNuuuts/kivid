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

    /**
     * Recherche les patients en fonction du formulaire
     * @return Patient|null
     */
    // public function searchWithWords($words): ?Patient
    // {
    //     if (null === $words) {
    //         return null;
    //     }

    //     return $this->createQueryBuilder('p')
    //         ->where('MATCH_AGAINST(p.firstname, p.lastname, p.email) AGAINST (:words boolean)>0')
    //         ->setParameter('words', $words)
    //         ->getQuery()
    //         ->getResult()
    //     ;
    // }
}
