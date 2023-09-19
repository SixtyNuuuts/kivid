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
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use App\Controller\RedirectFromIsGrantedTrait;

/**
 * @Route("/ffmkr")
 */
class AdhesionController extends AbstractController
{
    use RedirectFromIsGrantedTrait;

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
     * @Route("/adhesion/{kividtoken}/{numcli}", name="app_ffmkr_adhesion", methods={"GET"})
     */
    public function adhesion(string $kividtoken, string $numcli): JsonResponse
    {
        $kividTokenDecode = json_decode(base64_decode(strtr($kividtoken??'', '-_,', '+/=')));

        $doctor = $this->doctorRepository->findOneBy(['id' => $kividTokenDecode->doctorId??'']);

        if(!$doctor instanceof Doctor || !$doctor->getFFMKRAdhesion() || $doctor->getFFMKRAdhesion()->getNumcli() != 'NUMCLITEMP-'. $doctor->getId() || empty($numcli))
            return $this->json(
                "Une erreur s'est produite lors de la création d'adhésion FFMKR'",
                500
            );

        $doctor->getFFMKRAdhesion()->setNumcli((int)$numcli)->setFirstname(strtoupper($doctor->getFirstname()))->setLastName(strtoupper($doctor->getLastname()))->setEmail($doctor->getEmail());

        $this->em->flush();

        return $this->json(
            'Adhesion FFMKR bien enregistrée !',
            200
        );
    }

    /**
     * @Route("/get/adhesions", name="app_ffmkr_get_adhesions", methods={"GET"})
     */
    public function getAdhesions(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            return $this->json(
                $this->FFMKRAdhesionRepository->findAll(),
                200,
                [],
                ['groups' => 'ffmkr_adhesion_read']
            );
        } else {
            if ($this->getUser()) {
                return $this->redirectFromIsGranted();
            }
            else {
                return $this->redirectToRoute('app_home');
            }
        }    
    }

    /**
     * @Route("/request-token/set/{id}", name="app_ffmkr_set_request_token", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function setRequestToken(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('save_ffmkr_request_token' . $doctor->getId(), $data->_token)) {
                $dataToken = [
                    'doctorId' => $doctor->getId(),
                    'rt' => bin2hex(random_bytes(5))
                ];
                $kividToken = strtr(base64_encode(json_encode($dataToken)), '+/=', '-_,');
                $numCliTemp = 'NUMCLITEMP-'.$dataToken['doctorId'];

                $FFMKRAdhesion = $this->FFMKRAdhesionRepository->findOneBy(['numcli' => $numCliTemp]);
                
                if(!$FFMKRAdhesion instanceof FFMKRAdhesion)
                    $FFMKRAdhesion = new FFMKRAdhesion();

                $FFMKRAdhesion->setNumcli($numCliTemp)->setDoctor($doctor)->setRequestToken($dataToken['rt']);

                $this->em->persist($FFMKRAdhesion);
                $this->em->flush();
                
                return $this->json(
                    [
                        'kividToken' => $kividToken,
                    ],
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de sauvegarde du Request Token FFMKR",
            500
        );
    }

    /**
     * @Route("/request-adhesion/check/{id}", name="app_ffmkr_check_request_adhesion", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function checkRequestAdhesion(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            return $this->json(
                [
                    'ffmkrAdhesionNumCli' => $doctor->getFFMKRAdhesion()->getNumcli(),
                ],
                200
            );
        }

        return $this->json(
            "Une erreur s'est produite lors de sauvegarde du Request Token FFMKR",
            500
        );
    }

    /**
     * @Route("/import/adhesions/start", name="app_ffmkr_start_import_adhesions", methods={"GET"})
     */
    public function startImportAdhesions(): JsonResponse
    {        
        $this->FFMKRAdhesionRepository->resetAdhesionStatus();
        return $this->json(
            'Start Import Adhesions',
            200
        );
    }

    /**
     * @Route("/import/adhesions/chunk", name="app_ffmkr_import_chunk_adhesions", methods={"POST"})
     */
    public function importChunkAdhesions(Request $request): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if (!empty($data->chunk)) {
                $csvLinesArray = preg_split("/\r\n|\n|\r/", $data->chunk);

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
                // $columnsHeaders = 
                // [
                //     0 => 'numcli',
                //     1 => 'civility',
                //     2 => 'lastname',
                //     3 => 'maidenName',
                //     4 => 'firstname',
                //     5 => 'suiteName',
                //     6 => 'entityName',
                //     7 => 'streetNumber',
                //     8 => 'streetName',
                //     9 => 'streetComplement',
                //     10 => 'postalCode',
                //     11 => 'city',
                //     12 => 'country',
                //     13 => '',
                //     14 => 'dateOf',
                //     15 => '',
                //     16 => '',
                //     17 => 'numRpps',
                //     18 => 'tel',
                //     19 => '',
                //     20 => 'mobile',
                //     21 => 'email',
                //     22 => '',
                //     23 => '',
                //     24 => '',
                //     25 => '',
                //     26 => 'birthdate',  
                // ];
                $columnsHeaders = 
                [
                    0 => 'numcli',
                    1 => 'firstname',
                    2 => 'lastname',
                    3 => 'email',
                    4 => 'numRpps',
                ];

                $updatedFFMKRAdhesionsCount = 0;
                $createdFFMKRAdhesionsCount = 0;

                foreach ($csvLinesArray as $csvLine) {
                    if(strlen($csvLine)>10)
                    {
                        $FFMKRAdhesionsData = array_combine($columnsHeaders, explode(';',$csvLine));
                        $isFFMKRAdhesionCreation = false; 

                        if(!empty($FFMKRAdhesionsData['numcli']))
                        {
                            $FFMKRAdhesion = $this->FFMKRAdhesionRepository->findOneBy(['numcli' => $FFMKRAdhesionsData['numcli']]);
        
                            if(!$FFMKRAdhesion instanceof FFMKRAdhesion) 
                            {
                                $FFMKRAdhesion = new FFMKRAdhesion();
        
                                $doctor = $this->doctorRepository->findOneBy(['email' => $FFMKRAdhesionsData['email']??'']);
                                if($doctor instanceof Doctor)
                                {
                                    if(!empty($doctor->getFFMKRAdhesion()))
                                        $FFMKRAdhesion = $doctor->getFFMKRAdhesion();
                                    else    
                                        $FFMKRAdhesion->setDoctor($doctor);
                                }
        
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
            
                            if (!$isFFMKRAdhesionCreation && $hasChanges)
                                $updatedFFMKRAdhesionsCount++;
        
                            $FFMKRAdhesion->setIsActive(true);
                        }    
                    }
                }
                $this->em->flush();
                $this->em->clear();
        
                return $this->json(
                    ['updatedFFMKRAdhesionsCount' => $updatedFFMKRAdhesionsCount, 'createdFFMKRAdhesionsCount' => $createdFFMKRAdhesionsCount],
                    200
                );
            }
        }
    }

    /**
     * @Route("/import/adhesions/stop", name="app_ffmkr_stop_import_adhesions", methods={"GET"})
     */
    public function stopImportAdhesions(): JsonResponse
    {
        $deletedFFMKRAdhesionsCount = 0;
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
            ['deletedFFMKRAdhesionsCount' => $deletedFFMKRAdhesionsCount],
            200
        );
    }
}
