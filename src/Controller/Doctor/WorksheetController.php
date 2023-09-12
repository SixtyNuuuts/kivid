<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\Exercise;
use App\Entity\Worksheet;
use App\Entity\Commentary;
use App\Repository\VideoRepository;
use App\Repository\DoctorRepository;
use App\Service\NotificationService;
use App\Repository\PatientRepository;
use App\Repository\ExerciseRepository;
use App\Repository\WorksheetRepository;
use App\Repository\CommentaryRepository;
use App\Repository\PartOfBodyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\WorksheetSessionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/doctor")
 */
class WorksheetController extends AbstractController
{
    private $patientRepository;
    private $worksheetRepository;
    private $worksheetSessionRepository;
    private $videoRepository;
    private $exerciseRepository;
    private $partOfBodyRepository;
    private $notificationService;
    private $em;
    private $commentaryRepository;

    public function __construct(
        PatientRepository $patientRepository,
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        VideoRepository $videoRepository,
        ExerciseRepository $exerciseRepository,
        NotificationService $notificationService,
        PartOfBodyRepository $partOfBodyRepository,
        EntityManagerInterface $em,
        CommentaryRepository $commentaryRepository
    ) {
        $this->patientRepository = $patientRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->videoRepository = $videoRepository;
        $this->exerciseRepository = $exerciseRepository;
        $this->partOfBodyRepository = $partOfBodyRepository;
        $this->notificationService = $notificationService;
        $this->em = $em;
        $this->commentaryRepository = $commentaryRepository;
    }


    /**
     * @Route("/{id}/get/worksheet/{worksheetId}", name="app_doctor_get_worksheet", methods={"GET"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getWorksheet(Doctor $doctor, int $worksheetId): JsonResponse
    {
        $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

        return $this->json(
            $worksheet,
            200,
            [],
            ['groups' => 'worksheet_read']
        );
    }

    /**
     * @Route("/{id}/get/worksheets-group", name="app_doctor_get_worksheets_groupe", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getWorksheetsGroup(Doctor $doctor, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent());
        $worksheets = $this->worksheetRepository->findBy(['id' => $data->worksheetsIds]);

        return $this->json(
            $worksheets,
            200,
            [],
            ['groups' => 'worksheet_doctor_read']
        );
    }

    /**
     * @Route("/{id}/get/worksheets/{maxresult}/{firstresult}", name="app_doctor_get_worksheets", methods={"GET"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getWorksheets(Doctor $doctor, ?int $maxresult = null, ?int $firstresult = null): JsonResponse
    {
        $worksheets = $this->worksheetRepository->findByDoctorPatientNull($doctor, $maxresult, $firstresult);

        return $this->json(
            $worksheets,
            200,
            [],
            ['groups' => 'dashboard_worksheet_read']
        );
    }

    /**
     * @Route("/{id}/get/store-worksheets/{maxresult}/{firstresult}", name="app_doctor_get_store_worksheets", methods={"GET"})
     */
    public function getStoreWorksheets(Doctor $doctor, ?int $maxresult = null, ?int $firstresult = null, DoctorRepository $doctorRepository): JsonResponse
    {
        $doctorStoreReferent = $doctorRepository->findOneBy(['id'=>1]);
        $worksheets = $this->worksheetRepository->findByDoctorPatientNull($doctorStoreReferent, $maxresult, $firstresult);

        return $this->json(
            $worksheets,
            200,
            [],
            ['groups' => 'dashboard_worksheet_read']
        );
    }

    /**
     * @Route("/{id}/get/exercises/{worksheetId}", name="app_doctor_get_exercises", methods={"GET"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getExercises(Doctor $doctor, int $worksheetId): JsonResponse
    {
        $exercises = $this->exerciseRepository->findBy(
            ['worksheet' => $worksheetId],
            ['position' => 'ASC']
        );

        return $this->json(
            $exercises,
            200,
            [],
            ['groups' => 'worksheet_read']
        );
    }

    /**
     * @Route("/{id}/create/public-access/{worksheetId}", name="app_doctor_create_public_access", methods={"POST"})
     */
    public function createPublicAccess(Request $request, Doctor $doctor, int $worksheetId): JsonResponse
    {
        if($doctor->isGiveAccessPublicWorksheetGeneration())
        {   
            $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);
            $data = json_decode($request->getContent());

            if($worksheet instanceof Worksheet && !empty($data->worksheetTitleSlug))
            {
                $worksheet->setAccessPublicSlug($data->worksheetTitleSlug);
                $this->em->flush();

                return $this->json(
                    $worksheet->getAccessPublicSlug(),
                    200
                );        
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la création de l'accès public de la fiche",
            500,
        );
    }

    /**
     * @Route("/{id}/delete/public-access/{worksheetId}", name="app_doctor_delete_public_access", methods={"POST"})
     */
    public function deletePublicAccess(Request $request, Doctor $doctor, int $worksheetId): JsonResponse
    {
        if($doctor->isGiveAccessPublicWorksheetGeneration())
        {   
            $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

            if($worksheet instanceof Worksheet)
            {
                $worksheet->setAccessPublicSlug('');
                $this->em->flush();

                return $this->json(
                    null,
                    200
                );        
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la suppression de l'accès public de la fiche",
            500,
        );
    }

    /**
     * @Route("/{id}/get/all/worksheets", name="app_doctor_get_all_worksheets", methods={"GET"})
     */
    public function getAllWorksheets(Doctor $doctor): JsonResponse
    {
        $worksheets = $this->worksheetRepository->findAll();

        return $this->json(
            $worksheets,
            200,
            [],
            ['groups' => 'dashboard_worksheet_read']
        );
    }

    /**
     * @Route("/{id}/voir/{worksheetId}/{patientId}",
     * name="app_doctor_show_commentaries", methods={"GET"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function showCommentaries(
        Doctor $doctor,
        int $worksheetId = null,
        int $patientId = null
    ): Response {
        $patient =
        $patientId ?
            $this->patientRepository->findOneBy(['id' => $patientId])
        : null;

        return $this->render('patient/read_worksheet.html.twig', [
            'doctor' => $doctor,
            'patient' => $patient,
            'worksheetId' => $worksheetId,
            'status' => null,
            'stripeSubPlans' => null,
            'stripeSubscription' => null,
            'doctorView' => true,
        ]);
    }

    /**
     * @Route("/{id}/fiche/{action}/{worksheetId}/{patientId}",
     * name="app_doctor_worksheet_action", methods={"GET"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */

    public function worksheetAction(
        Doctor $doctor,
        string $action,
        string $worksheetId = null,
        int $patientId = null
    ): Response {
        $patient = $this->patientRepository->findOneBy(['id' => $patientId]);

        return $this->render('doctor/worksheet.html.twig', [
            'doctor' => $doctor,
            'action' => $action,
            'patient' => $patient,
            'worksheetId' => $worksheetId,
        ]);
    }

    /**
     * @Route("/{id}/create/worksheet", name="app_doctor_create_worksheet", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    // public function createWorksheet(Request $request, Doctor $doctor): JsonResponse
    // {
    //     if ($request->isMethod('post')) {
    //         $data = json_decode($request->getContent());

    //         if ($this->isCsrfTokenValid('create_worksheet' . $doctor->getId(), $data->_token)) {
    //             $patient = $this->patientRepository->findOneBy(['id' => $data->patientId]);
    //             $partOfBody = $this->partOfBodyRepository->findOneBy(['id' => $data->partOfBodyId]);

    //             $worksheet = new Worksheet();

    //             $worksheet->setTitle($data->title)
    //                       ->setPartOfBody($partOfBody)
    //                       ->setDuration($data->duration)
    //                       ->setPerWeek($data->perWeek)
    //                       ->setPerDay($data->perDay)
    //                       ->setPatient($patient)
    //                       ->setDoctor($doctor)
    //             ;

    //             foreach ($data->exercises as $dataExercise) {
    //                 $this->generateExercise($dataExercise, $worksheet, $doctor);
    //             }

    //             $this->em->persist($worksheet);

    //             if ($patient) {
    //                 $this->notificationService->createPrescriptionNotification($worksheet, $patient);
    //             }

    //             $this->em->flush();

    //             return $this->json(
    //                 "La fiche a bien été créée",
    //                 200,
    //             );
    //         }
    //     }

    //     return $this->json(
    //         "Une erreur s'est produite lors de la création de la fiche",
    //         500,
    //     );
    // }

    /**
     * @Route("/{id}/create/worksheets", name="app_doctor_create_worksheets", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function createWorksheets(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_worksheet' . $doctor->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $data->patientId]);
                
                $worksheets_for_json_response = [];
                if(!empty($data->worksheetsIds)) // precription direct / ajout fiche store (sans edition, du coup on a que les ids)
                {
                    $worksheets = $this->worksheetRepository->findBy(['id' => $data->worksheetsIds]);
                    foreach ($worksheets as $worksheetOrigin) {
                        $worksheet = new Worksheet();
        
                        $worksheet->setTitle($worksheetOrigin->getTitle())
                                ->setPartOfBody($worksheetOrigin->getPartOfBody())
                                ->setDuration($worksheetOrigin->getDuration())
                                ->setPerWeek($worksheetOrigin->getPerWeek())
                                ->setPerDay($worksheetOrigin->getPerDay())
                                ->setPatient($patient)
                                ->setDoctor($doctor)
                        ;
        
                        foreach ($worksheetOrigin->getExercises() as $exercise) {
                            $this->generateExercise($exercise, $worksheet, $doctor);
                        }

                        $this->em->persist($worksheet);
                        $worksheets_for_json_response[] = $worksheet;

                        if ($patient){
                            $this->notificationService->createPrescriptionNotification($worksheet, $patient);
                        }
                    }
                }
                elseif(!empty($data->worksheets))
                    foreach ($data->worksheets as $worksheetData) {
                        $partOfBody = $this->partOfBodyRepository->findOneBy(['id' => $worksheetData->partOfBody->id]);

                        $worksheet = new Worksheet();
        
                        $worksheet->setTitle($worksheetData->title)
                                ->setPartOfBody($partOfBody)
                                ->setDuration($worksheetData->duration)
                                ->setPerWeek($worksheetData->perWeek)
                                ->setPerDay($worksheetData->perDay)
                                ->setPatient($patient)
                                ->setDoctor($doctor)
                        ;
        
                        foreach ($worksheetData->exercises as $exerciseData) {
                            $this->generateExercise($exerciseData, $worksheet, $doctor);
                        }
    
                        // // Si en mode prescription : Création du modèle de fiche (identique sans le patient)
                        // if($patient && !$worksheetData->id)
                        // {
                        //     $worksheetCopy = clone $worksheet;
                        //     $worksheetCopy->setPatient(null);
                        //     $this->em->persist($worksheetCopy);
                        // }
        
                        // if($patient && !$worksheetData->id)
                        // {
                        //     $worksheetCopy = new Worksheet();
                        //     $worksheetCopy->setTitle($worksheet->getTitle())
                        //                 ->setPartOfBody($worksheet->getPartOfBody())
                        //                 ->setDuration($worksheet->getDuration())
                        //                 ->setPerWeek($worksheet->getPerWeek())
                        //                 ->setPerDay($worksheet->getPerDay())
                        //                 ->setPatient(null)
                        //                 ->setDoctor($worksheet->getDoctor());
                        
                        //     foreach ($worksheetData->exercises as $exerciseData) {
                        //         $this->generateExercise($exerciseData, $worksheetCopy);
                        //     }
                            
                        //     $this->em->persist($worksheetCopy);
                        // }

                        $this->em->persist($worksheet);
                        $worksheets_for_json_response[] = $worksheet;

                        if ($patient){
                            $this->notificationService->createPrescriptionNotification($worksheet, $patient);
                        }
                    }

                $this->em->flush();
    
                return $this->json(
                    ['worksheets' => $worksheets_for_json_response, 'message' => (!empty($worksheets) ? sizeof($worksheets) > 1 : (!empty($data->worksheets) ? sizeof($data->worksheets) > 1 : false)) ? "Les prescriptions ont bien été créées"  : ($patient ? "La prescription a bien été créée" : "La fiche a bien été créée")]
                    ,
                    200,
                    [],
                    ['groups' => 'dashboard_worksheet_read']    
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la création de la fiche",
            500,
        );
    }

    /**
     * @Route("/{id}/edit/worksheet", name="app_doctor_edit_worksheet", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function editWorksheet(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('edit_worksheet' . $doctor->getId(), $data->_token)) {
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);
                $partOfBody = $this->partOfBodyRepository->findOneBy(['id' => $data->partOfBodyId]);

                if ($worksheet->getDoctor() === $doctor) {
                    $worksheet->setTitle($data->title)
                              ->setPartOfBody($partOfBody)
                    ;

                    $checkIfWorksheetSessionsExist = $this->worksheetSessionRepository->findOneBy(
                        ['worksheet' => $worksheet, 'execOrder' => 1]
                    );

                    if (!$checkIfWorksheetSessionsExist) {
                        $worksheet->setDuration($data->duration)
                                  ->setPerWeek($data->perWeek)
                                  ->setPerDay($data->perDay)
                        ;
                    }

                    foreach ($data->exercises as $dataExercise) {
                        if ($dataExercise->id) {
                            $exercise = $this->exerciseRepository->findOneBy(['id' => $dataExercise->id]);
                            $exercise->setNumberOfRepetitions((int)$dataExercise->numberOfRepetitions)
                                     ->setNumberOfSeries((int)$dataExercise->numberOfSeries)
                                     ->setOption($dataExercise->option !== "" ? $dataExercise->option : null)
                                     ->setTempo($dataExercise->tempo !== "" ? $dataExercise->tempo : null)
                                     ->setHold($dataExercise->hold !== "" ? (int)$dataExercise->hold : null)
                                     ->setPosition((int)$dataExercise->position);

                            $exerciseDoctorCommentaryInputContent = trim($dataExercise->commentary->content);
                            if($exerciseDoctorCommentaryInputContent != '')
                            {
                                $exerciseDoctorCommentaries = array_filter($exercise->getCommentaries()->toArray(), function ($commentary) {
                                    return $commentary->getPatient() === null;
                                });
                                $exerciseDoctorCommentaryExistantContent = reset($exerciseDoctorCommentaries)->getContent() ?? null;
                                
                                if($exerciseDoctorCommentaryInputContent != $exerciseDoctorCommentaryExistantContent)
                                    $this->createCommentary($doctor, $dataExercise->commentary->id, $exerciseDoctorCommentaryInputContent, $exercise, $worksheet, null);    
                            }
                        }
                        if (null === $dataExercise->id) {
                            $this->generateExercise($dataExercise, $worksheet, $doctor);
                        }
                    }

                    $this->em->flush();

                    return $this->json(
                        "La fiche a bien été modifiée",
                        200,
                    );
                }
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la modification de la fiche",
            500,
        );
    }

    /**
     * @Route("/{id}/remove/exercise", name="app_doctor_remove_exercise",
     * methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function removeExercise(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('remove_exercise' . $doctor->getId(), $data->_token)) {
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);
                $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exerciseId]);

                if ($worksheet->getDoctor() === $doctor) {
                    $this->em->remove($exercise);

                    $this->em->flush();

                    foreach ($worksheet->getExercises() as $i => $exercise) {
                        $exercise->setPosition($i);
                    }

                    $this->em->flush();

                    return $this->json(
                        'L\'exercice a bien été supprimé',
                        200,
                    );
                }
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la suppression de l'exercice",
            500,
        );
    }

    /**
     * @Route("/{id}/remove/worksheet", name="app_doctor_remove_worksheet", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function removeWorksheet(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('remove_worksheet' . $doctor->getId(), $data->_token)) {
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);

                if ($worksheet->getDoctor() === $doctor) {
                    $this->em->remove($worksheet);

                    $this->em->flush();

                    return $this->json(
                        'La fiche a bien été supprimée',
                        200,
                    );
                }
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la suppression de la fiche",
            500,
        );
    }

    /**
     * @Route("/{id}/check/worksheet-sessions-exist/{worksheetId}",
     * name="app_doctor_check_worksheet_sessions_exist", methods={"GET"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function checkIfWorksheetSessionsExist(Doctor $doctor, int $worksheetId): JsonResponse
    {
        $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

        if (!$worksheet) {
            return $this->json("Aucune fiche ne correspond à cet Id", 500);
        }

        return $this->json(
            $this->worksheetSessionRepository->findOneBy(
                ['worksheet' => $worksheet, 'execOrder' => 1]
            ),
            200,
            [],
            ['groups' => 'session_read']
        );
    }

    private function generateExercise(object $dataExercise, Worksheet $worksheet, Doctor $doctor): void
    {
        $exercise = new Exercise();

        if($dataExercise instanceof Exercise)
        {
            $exercise
                ->setNumberOfRepetitions($dataExercise->getNumberOfRepetitions())
                ->setNumberOfSeries($dataExercise->getNumberOfSeries())
                ->setOption($dataExercise->getOption())
                ->setTempo($dataExercise->getTempo())
                ->setHold($dataExercise->getHold())
                ->setPosition($dataExercise->getPosition());

            $video = $dataExercise->getVideo();

            $exercise->setVideo($video);

            $worksheet->addExercise($exercise);
    
            $this->em->persist($exercise);
    
            $exerciseCommentaries = $dataExercise->getCommentaries();
            if(count($exerciseCommentaries) > 0)
            {
                $exerciseDoctorCommentaries = array_filter($exerciseCommentaries->toArray(), function ($commentary) {
                    return $commentary->getPatient() === null;
                });
                $exerciseDoctorCommentaryExistantContent = reset($exerciseDoctorCommentaries)->getContent() ?? null;
                                
                if($exerciseDoctorCommentaryExistantContent)
                    $this->createCommentary($doctor, null, $exerciseDoctorCommentaryExistantContent, $exercise, $worksheet, null);    
            }
        }
        else 
        {
            $exercise
                ->setNumberOfRepetitions((int)$dataExercise->numberOfRepetitions)
                ->setNumberOfSeries((int)$dataExercise->numberOfSeries)
                ->setOption($dataExercise->option !== "" ? $dataExercise->option : null)
                ->setTempo($dataExercise->tempo !== "" ? $dataExercise->tempo : null)
                ->setHold($dataExercise->hold !== "" ? (int)$dataExercise->hold : null)
                ->setPosition((int)$dataExercise->position);

            $video = $this->videoRepository->findOneById($dataExercise->video->id);
           
            $exercise->setVideo($video);

            $worksheet->addExercise($exercise);
    
            $this->em->persist($exercise);

            $exerciseDoctorCommentaryInputContent = trim($dataExercise->commentary->content);
            if($exerciseDoctorCommentaryInputContent!='')
                $this->createCommentary($doctor, null, $exerciseDoctorCommentaryInputContent, $exercise, $worksheet, null);
        }
    }

    /**
     * @Route("/{id}/create/commentary", name="app_doctor_create_commentary", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function createCommentaryAction(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_commentary' . $doctor->getId(), $data->_token)) {
                $commentaryId = $this->createCommentary($doctor, $data->commentaryId, $data->commentaryContent, $data->exerciseId, $data->worksheetId, $data->worksheetSessionId);
                
                $this->em->flush();

                return $this->json(
                    ['message' => 'Commentaire créé', 'commentaryId' => $commentaryId],
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la création du commentaire",
            500
        );
    }

    /**
     * @Route("/{id}/remove/commentary", name="app_doctor_remove_commentary", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function removeCommentary(Request $request): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($data->commentaryId) {
                $commentary = $this->commentaryRepository->findOneBy(['id' => $data->commentaryId]);

                $this->em->remove($commentary);

                $this->em->flush();

                return $this->json(
                    ['message' => 'Commentaire supprimé', 'commentaryId' => $data->commentaryId],
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la création du commentaire",
            500
        );
    }

    private function createCommentary($doctor, $commentaryId, $commentaryContent, $exercise, $worksheet, $worksheetSessionId): int
    {
        $commentary = $commentaryId ? 
            $this->commentaryRepository->findOneBy(['id' => $commentaryId])
            : new Commentary();

        $commentary->setContent($commentaryContent);

        if (!$commentaryId) {
            $exercise = $exercise instanceof Exercise ? $exercise : $this->exerciseRepository->findOneBy(['id' => $exercise]);
            $worksheet = $worksheet instanceof Worksheet ? $worksheet : $this->worksheetRepository->findOneBy(['id' => $worksheet]);
            $worksheetSession = $worksheetSessionId ? $this->worksheetSessionRepository->findOneBy(['id' => $worksheetSessionId]) : null;

            $commentary->setDoctor($doctor)
                       ->setExercise($exercise)
                       ->setWorksheet($worksheet)
                       ->setWorksheetSession($worksheetSession)
                       ->setCreatedAt(new \DateTimeImmutable())
            ;

            $this->em->persist($commentary);
        }

        return $commentary->getId();
    }
}
