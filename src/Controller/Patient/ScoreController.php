<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Repository\ScoreRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

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
     */
    public function getScore(Patient $patient): JsonResponse
    {
        return $this->json(
            $this->scoreRepository->sumPatientPoints($patient),
            200
        );
    }
}
