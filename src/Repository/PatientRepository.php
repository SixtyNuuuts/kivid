<?php

namespace App\Repository;

use App\Entity\Doctor;
use DateTimeImmutable;
use App\Entity\Patient;
use Doctrine\ORM\Query;
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

    public function findByDoctor(Doctor $doctor, ?int $maxresult, ?int $firstresult)
    {
        return $this->createQueryBuilder('p')
                ->where('p.doctor = :doctor')
                ->setParameter(':doctor', $doctor)
                ->setMaxResults($maxresult)
                ->setFirstResult($firstresult)
                ->orderBy('p.createdAt', 'DESC')
                ->getQuery()->getResult();
    }
    
    public function findByDoctorOpti(Doctor $doctor, ?int $maxresult, ?int $firstresult)
    {
        return $this->createQueryBuilder('p')
                ->select('p.id', 'p.addRequestDoctor', 'p.avatarUrl', 'p.birthdate', 'p.civility', 'p.email', 'p.firstname', 'p.lastname', 'p.isVerified', 'p.lastLoginAt', 'p.gender')
                ->where('p.doctor = :doctor')
                ->setParameter(':doctor', $doctor)
                ->setMaxResults($maxresult)
                ->setFirstResult($firstresult)    
                ->getQuery()->setHydrationMode(Query::HYDRATE_SCALAR)->getResult();
    }
    
    public function findPatientsCreatedLastFourWeeks()
    {
        $fourWeeksAgo = new DateTimeImmutable('-4 weeks');
    
        return $this->createQueryBuilder('p')
            ->where('p.createdAt >= :fourWeeksAgo')
            ->setParameter('fourWeeksAgo', $fourWeeksAgo)
            ->getQuery()
            ->getResult();
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

    public function countAllPatients(): int
    {
        return $this->createQueryBuilder('p')
            ->select('count(p.id)')
            ->getQuery()
            ->getSingleScalarResult();
        ;
    }
}
