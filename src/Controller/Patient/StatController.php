<?php

namespace App\Controller\Patient;

use App\Entity\Exercise;
use App\Entity\ExerciseStat;
use App\Entity\Patient;
use App\Repository\VideoRepository;
use App\Repository\DoctorRepository;
use App\Repository\ExerciseRepository;
use App\Repository\ExerciseStatRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PrescriptionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class StatController extends AbstractController
{
    private $doctorRepository;
    private $prescriptionRepository;
    private $exerciseRepository;
    private $exerciseStatRepository;
    private $videoRepository;
    private $mailer;
    private $serializer;
    private $em;

    public function __construct(
        DoctorRepository $doctorRepository,
        PrescriptionRepository $prescriptionRepository,
        ExerciseRepository $exerciseRepository,
        ExerciseStatRepository $exerciseStatRepository,
        VideoRepository $videoRepository,
        MailerInterface $mailer,
        SerializerInterface $serializerInterface,
        EntityManagerInterface $em
    ) {
        $this->doctorRepository = $doctorRepository;
        $this->prescriptionRepository = $prescriptionRepository;
        $this->exerciseRepository = $exerciseRepository;
        $this->exerciseStatRepository = $exerciseStatRepository;
        $this->videoRepository = $videoRepository;
        $this->mailer = $mailer;
        $this->serializer = $serializerInterface;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/get/exercise-stats", name="app_patient_get_exercise_stats", methods={"GET"})
     */
    public function getExerciseStats(Patient $patient): JsonResponse
    {
        return $this->json(
            $this->prescriptionRepository->findBy(['patient' => $patient]),
            200,
            [],
            ['groups' => 'exercise_stats_read']
        );
    }

    /**
     * @Route("/{id}/save/exercise-stat/{statCriterion}", name="app_patient_save_exercise_stat", methods={"POST"})
     */
    public function saveExerciseStat(Request $request, Patient $patient, string $statCriterion): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('save_exercise_stat' . $patient->getId(), $data->_token)) {
                $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exercise_id]);

                $exerciseStat =  $this->exerciseStatRepository->findOneBy([
                    'criterion' => $statCriterion,
                    'exercise' => $exercise
                ]);

                $exerciseStat->setRating($data->exercise_stat_value);
                $exerciseStat->setDoneAt(new \DateTime());

                $this->em->flush();

                return $this->json(
                    'Merci, nous avons bien enregistré votre note',
                    200,
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu enregistrer la notation',
            500,
        );
    }
}
