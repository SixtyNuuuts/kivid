<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Entity\ExerciseStat;
use App\Repository\ExerciseRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ExerciseStatRepository;
use App\Repository\WorksheetRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\WorksheetSessionRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class StatController extends AbstractController
{
    private $exerciseRepository;
    private $exerciseStatRepository;
    private $worksheetRepository;
    private $worksheetSessionRepository;
    private $em;

    public function __construct(
        ExerciseRepository $exerciseRepository,
        ExerciseStatRepository $exerciseStatRepository,
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        EntityManagerInterface $em
    ) {
        $this->exerciseRepository = $exerciseRepository;
        $this->exerciseStatRepository = $exerciseStatRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/get/exercise-stats", name="app_patient_get_exercise_stats", methods={"GET"})
     */
    public function getExerciseStats(Patient $patient): JsonResponse
    {
        $exerciseStats = $this->exerciseStatRepository->findBy(['patient' => $patient]);

        if (!$exerciseStats) {
            return $this->json("Stats non trouvées", 500);
        }

        return $this->json(
            $exerciseStats,
            200,
            [],
            ['groups' => 'exercise_stats_read']
        );
    }

    /**
     * @Route("/{id}/create/exercise-stat/{statCriterion}", name="app_patient_create_exercise_stat", methods={"POST"})
     */
    public function createExerciseStat(Request $request, Patient $patient, string $statCriterion): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_exercise_stat' . $patient->getId(), $data->_token)) {
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);

                $worksheetSession = $this->worksheetSessionRepository->findOneBy(['id' => $data->worksheetSessionId]);

                $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exerciseId]);

                $exerciseStat = new ExerciseStat();

                $exerciseStat->setCriterion($statCriterion)
                             ->setDoneAt(new \DateTime())
                             ->setRating($data->exerciseStatValue)
                             ->setExercise($exercise)
                             ->setWorksheet($worksheet)
                             ->setWorksheetSession($worksheetSession)
                ;

                $this->em->persist($exerciseStat);

                $this->em->flush();

                return $this->json(
                    'Stat enregistrée',
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la création de la statistique",
            500
        );
    }
}
