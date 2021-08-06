<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Repository\VideoRepository;
use App\Repository\DoctorRepository;
use App\Repository\ExerciseRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PrescriptionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use App\Repository\WorksheetSessionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class ManageWorksheetController extends AbstractController
{
    private $doctorRepository;
    private $prescriptionRepository;
    private $exerciseRepository;
    private $worksheetSessionRepository;
    private $videoRepository;
    private $mailer;
    private $serializer;
    private $em;

    public function __construct(
        DoctorRepository $doctorRepository,
        PrescriptionRepository $prescriptionRepository,
        ExerciseRepository $exerciseRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        VideoRepository $videoRepository,
        MailerInterface $mailer,
        SerializerInterface $serializerInterface,
        EntityManagerInterface $em
    ) {
        $this->doctorRepository = $doctorRepository;
        $this->prescriptionRepository = $prescriptionRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->exerciseRepository = $exerciseRepository;
        $this->videoRepository = $videoRepository;
        $this->mailer = $mailer;
        $this->serializer = $serializerInterface;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/fiches", name="app_patient_worksheets", methods={"GET"})
     */
    public function worksheetList(Patient $patient): Response
    {
        return $this->render('patient/worksheets_list.html.twig', [
            'patient' => $patient,
        ]);
    }

    /**
     * @Route("/{id}/get/prescriptions", name="app_patient_get_prescriptions", methods={"GET"})
     */
    public function getPrescriptions(Patient $patient): JsonResponse
    {
        return $this->json(
            $this->prescriptionRepository->findBy(['patient' => $patient]),
            200,
            [],
            ['groups' => 'prescription_read']
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
                $worksheetSessions = $this->worksheetSessionRepository->findBy(
                    ['prescription' => $data->prescriptionId],
                    ['execOrder' => 'ASC'],
                );

                // TODO

                $worksheetSessions[0]->setIsInProgress(true);

                // foreach ($worksheetSessions as $worksheetSession) {
                //     # code...
                // }

                $this->em->flush();

                return $this->json(
                    $worksheetSessions,
                    200,
                    [],
                    ['groups' => 'prescription_read']
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu démarrer la session de la prescription, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/completed/exercise", name="app_patient_exercise_completed", methods={"POST"})
     */
    public function exerciseCompleted(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('exercise_completed' . $patient->getId(), $data->_token)) {
                $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exercise_id]);

                $exercise->setIsCompleted(true);

                $this->em->flush();

                return $this->json(
                    'Félicitations, vous avez terminé cet exercice !',
                    200,
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu enregistrer la complétion de cet exercice',
            500,
        );
    }
}
