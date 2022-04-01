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

        if ($score >= 1000 && $score < 2000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 1000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Débutant", $patient, 1000);
                $notifScoreRank = 'Débutant';
            }
        }

        if ($score >= 2000 && $score < 3000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 2000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Amateur", $patient, 2000);
                $notifScoreRank = 'Amateur';
            }
        }

        if ($score >= 3000 && $score < 4000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 3000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Intermédiaire", $patient, 3000);
                $notifScoreRank = 'Intermédiaire';
            }
        }

        if ($score >= 4000 && $score < 5000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 4000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Confirmé", $patient, 4000);
                $notifScoreRank = 'Confirmé';
            }
        }

        if ($score >= 5000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 5000, "patient" => $patient]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Expert", $patient, 5000);
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
