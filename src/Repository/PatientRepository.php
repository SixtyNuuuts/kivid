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
     * Recherche les patients en fonction des searchTerms
     * @return Patient[]
     */
    public function searchWithWords($searchTerms): array
    {
        $qb = $this->createQueryBuilder('p');

        $searchTermsArray = explode(" ", $searchTerms);

        foreach ($searchTermsArray as $term) {
            if ($term) {
                $qb->where('ILIKE(p.firstname, :searchTerm) = TRUE')
                ->orWhere('ILIKE(p.lastname, :searchTerm) = TRUE')
                ->orWhere('ILIKE(p.email, :searchTerm) = TRUE')
                ->setParameter(':searchTerm', '%' . $term . '%');
            }
        }

        return $qb
            ->getQuery()
            ->getResult()
        ;
    }
}
