<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Repository\WorksheetRepository;
use App\Repository\WorksheetSessionRepository;
use App\Service\WorksheetSessionService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

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
            $firstGenerateWorksheetSession =
                $this->worksheetSessionService->generateWorksheetSessionsAndGetFirst($worksheet);

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
}
