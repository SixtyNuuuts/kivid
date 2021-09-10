<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Entity\Worksheet;
use App\Entity\WorksheetSession;
use App\Repository\WorksheetRepository;
use App\Repository\WorksheetSessionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class WorksheetSessionController extends AbstractController
{
    private $worksheetRepository;
    private $worksheetSessionRepository;
    private $em;

    public function __construct(
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        EntityManagerInterface $em
    ) {
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/get/current-worksheet-session/{worksheetId}",
     * name="app_patient_get_current_worksheet_session", methods={"GET"})
     */
    public function getCurrentWorksheetSession(Patient $patient, int $worksheetId): JsonResponse
    {
        $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

        if (!$worksheet) {
            return $this->json("Aucune fiche ne correspond à cet Id", 500);
        }

        $currentWorksheetSession = $this->worksheetSessionRepository->findCurrentWorksheetSession($worksheet);

        if (!$currentWorksheetSession) {
            $firstGenerateWorksheetSession = $this->generateWorksheetSessionsAndGetFirst($worksheet);

            if (!$firstGenerateWorksheetSession) {
                return $this->json(
                    "Une erreur s'est produite lors de la création des sessions",
                    500
                );
            }

            $currentWorksheetSession = $firstGenerateWorksheetSession;
        }

        return $this->json(
            $currentWorksheetSession,
            200,
            [],
            ['groups' => 'session_read']
        );
    }

    /**
     * @Route("/{id}/get/total-worksheet-sessions/{worksheetId}",
     * name="app_patient_get_total_worksheet_sessions", methods={"GET"})
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
     */
    public function completeWorksheetSession(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('complete_worksheet_session' . $patient->getId(), $data->_token)) {
                $worksheetSession = $this->worksheetSessionRepository->findOneBy(['id' => $data->worksheetSessionId]);

                $worksheetSession->setIsInProgress(false);

                $worksheetSession->setIsCompleted(true);

                $worksheetSession->setDoneAt(new \DateTime());

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

    private function generateWorksheetSessionsAndGetFirst(Worksheet $worksheet): ?WorksheetSession
    {
        $checkIfWorksheetSessionsExist = $this->worksheetSessionRepository->findOneBy(
            ['worksheet' => $worksheet, 'execOrder' => 1]
        );

        if ($checkIfWorksheetSessionsExist) {
            return null;
        }

        $firstGenerateWorksheetSession = $this->generateWorksheetSessions($worksheet);

        return $firstGenerateWorksheetSession;
    }

    private function generateWorksheetSessions(Worksheet $worksheet): ?WorksheetSession
    {
        $sessionDuration = (
            (
                604800 // secondes dans une semaine
                / $worksheet->getPerWeek()
            )
            / $worksheet->getPerDay()
        );

        $refDate = new \DateTime();

        $firstGenerateWorksheetSession = null;

        for (
            $session = 1; $session <= $worksheet->getDuration()
                                    * $worksheet->getPerWeek()
                                    * $worksheet->getPerDay(); $session++
        ) {
            $worksheetSession = new WorksheetSession();

            $worksheetSession->setWorksheet($worksheet);
            $worksheetSession->setExecOrder($session);

            $worksheetSessionStartDate = new \DateTime();
            $worksheetSessionStartDate->setTimestamp(
                $refDate->getTimestamp()
                + 1
            );
            $worksheetSession->setStartAt($worksheetSessionStartDate);

            $worksheetSessionEndDate = new \DateTime();
            $worksheetSessionEndDate->setTimestamp(
                $worksheetSessionStartDate->getTimestamp()
                + $sessionDuration
            );
            $worksheetSession->setEndAt($worksheetSessionEndDate);

            $refDate = $worksheetSessionEndDate;

            if (1 === $session) {
                $firstGenerateWorksheetSession = $worksheetSession;
            }

            $this->em->persist($worksheetSession);
        }

        $this->em->flush();

        return $firstGenerateWorksheetSession;
    }
}
