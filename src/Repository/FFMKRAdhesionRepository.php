<?php

namespace App\Repository;

use App\Entity\FFMKRAdhesion;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method FFMKRAdhesion|null find($id, $lockMode = null, $lockVersion = null)
 * @method FFMKRAdhesion|null findOneBy(array $criteria, array $orderBy = null)
 * @method FFMKRAdhesion[]    findAll()
 * @method FFMKRAdhesion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FFMKRAdhesionRepository extends ServiceEntityRepository
{
    private $em;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $em)
    {
        parent::__construct($registry, FFMKRAdhesion::class);
        $this->em = $em;
    }

    public function resetAdhesionStatus():void
    {
        $this->em->createQuery('UPDATE App\Entity\FFMKRAdhesion a SET a.isActive = false WHERE a.numcli NOT LIKE \'NUMCLITEMP%\'')->execute();
    }

    public function getNotActiveAdhesions():array
    {
        return $this->em->createQuery('SELECT a.id FROM App\Entity\FFMKRAdhesion a WHERE a.isActive = false')->getResult();
    }

    public function deleteAdhesions($ids):array
    {
        $doctorQueryBuilder = $this->em->createQueryBuilder();
        $updatedDoctorsResult = 
            $doctorQueryBuilder->update('App\Entity\Doctor', 'd')
            ->set('d.FFMKRAdhesion', 'NULL')
            ->where('d.FFMKRAdhesion in (:ids)')
            ->setParameters(['ids' => $ids])
            ->getQuery()
            ->getResult()
        ;   

        $deletedFFMKRAdhesionsResult = 
            $this->createQueryBuilder('a')->delete()
            ->where('a.id in (:ids)')
            ->setParameters(['ids' => $ids])
            ->getQuery()
            ->getResult()
        ;

        return ['updatedDoctorsResult' => $updatedDoctorsResult, 'deletedFFMKRAdhesionsResult' => $deletedFFMKRAdhesionsResult];
    }

    public function countTotalAdhesions()
    {
        return $this->em->createQuery('SELECT COUNT(DISTINCT a.numcli) FROM App\Entity\FFMKRAdhesion a  WHERE a.numcli NOT LIKE \'NUMCLITEMP%\'')->getSingleScalarResult();
    }

    public function findByCriteria(int $maxresult, int $firstresult, ?string $search = null, string $searchColumn = null, ?string $sortColumnName, ?string $sortColumnStatus)
    {
        if($search && $search != '' && $searchColumn)
            $searchWhere = 'AND (lower(a.'.$searchColumn.') LIKE lower(\'%'.$search.'%\')) ';

        $orderBy =  $sortColumnName && $sortColumnStatus? 'ORDER BY a.'.$sortColumnName.' '.$sortColumnStatus : 'ORDER BY a.numcli DESC';
        
        return 
            $this->em->createQuery('SELECT a.numcli, a.firstname, a.lastname, a.email, a.numRpps, a.dateOf, a.requestToken, a.kividStatus FROM App\Entity\FFMKRAdhesion a WHERE a.numcli NOT LIKE \'NUMCLITEMP%\' '.($searchWhere??'').''.$orderBy.'')
            ->setMaxResults($maxresult)
            ->setFirstResult($firstresult)
            ->getResult()
        ;
    }

    public function countFilteredAdhesions(?string $search = null, string $searchColumn = null, ?string $sortColumnName, ?string $sortColumnStatus)
    {
        if($search && $search != '' && $searchColumn)
            $searchWhere = 'AND (lower(a.'.$searchColumn.') LIKE lower(\'%'.$search.'%\')) ';

        return $this->em->createQuery('SELECT COUNT(DISTINCT a.numcli) FROM App\Entity\FFMKRAdhesion a WHERE a.numcli NOT LIKE \'NUMCLITEMP%\' '.($searchWhere??'').'')->getSingleScalarResult();
    }
 
    // /**
    //  * @return FFMKRAdhesion[] Returns an array of FFMKRAdhesion objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FFMKRAdhesion
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
