<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Service\NotificationService;
use App\Repository\WorksheetRepository;
use App\Service\WorksheetSessionService;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\NotificationRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\WorksheetSessionRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/patient")
 */
class WorksheetSessionController extends AbstractController
{
    private $worksheetRepository;
    private $worksheetSessionRepository;
    private $worksheetSessionService;
    private $em;

    public function __construct(
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        WorksheetSessionService $worksheetSessionService,
        EntityManagerInterface $em
    ) {
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->worksheetSessionService = $worksheetSessionService;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/get/current-worksheet-session/{worksheetId}/{param}",
     * name="app_patient_get_current_worksheet_session", methods={"GET"})
     * @isGranted("IS_OWNER_OR_OWNERDOC", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getCurrentWorksheetSession(
        Patient $patient,
        int $worksheetId,
        NotificationRepository $notificationRepository,
        NotificationService $notificationService,
        string $param = ''
    ): JsonResponse {
        $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

        if (!$worksheet) {
            return $this->json("Aucune fiche ne correspond à cet Id", 500);
        }

        $currentWorksheetSession = $this->worksheetSessionRepository->findCurrentWorksheetSession($worksheet);

        if ($currentWorksheetSession && $param === 'time-left-before-next') {
            $now = new \DateTime();
            $endDate = $currentWorksheetSession->getEndAt();
            $differenceInSeconds = $endDate->format('U') - $now->format('U');

            if (
                $differenceInSeconds >= 3600
                && $differenceInSeconds <= 43200
                && !$currentWorksheetSession->getIsCompleted()
            ) {
                $notifTimeLeftExist = $notificationRepository->findOneBy([
                    "type" => "timing-worksheet", "typeId" => 1 + $currentWorksheetSession->getId()
                ]);

                if (!$notifTimeLeftExist) {
                    $notificationService->createTimingWorksheetNotification(
                        $patient,
                        'heures',
                        $currentWorksheetSession->getWorksheet(),
                        1 + $currentWorksheetSession->getId()
                    );
                    $notifTimeLeft = [
                        'time' => 'heures',
                        'worksheet' => $currentWorksheetSession->getWorksheet()->getTitle(),
                        'worksheetId' => $currentWorksheetSession->getWorksheet()->getId(),
                    ];
                }
            }

            if (
                $differenceInSeconds >= 60
                && $differenceInSeconds <= 3599
                && !$currentWorksheetSession->getIsCompleted()
            ) {
                $notifTimeLeftExist = $notificationRepository->findOneBy([
                    "type" => "timing-worksheet", "typeId" => 2 + $currentWorksheetSession->getId()
                ]);

                if (!$notifTimeLeftExist) {
                    $notificationService->createTimingWorksheetNotification(
                        $patient,
                        'minutes',
                        $currentWorksheetSession->getWorksheet(),
                        2 + $currentWorksheetSession->getId()
                    );
                    $notifTimeLeft = [
                        'time' => 'minutes',
                        'worksheet' => $currentWorksheetSession->getWorksheet()->getTitle(),
                        'worksheetId' => $currentWorksheetSession->getWorksheet()->getId(),
                    ];
                }
            }

            $this->em->flush();
        }

        if (!$currentWorksheetSession && $param != 'doctorview' && $param != 'time-left-before-next') {
            $firstGenerateWorksheetSession =
                $this->worksheetSessionService->generateWorksheetSessionsAndGetFirst($worksheet);

            if (!$firstGenerateWorksheetSession) {
                return $this->json(
                    false,
                    200
                );
            }

            $currentWorksheetSession = $firstGenerateWorksheetSession;
        }

        $notifTimeLeft = $notifTimeLeft ?? null;

        return $this->json(
            ['currentWorksheetSession' => $currentWorksheetSession, 'notifTimeLeft' => $notifTimeLeft],
            200,
            [],
            ['groups' => 'session_read']
        );
    }

    /**
     * @Route("/{id}/get/total-worksheet-sessions/{worksheetId}",
     * name="app_patient_get_total_worksheet_sessions", methods={"GET"})
     * @isGranted("IS_OWNER_OR_OWNERDOC", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getTotalWorksheetSessions(Patient $patient, int $worksheetId): JsonResponse
    {
        $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

        if (!$worksheet) {
            return $this->json("Aucune fiche ne correspond à cet Id", 500);
        }

        return $this->json(
            $this->worksheetSessionRepository->countWorksheetSessions($worksheet),
            200
        );
    }

    /**
     * @Route("/{id}/get/total-completed-worksheet-sessions/{worksheetId}",
     * name="app_patient_get_total_completed_worksheet_sessions", methods={"GET"})
     * @isGranted("IS_OWNER_OR_OWNERDOC", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getTotalCompletedWorksheetSessions(Patient $patient, int $worksheetId): JsonResponse
    {
        $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

        if (!$worksheet) {
            return $this->json("Aucune fiche ne correspond à cet Id", 500);
        }

        return $this->json(
            $this->worksheetSessionRepository->countCompletedWorksheetSessions($worksheet),
            200
        );
    }

    /**
     * @Route("/{id}/start/worksheet-session", name="app_patient_start_worksheet_session", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
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
                    'Session démarrée',
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors du démarrage de la session",
            500
        );
    }

    /**
     * @Route("/{id}/complete/worksheet-session", name="app_patient_complete_worksheet_session", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function completeWorksheetSession(
        Request $request,
        Patient $patient,
        NotificationService $notificationService
    ): JsonResponse {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('complete_worksheet_session' . $patient->getId(), $data->_token)) {
                $worksheetSession = $this->worksheetSessionRepository->findOneBy(['id' => $data->worksheetSessionId]);

                $worksheetSession->setIsInProgress(false);

                $worksheetSession->setIsCompleted(true);

                $worksheetSession->setDoneAt(new \DateTime());

                $worksheetSessionsCount = $this->worksheetSessionRepository->countWorksheetSessions(
                    $worksheetSession->getWorksheet()
                );

                if ($worksheetSession->getExecOrder() == $worksheetSessionsCount) {
                    $notificationService->createWorksheetCompletedNotification(
                        $patient->getDoctor(),
                        $worksheetSession->getWorksheet(),
                        $patient
                    );
                }

                $this->em->flush();

                return $this->json(
                    'Session terminée',
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la clôture de la session",
            500
        );
    }
}
