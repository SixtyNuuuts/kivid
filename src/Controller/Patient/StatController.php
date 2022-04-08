<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Entity\ExerciseStat;
use App\Repository\ExerciseRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ExerciseStatRepository;
use App\Repository\WorksheetRepository;
use App\Repository\WorksheetSessionRepository;
use App\Service\ScoreService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/patient")
 */
class StatController extends AbstractController
{
    private $exerciseRepository;
    private $exerciseStatRepository;
    private $worksheetRepository;
    private $worksheetSessionRepository;
    private $scoreService;
    private $em;

    public function __construct(
        ExerciseRepository $exerciseRepository,
        ExerciseStatRepository $exerciseStatRepository,
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        ScoreService $scoreService,
        EntityManagerInterface $em
    ) {
        $this->exerciseRepository = $exerciseRepository;
        $this->exerciseStatRepository = $exerciseStatRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->scoreService = $scoreService;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/create/session-stat/{statCriterion}", name="app_patient_create_session_stat", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function createSessionStat(Request $request, Patient $patient, string $statCriterion): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_session_stat' . $patient->getId(), $data->_token)) {
                $sessionStat =  $this->exerciseStatRepository->findOneBy([
                    'criterion' => $statCriterion,
                    'exercise' => null,
                    'worksheetSession' => $data->worksheetSessionId
                ]);

                if (!$sessionStat) {
                    $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);

                    $worksheetSession = $this->worksheetSessionRepository->findOneBy(
                        ['id' => $data->worksheetSessionId]
                    );

                    $sessionStat = new ExerciseStat();

                    $sessionStat->setCriterion($statCriterion)
                                 ->setExercise(null)
                                 ->setWorksheet($worksheet)
                                 ->setWorksheetSession($worksheetSession)
                    ;
                }

                $sessionStat->setDoneAt(new \DateTime())
                            ->setRating($data->sessionStatValue)
                ;

                $ponderation = $this->scoreService->getPonderation($statCriterion, $data->sessionStatValue);

                $this->em->persist($sessionStat);

                $this->em->flush();

                return $this->json(
                    [
                        'message' => 'Stat enregistrée',
                        'criterion' => $statCriterion,
                        'ponderation' => $ponderation,
                    ],
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la création de la statistique",
            500
        );
    }

    /**
     * @Route("/{id}/create/exercise-stat/{statCriterion}", name="app_patient_create_exercise_stat", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function createExerciseStat(Request $request, Patient $patient, string $statCriterion): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_exercise_stat' . $patient->getId(), $data->_token)) {
                $exerciseStat =  $this->exerciseStatRepository->findOneBy([
                    'criterion' => $statCriterion,
                    'exercise' => $data->exerciseId,
                    'worksheetSession' => $data->worksheetSessionId
                ]);

                if (!$exerciseStat) {
                    $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exerciseId]);

                    $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);

                    $worksheetSession = $this->worksheetSessionRepository->findOneBy(
                        ['id' => $data->worksheetSessionId]
                    );

                    $exerciseStat = new ExerciseStat();

                    $exerciseStat->setCriterion($statCriterion)
                                 ->setExercise($exercise)
                                 ->setWorksheet($worksheet)
                                 ->setWorksheetSession($worksheetSession)
                    ;
                }

                $exerciseStat->setDoneAt(new \DateTime())
                             ->setRating($data->exerciseStatValue)
                ;

                $ponderation = $this->scoreService->getPonderation($statCriterion, $data->exerciseStatValue);

                $this->em->persist($exerciseStat);

                $this->em->flush();

                return $this->json(
                    [
                        'message' => 'Stat enregistrée',
                        'criterion' => $statCriterion,
                        'ponderation' => $ponderation,
                    ],
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
