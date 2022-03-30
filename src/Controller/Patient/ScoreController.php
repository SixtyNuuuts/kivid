<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Repository\NotificationRepository;
use App\Repository\ScoreRepository;
use App\Service\NotificationService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/patient")
 */
class ScoreController extends AbstractController
{
    private $scoreRepository;

    public function __construct(
        ScoreRepository $scoreRepository
    ) {
        $this->scoreRepository = $scoreRepository;
    }

    /**
     * @Route("/{id}/get/score", name="app_patient_get_score", methods={"GET"})
     * @isGranted("IS_OWNER_OR_OWNERDOC", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getScore(
        Patient $patient,
        NotificationService $notificationService,
        NotificationRepository $notificationRepository,
        EntityManagerInterface $em
    ): JsonResponse {
        $score = $this->scoreRepository->sumPatientPoints($patient);

        if ($score >= 2000 && $score < 4000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 2000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Débutant", $patient, 2000);
                $notifScoreRank = 'Débutant';
            }
        }

        if ($score >= 4000 && $score < 6000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 4000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Amateur", $patient, 4000);
                $notifScoreRank = 'Amateur';
            }
        }

        if ($score >= 6000 && $score < 8000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 6000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Intermédiaire", $patient, 6000);
                $notifScoreRank = 'Intermédiaire';
            }
        }

        if ($score >= 8000 && $score < 10000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 8000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Confirmé", $patient, 8000);
                $notifScoreRank = 'Confirmé';
            }
        }

        if ($score >= 10000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 10000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Expert", $patient, 10000);
                $notifScoreRank = 'Expert';
            }
        }

        $notifScoreRank = $notifScoreRank ?? null;

        $em->flush();

        return $this->json(
            ['score' => $score, 'notifScoreRank' => $notifScoreRank],
            200
        );
    }
}
