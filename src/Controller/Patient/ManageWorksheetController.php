<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Entity\Worksheet;
use App\Entity\WorksheetSession;
use App\Repository\VideoRepository;
use App\Repository\DoctorRepository;
use App\Repository\ExerciseRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PrescriptionRepository;
use App\Repository\WorksheetRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use App\Repository\WorksheetSessionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class ManageWorksheetController extends AbstractController
{
    private $doctorRepository;
    private $prescriptionRepository;
    private $worksheetRepository;
    private $exerciseRepository;
    private $worksheetSessionRepository;
    private $videoRepository;
    private $mailer;
    private $serializer;
    private $em;

    public function __construct(
        DoctorRepository $doctorRepository,
        PrescriptionRepository $prescriptionRepository,
        WorksheetRepository $worksheetRepository,
        ExerciseRepository $exerciseRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        VideoRepository $videoRepository,
        MailerInterface $mailer,
        SerializerInterface $serializerInterface,
        EntityManagerInterface $em
    ) {
        $this->doctorRepository = $doctorRepository;
        $this->prescriptionRepository = $prescriptionRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->exerciseRepository = $exerciseRepository;
        $this->videoRepository = $videoRepository;
        $this->mailer = $mailer;
        $this->serializer = $serializerInterface;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/fiches", name="app_patient_worksheets", methods={"GET"})
     */
    public function worksheetList(Patient $patient): Response
    {
        return $this->render('patient/worksheets_list.html.twig', [
            'patient' => $patient,
        ]);
    }

    /**
     * @Route("/{id}/get/prescriptions", name="app_patient_get_prescriptions", methods={"GET"})
     */
    public function getPrescriptions(Patient $patient): JsonResponse
    {
        return $this->json(
            $this->prescriptionRepository->findBy(['patient' => $patient]),
            200,
            [],
            ['groups' => 'prescription_read']
        );
    }

    /**
     * @Route("/{id}/init/worksheet-sessions", name="app_patient_init_worksheet_sessions", methods={"POST"})
     */
    public function initWorksheetSessions(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('init_worksheet_sessions' . $patient->getId(), $data->_token)) {
                $prescription = $this->prescriptionRepository->findOneBy(['id' => $data->prescriptionId]);

                $worksheet = $prescription->getWorksheet();

                $worksheetSessions = $this->worksheetSessionRepository->findBy(
                    ['prescription' => $prescription],
                    ['execOrder' => 'ASC'],
                );

                $this->generateSessionDates($worksheet, $worksheetSessions);

                $this->em->flush();

                return $this->json(
                    $worksheetSessions,
                    200,
                    [],
                    ['groups' => 'prescription_read']
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu initialiser les sessions de la prescription, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/start/worksheet-session", name="app_patient_start_worksheet_session", methods={"POST"})
     */
    public function startWorksheetSession(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('start_worksheet_session' . $patient->getId(), $data->_token)) {
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);
                $worksheetSession = $this->worksheetSessionRepository->findOneBy(['id' => $data->worksheetSessionId]);

                $worksheetSession->setIsInProgress(true);

                foreach ($worksheet->getExercises() as $exercise) {
                    $exercise->setIsCompleted(false);
                }

                $this->em->flush();

                return $this->json(
                    'exercices reset',
                    200,
                    [],
                    ['groups' => 'prescription_read']
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu démarrer la session de la prescription, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/completed/exercise", name="app_patient_exercise_completed", methods={"POST"})
     */
    public function exerciseCompleted(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('exercise_completed' . $patient->getId(), $data->_token)) {
                $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exercise_id]);

                $exercise->setIsCompleted(true);

                $this->em->flush();

                $this->ifAllExercisesIsCompletedSetWorksheetSessionsCompleted(
                    $data->worksheet_id,
                    $data->worksheetSession_id
                );

                return $this->json(
                    'Félicitations, vous avez terminé cet exercice !',
                    200,
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu enregistrer la complétion de cet exercice',
            500,
        );
    }

    private function generateSessionDates(Worksheet $worksheet, array $worksheetSessions): void
    {
        $executionDuration = (
            (
                604800 // secondes dans une semaine
                / $worksheet->getPerWeek()
            )
            / $worksheet->getPerDay()
        );

        $worksheetPrescriptionStartDate = new \DateTime();

        foreach ($worksheetSessions as $worksheetSession) {
            $worksheetSessionStartDate = new \DateTime();
            $worksheetSessionStartDate->setTimestamp(
                $worksheetPrescriptionStartDate->getTimestamp()
                + 1
            );
            $worksheetSession->setStartAt($worksheetSessionStartDate);

            $worksheetSessionDeadlineDate = new \DateTime();
            $worksheetSessionDeadlineDate->setTimestamp(
                $worksheetSessionStartDate->getTimestamp()
                + $executionDuration
            );
            $worksheetSession->setDeadlineAt($worksheetSessionDeadlineDate);

            $worksheetPrescriptionStartDate = $worksheetSessionDeadlineDate;
        }
    }

    private function ifAllExercisesIsCompletedSetWorksheetSessionsCompleted(
        int $worksheetId,
        int $worksheetSessionsId
    ): void {
        $exercises = $this->exerciseRepository->findBy(['worksheet' => $worksheetId]);

        $exercisesNotCompleted = array_filter(
            $exercises,
            fn ($exercise) => !$exercise->getIsCompleted()
        );

        if (empty($exercisesNotCompleted)) {
            $worksheetSession = $this->worksheetSessionRepository->findOneBy(['id' => $worksheetSessionsId]);
            
            $worksheetSession->setIsInProgress(false);
            $worksheetSession->setIsCompleted(true);

            $this->em->flush();
        }
    }
}
