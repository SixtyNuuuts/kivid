<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\Exercise;
use App\Entity\Worksheet;
use App\Service\NotificationService;
use App\Repository\VideoRepository;
use App\Repository\PatientRepository;
use App\Repository\ExerciseRepository;
use App\Repository\WorksheetRepository;
use App\Repository\WorksheetSessionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

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
    private $notificationService;
    private $em;

    public function __construct(
        PatientRepository $patientRepository,
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        VideoRepository $videoRepository,
        ExerciseRepository $exerciseRepository,
        NotificationService $notificationService,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->videoRepository = $videoRepository;
        $this->exerciseRepository = $exerciseRepository;
        $this->notificationService = $notificationService;
        $this->em = $em;
    }


    /**
     * @Route("/{id}/get/worksheet/{worksheetId}", name="app_doctor_get_worksheet", methods={"GET"})
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
     * @Route("/{id}/get/worksheets", name="app_doctor_get_worksheets", methods={"GET"})
     */
    public function getWorksheets(Doctor $doctor): JsonResponse
    {
        $worksheets = $this->worksheetRepository->findBy(['doctor' => $doctor]);

        return $this->json(
            $worksheets,
            200,
            [],
            ['groups' => 'dashboard_worksheet_read']
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
            'doctorView' => true,
        ]);
    }

    /**
     * @Route("/{id}/fiche/{action}/{worksheetId}/{patientId}",
     * name="app_doctor_worksheet_action", methods={"GET"})
     */

    public function worksheetAction(
        Doctor $doctor,
        string $action,
        int $worksheetId = null,
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
     */
    public function createWorksheet(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_worksheet' . $doctor->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $data->patientId]);

                $worksheet = new Worksheet();

                $worksheet->setTitle($data->title)
                          ->setPartOfBody($data->partOfBody)
                          ->setDuration($data->duration)
                          ->setPerWeek($data->perWeek)
                          ->setPerDay($data->perDay)
                          ->setPatient($patient)
                          ->setDoctor($doctor)
                ;

                foreach ($data->exercises as $dataExercise) {
                    $this->generateExercise($dataExercise, $worksheet);
                }

                $this->em->persist($worksheet);

                if ($patient) {
                    $this->notificationService->createPrescriptionNotification($worksheet, $patient);
                }

                $this->em->flush();

                return $this->json(
                    "La fiche a bien été créée",
                    200,
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
     */
    public function editWorksheet(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('edit_worksheet' . $doctor->getId(), $data->_token)) {
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);

                if ($worksheet->getDoctor() === $doctor) {
                    $worksheet->setTitle($data->title)
                              ->setPartOfBody($data->partOfBody)
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
                        }
                        if (null === $dataExercise->id) {
                            $this->generateExercise($dataExercise, $worksheet);
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

    private function generateExercise(object $dataExercise, Worksheet $worksheet): void
    {
        $exercise = new Exercise();

        $exercise->setNumberOfRepetitions((int)$dataExercise->numberOfRepetitions)
                 ->setNumberOfSeries((int)$dataExercise->numberOfSeries)
                 ->setOption($dataExercise->option !== "" ? $dataExercise->option : null)
                 ->setTempo($dataExercise->tempo !== "" ? $dataExercise->tempo : null)
                 ->setHold($dataExercise->hold !== "" ? (int)$dataExercise->hold : null)
                 ->setPosition((int)$dataExercise->position);

        $video = $this->videoRepository->findOneById($dataExercise->video->id);

        $exercise->setVideo($video);

        $worksheet->addExercise($exercise);

        $this->em->persist($exercise);
    }
}
