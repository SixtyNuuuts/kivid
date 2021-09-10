<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Entity\Commentary;
use App\Repository\ExerciseRepository;
use App\Repository\WorksheetRepository;
use App\Repository\CommentaryRepository;
use App\Repository\WorksheetSessionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class WorksheetController extends AbstractController
{
    private $exerciseRepository;
    private $commentaryRepository;
    private $worksheetRepository;
    private $worksheetSessionRepository;
    private $em;

    public function __construct(
        ExerciseRepository $exerciseRepository,
        CommentaryRepository $commentaryRepository,
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        EntityManagerInterface $em
    ) {
        $this->exerciseRepository = $exerciseRepository;
        $this->commentaryRepository = $commentaryRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/fiche/{worksheetId}", name="app_patient_worksheet_read", methods={"GET"})
     */
    public function worksheetRead(Patient $patient, int $worksheetId = null): Response
    {
        return $this->render('patient/read_worksheet.html.twig', [
            'patient' => $patient,
            'worksheetId' => $worksheetId,
        ]);
    }

    /**
     * @Route("/{id}/get/worksheet/{worksheetId}", name="app_patient_get_worksheet", methods={"GET"})
     */
    public function getWorksheet(Patient $patient, int $worksheetId): JsonResponse
    {
        $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

        if (!$worksheet) {
            return $this->json("Fiche non trouvée", 500);
        }

        return $this->json(
            $worksheet,
            200,
            [],
            ['groups' => 'worksheet_read']
        );
    }

    /**
     * @Route("/{id}/get/worksheets", name="app_patient_get_worksheets", methods={"GET"})
     */
    public function getWorksheets(Patient $patient): JsonResponse
    {
        $worksheets = $this->worksheetRepository->findBy(['patient' => $patient]);

        if (!$worksheets) {
            return $this->json("Fiches non trouvées", 500);
        }

        return $this->json(
            $worksheets,
            200,
            [],
            ['groups' => 'reduced_worksheet_read']
        );
    }

    /**
     * @Route("/{id}/complete/exercise", name="app_patient_complete_exercise", methods={"POST"})
     */
    public function completeExercise(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('complete_exercise' . $patient->getId(), $data->_token)) {
                $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exerciseId]);

                $exercise->setIsCompleted(true);

                $this->em->flush();

                return $this->json(
                    'Exercice terminé',
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la clôture de l'exercice",
            500
        );
    }

    /**
     * @Route("/{id}/create/commentary", name="app_patient_create_commentary", methods={"POST"})
     */
    public function createCommentary(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_commentary' . $patient->getId(), $data->_token)) {
                $commentary = $data->commentaryId
                            ? $this->commentaryRepository->findOneBy(['id' => $data->commentaryId])
                            : new Commentary();

                $commentary->setContent($data->commentaryContent);
                $commentary->setCreatedAt(new \DateTimeImmutable());

                if (!$data->commentaryId) {
                    $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exerciseId]);
                    $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);
                    $worksheetSession = $this->worksheetSessionRepository->findOneBy(
                        ['id' => $data->worksheetSessionId]
                    );

                    $commentary->setPatient($patient)
                               ->setExercise($exercise)
                               ->setWorksheet($worksheet)
                               ->setWorksheetSession($worksheetSession)
                    ;
                    $this->em->persist($commentary);
                }

                $this->em->flush();

                return $this->json(
                    ['message' => 'Commentaire créé', 'commentaryId' => $commentary->getId()],
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la création du commentaire",
            500
        );
    }
}
