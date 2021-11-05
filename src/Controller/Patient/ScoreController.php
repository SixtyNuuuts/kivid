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

        if ($score >= 10000 && $score < 20000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 10000]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Débutant", $patient, 10000);
                $notifScoreRank = 'Débutant';
            }
        }

        if ($score >= 20000 && $score < 30000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 20000]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Amateur", $patient, 20000);
                $notifScoreRank = 'Amateur';
            }
        }

        if ($score >= 30000 && $score < 40000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 30000]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Intermédiaire", $patient, 30000);
                $notifScoreRank = 'Intermédiaire';
            }
        }

        if ($score >= 40000 && $score < 50000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 40000]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Confirmé", $patient, 40000);
                $notifScoreRank = 'Confirmé';
            }
        }

        if ($score >= 50000) {
            $notifScoreExist = $notificationRepository->findOneBy(["type" => "score-rank", "typeId" => 50000]);

            if (!$notifScoreExist) {
                $notificationService->createScoreRankNotification("Expert", $patient, 50000);
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
