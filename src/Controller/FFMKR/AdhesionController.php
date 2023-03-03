<?php

namespace App\Controller\FFMKR;

use App\Entity\Doctor;
use App\Service\UserService;
use App\Entity\FFMKRAdhesion;
use App\Repository\DoctorRepository;
use App\Service\NotificationService;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\FFMKRAdhesionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/ffmkr")
 */
class AdhesionController extends AbstractController
{
    private $doctorRepository;
    private $FFMKRAdhesionRepository;
    private $userService;
    private $notificationService;
    private $em;

    public function __construct(
        DoctorRepository $doctorRepository,
        FFMKRAdhesionRepository $FFMKRAdhesionRepository,
        UserService $userService,
        NotificationService $notificationService,
        EntityManagerInterface $em
    ) {
        $this->doctorRepository = $doctorRepository;
        $this->FFMKRAdhesionRepository = $FFMKRAdhesionRepository;
        $this->notificationService = $notificationService;
        $this->userService = $userService;
        $this->em = $em;
    }

    /**
     * @Route("/adhesion", name="app_ffmkr_adhesion", methods={"GET"})
     */
    public function adhesion(): JsonResponse
    {
        return $this->json(
            'Adhesion',
            200
        );
    }

    /**
     * @Route("/get/adhesions", name="app_ffmkr_get_adhesions", methods={"GET"})
     */
    public function getAdhesions(): JsonResponse
    {
        return $this->json(
            $this->FFMKRAdhesionRepository->findAll(),
            200,
            [],
            ['groups' => 'ffmkr_adhesion_read']
        );
    }

    /**
     * @Route("/import/adhesions", name="app_ffmkr_import_adhesions", methods={"POST"})
     */
    public function importAdhesions(Request $request): JsonResponse
    {
        $csvFile = $request->files->get('csv_file');

        if (!$csvFile instanceof UploadedFile) {
            throw new \InvalidArgumentException('Fichier CSV introuvable dans la requête');
        }

        if (($csv = fopen($csvFile->getPathname(), 'r')) !== FALSE) {
            // $columnsHeaders = fgetcsv($csv, 1000, ";");
            // 'NUMCLI' => 'numcli',
            // 'CIVILITE' => 'civility',
            // 'NOM' => 'lastname',
            // 'NOM_JEUNE_FILLE' => 'maidenName',
            // 'PRENOM' => 'firstname',
            // 'NOM_SUITE' => 'suiteName',
            // 'DETINATAIRE' => 'entityName',
            // 'NOVOIE' => 'streetNumber',
            // 'VOIE' => 'streetName',
            // 'COMPLEMENT' => 'streetComplement',
            // 'CP' => 'postalCode',
            // 'VILLE' => 'city',
            // 'PAYS' => 'country',
            // 'DATE_DE' => 'dateOf',
            // 'NUM_RPPS' => 'numRpps',
            // 'TEL' => 'tel',
            // 'MOBILE' => 'mobile',
            // 'EMAIL' => 'email',
            // 'DATE NAISSANCE' => 'birthdate',
            $columnsHeaders = 
            [
                0 => 'numcli',
                1 => 'civility',
                2 => 'lastname',
                3 => 'maidenName',
                4 => 'firstname',
                5 => 'suiteName',
                6 => 'entityName',
                7 => 'streetNumber',
                8 => 'streetName',
                9 => 'streetComplement',
                10 => 'postalCode',
                11 => 'city',
                12 => 'country',
                13 => '',
                14 => 'dateOf',
                15 => '',
                16 => '',
                17 => 'numRpps',
                18 => 'tel',
                19 => '',
                20 => 'mobile',
                21 => 'email',
                22 => '',
                23 => '',
                24 => '',
                25 => '',
                26 => 'birthdate',  
            ];

            $this->FFMKRAdhesionRepository->resetAdhesionStatus();
            
            $row = 0;
            $updatedFFMKRAdhesionsCount = 0;
            $createdFFMKRAdhesionsCount = 0;
            $deletedFFMKRAdhesionsCount = 0;

            while (($data = fgetcsv($csv, 1000, ';')) !== FALSE) 
            {
                $FFMKRAdhesionsData = array_combine($columnsHeaders, $data);

                if($row >= 1 && !empty($FFMKRAdhesionsData['numcli']))
                {
                    $FFMKRAdhesion = $this->FFMKRAdhesionRepository->findOneBy(['numcli' => $FFMKRAdhesionsData['numcli']]);

                    if(!$FFMKRAdhesion instanceof FFMKRAdhesion) 
                    {
                        $FFMKRAdhesion = new FFMKRAdhesion();

                        $doctor = $this->doctorRepository->findOneBy(['email' => $FFMKRAdhesionsData['email']??'']);
                        if($doctor instanceof Doctor)
                            $FFMKRAdhesion->setDoctor($doctor);

                        $isFFMKRAdhesionCreation = true;   
                        $createdFFMKRAdhesionsCount++;
                        $this->em->persist($FFMKRAdhesion);
                    }

                    $hasChanges = false;
                    foreach ($FFMKRAdhesionsData as $key => $value) 
                    {
                        if ($key != '' && $FFMKRAdhesion->{'get' . ucfirst($key)}() !== $value) 
                        {
                            $FFMKRAdhesion->{'set' . ucfirst($key)}($value);
                            $hasChanges = true;
                        }
                    }
    
                    if (empty($isFFMKRAdhesionCreation) && $hasChanges)
                        $updatedFFMKRAdhesionsCount++;

                    $FFMKRAdhesion->setIsActive(true);
                }
                $row++;
            }
            $this->em->flush();
            fclose($csv);

            $deletedFFMKRAdhesionsIds = $this->FFMKRAdhesionRepository->getNotActiveAdhesions();
            if(!empty($deletedFFMKRAdhesionsIds))
            {
                $deletedFFMKRAdhesionsIds = array_reduce($deletedFFMKRAdhesionsIds, function ($IdsArray, $el) 
                {
                    $IdsArray[] = $el['id'];
                    return $IdsArray;
                }, []);
                
                $deletedFFMKRAdhesions = $this->FFMKRAdhesionRepository->deleteAdhesions($deletedFFMKRAdhesionsIds);
                $deletedFFMKRAdhesionsCount = $deletedFFMKRAdhesions['deletedFFMKRAdhesionsResult'];
            }

            return $this->json(
                ['updatedFFMKRAdhesionsCount' => $updatedFFMKRAdhesionsCount, 'createdFFMKRAdhesionsCount' => $createdFFMKRAdhesionsCount, 'deletedFFMKRAdhesionsCount' => $deletedFFMKRAdhesionsCount],
                200
            );
        }
    }
}
