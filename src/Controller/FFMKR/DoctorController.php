<?php

namespace App\Controller\FFMKR;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Service\UserService;
use App\Entity\FFMKRAdhesion;
use App\Repository\DoctorRepository;
use App\Service\NotificationService;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\FFMKRAdhesionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/ffmkr")
 */
class DoctorController extends AbstractController
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
     * @Route("/get/doctors", name="app_ffmkr_get_doctors", methods={"GET"})
     */
    public function getDoctors(): JsonResponse
    {
        return $this->json(
            $this->FFMKRAdhesionRepository->findAll(),
            200,
            [],
            ['groups' => 'ffmkr_adhesion_read']
        );
    }

    /**
     * @Route("/import/doctors", name="app_ffmkr_import_doctors", methods={"POST"})
     */
    public function importDoctors(Request $request): JsonResponse
    {
        if ($request->isMethod('post')) {
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
                $updatedFFMKRDoctorsCount = 0;
                $createdFFMKRDoctorsCount = 0;
                $deletedFFMKRDoctorsCount = 0;

                while (($data = fgetcsv($csv, 1000, ';')) !== FALSE) 
                {
                    $FFMKRDoctorsData = array_combine($columnsHeaders, $data);

                    if($row >= 1 && !empty($FFMKRDoctorsData['numcli']))
                    {
                        $FFMKRAdhesion = $this->FFMKRAdhesionRepository->findOneBy(['numcli' => $FFMKRDoctorsData['numcli']]);

                        if(!$FFMKRAdhesion instanceof FFMKRAdhesion) 
                        {
                            $FFMKRAdhesion = new FFMKRAdhesion();
                            $FFMKRAdhesionCreation = true;

                            $doctor = $this->doctorRepository->findOneBy(['email' => $FFMKRDoctorsData['email']??'']);
                            if(!$doctor instanceof Doctor)
                            {
                                $doctor = new Doctor();
                                $this->em->persist($doctor);
                            }

                            $FFMKRAdhesion->setDoctor($doctor);
                            $this->em->persist($FFMKRAdhesion);
                        }
                        else
                            $doctor = $FFMKRAdhesion->getDoctor();

                        $hasChanges = false;
                        foreach ($FFMKRDoctorsData as $key => $value) 
                        {
                            if ($key != '' && $FFMKRAdhesion->{'get' . ucfirst($key)}() !== $value) 
                            {
                                $FFMKRAdhesion->{'set' . ucfirst($key)}($value);
                                $hasChanges = true;
                            }
                        }
        
                        if ($hasChanges)
                        {
                            $doctor
                                ->setEntityName($FFMKRDoctorsData['entityName'])
                                ->setStreet($FFMKRDoctorsData['streetName'])
                                ->setNumRppsAmeli($FFMKRDoctorsData['numRpps'])
                                ->setCity($FFMKRDoctorsData['city'])
                                ->setEmail($FFMKRDoctorsData['email'])
                                ->setFirstname(ucwords(strtolower($FFMKRDoctorsData['firstname'])))
                                ->setLastname(ucwords(strtolower($FFMKRDoctorsData['lastname'])))
                                ->setCivility($FFMKRDoctorsData['civility'])
                                ->setGender($FFMKRDoctorsData['civility'] == 1 ? 'male' : ($FFMKRDoctorsData['civility'] == 2 ? 'female' : null))
                            ;

                            !empty($FFMKRAdhesionCreation) ? $createdFFMKRDoctorsCount++ : $updatedFFMKRDoctorsCount++;
                        }

                        $FFMKRAdhesion->setIsActive(true);
                    }
                    $row++;
                }
                fclose($csv);
                
                $this->em->flush();

                $deletedFFMKRDoctorsIds = $this->FFMKRAdhesionRepository->getAdhesionIdsWhereIsActiveIsFalse();
                if(!empty($deletedFFMKRDoctorsIds))
                {
                    $deletedFFMKRDoctorsIds = array_reduce($deletedFFMKRDoctorsIds, function ($IdsArray, $el) 
                    {
                        $IdsArray[] = $el['id'];
                        return $IdsArray;
                    }, []);
                    
                    $deletedFFMKRAdhesions = $this->FFMKRAdhesionRepository->deleteAdhesions($deletedFFMKRDoctorsIds);
                    $deletedFFMKRDoctorsCount = $deletedFFMKRAdhesions['deletedFFMKRAdhesionsResult'];
                    dump($deletedFFMKRDoctorsCount, $deletedFFMKRDoctorsIds);
                }

                return $this->json(
                    ['updatedFFMKRDoctorsCount' => $updatedFFMKRDoctorsCount, 'createdFFMKRDoctorsCount' => $createdFFMKRDoctorsCount, 'deletedFFMKRDoctorsCount' => $deletedFFMKRDoctorsCount],
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de l'importation du fichier csv",
            500
        );
    }
}
