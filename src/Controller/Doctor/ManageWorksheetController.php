<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Exercise;
use App\Entity\Worksheet;
use App\Entity\ExerciseStat;
use App\Entity\Prescription;
use App\Entity\WorksheetSession;
use App\Repository\VideoRepository;
use App\Repository\PatientRepository;
use App\Repository\ExerciseRepository;
use App\Repository\WorksheetRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ExerciseStatRepository;
use App\Repository\PrescriptionRepository;
use App\Repository\WorksheetSessionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/kine")
 */
class ManageWorksheetController extends AbstractController
{
    private $patientRepository;
    private $prescriptionRepository;
    private $worksheetRepository;
    private $worksheetSessionRepository;
    private $videoRepository;
    private $exerciseRepository;
    private $exerciseStatRepository;
    private $mailer;
    private $serializer;
    private $em;

    public function __construct(
        PatientRepository $patientRepository,
        PrescriptionRepository $prescriptionRepository,
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        VideoRepository $videoRepository,
        ExerciseRepository $exerciseRepository,
        ExerciseStatRepository $exerciseStatRepository,
        MailerInterface $mailer,
        SerializerInterface $serializerInterface,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->prescriptionRepository = $prescriptionRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->videoRepository = $videoRepository;
        $this->exerciseRepository = $exerciseRepository;
        $this->exerciseStatRepository = $exerciseStatRepository;
        $this->mailer = $mailer;
        $this->serializer = $serializerInterface;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/fiches/{listType}/{patientId}", name="app_doctor_worksheets", methods={"GET"})
     */
    public function worksheetList(
        Doctor $doctor,
        string $listType = 'prescriptions',
        int $patientId = null
    ): Response {
        $patientForPrescription =
            $patientId ?
                $this->patientRepository->findOneBy(['id' => $patientId])
            : null;

        return $this->render('doctor/worksheets_list.html.twig', [
            'listType' => $listType,
            'patientForPrescription' => $patientForPrescription,
            'doctor' => $doctor,
        ]);
    }

    /**
     * @Route("/{id}/fiche/{action}/{worksheetTemplateId}/{patientId}",
     * name="app_doctor_worksheet_creation", methods={"GET"})
     */
    public function worksheetCreation(
        Doctor $doctor,
        string $action,
        int $worksheetTemplateId = null,
        int $patientId = null
    ): Response {
        $worksheetTemplate =
        $worksheetTemplateId ?
            $this->worksheetRepository->findOneBy(['id' => $worksheetTemplateId])
        : null;

        $patientForPrescription =
        $patientId ?
            $this->patientRepository->findOneBy(['id' => $patientId])
        : null;

        return $this->render('doctor/create_worksheet_page.html.twig', [
            'doctor' => $doctor,
            'action' => $action,
            'patientForPrescription' => $patientForPrescription,
            'worksheetTemplate' => $worksheetTemplate,
        ]);
    }

    /**
     * @Route("/{id}/create/worksheet", name="app_doctor_create_worksheet", methods={"POST"})
     */
    public function createWorksheet(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_worksheet' . $doctor->getId(), $data->_token)) {
                $worksheet = new Worksheet();
                $worksheet->setTitle($data->title)
                          ->setDescription($data->description)
                          ->setPartOfBody($data->partOfBody)
                          ->setDuration($data->duration)
                          ->setPerWeek($data->perWeek)
                          ->setPerDay($data->perDay)
                          ->setIsTemplate($data->isTemplate)
                          ->setPrescriber($doctor);

                foreach ($data->exercises as $dataExercise) {
                    $this->generateExercise($dataExercise, $worksheet);
                }

                $this->em->persist($worksheet);

                $this->em->flush();

                return $this->json(
                    [
                        "message" => "La fiche <strong>{$worksheet->getTitle()}</strong> a été créée",
                        "worksheet" => $worksheet
                    ],
                    200,
                    [],
                    ['groups' => 'worksheet_read']
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu créer la fiche, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/edit/worksheet-template", name="app_doctor_edit_worksheet_template", methods={"POST"})
     */
    public function editWorksheetTemplate(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('edit_worksheet_template' . $doctor->getId(), $data->_token)) {
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);

                $worksheet->setTitle($data->title)
                          ->setDescription($data->description)
                          ->setPartOfBody($data->partOfBody)
                          ->setDuration($data->duration)
                          ->setPerWeek($data->perWeek)
                          ->setPerDay($data->perDay)
                ;

                foreach ($data->exercises as $dataExercise) {
                    if ($dataExercise->id) {
                        $exercise = $this->exerciseRepository->findOneBy(['id' => $dataExercise->id]);
                        $exercise->setNumberOfRepetitions($dataExercise->numberOfRepetitions)
                                 ->setNumberOfSeries($dataExercise->numberOfSeries)
                                 ->setOption($dataExercise->option)
                                 ->setPosition($dataExercise->position);
                    }
                    if (null === $dataExercise->id) {
                        $this->generateExercise($dataExercise, $worksheet);
                    }
                }

                $this->em->flush();

                return $this->json(
                    "Le modèle de fiche a bien été modifié",
                    200,
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu modifier le modèle de fiche, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/remove/worksheet-template", name="app_doctor_remove_worksheet_template", methods={"POST"})
     */
    public function removeWorksheetTemplate(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('remove_worksheet_template' . $doctor->getId(), $data->_token)) {
                $worksheetTemplate = $this->worksheetRepository->findOneBy(['id' => $data->worksheetTemplate_id]);

                if ($worksheetTemplate->getPrescriber() === $doctor) {
                    $this->em->remove($worksheetTemplate);

                    $this->em->flush();

                    return $this->json(
                        'Le modèle de fiche a bien été supprimé',
                        200,
                    );
                }
            }
        }

        return $this->json(
            'Nous n\'avons pas pu supprimer le modèle de fiche, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/remove/exercise-from-worksheet", name="app_doctor_remove_exercise_from_worksheet",
     * methods={"POST"})
     */
    public function removeExerciseFromWorksheet(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('remove_exercise_from_worksheet' . $doctor->getId(), $data->_token)) {
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheet_id]);
                $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exercise_id]);
                $exerciseStats = $this->exerciseStatRepository->findBy(['exercise' => $exercise]);

                if ($worksheet->getPrescriber() === $doctor) {
                    $worksheet->removeExercise($exercise);

                    $allStatsNull = true;

                    foreach ($exerciseStats as $exerciseStat) {
                        if (null === $exerciseStat->getRating()) {
                            $this->em->remove($exerciseStat);
                        } else {
                            $allStatsNull = false;
                        }
                    }

                    if ($allStatsNull) {
                        $this->em->remove($exercise);
                    }

                    $this->em->flush();

                    return $this->json(
                        'L\'exercice a bien été retiré de la fiche',
                        200,
                    );
                }
            }
        }

        return $this->json(
            'Nous n\'avons pas pu retirer l\'exercice de la fiche, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/create/prescription", name="app_doctor_create_prescription", methods={"POST"})
     */
    public function createPrescription(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_prescription' . $doctor->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $data->patientId]);
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);

                $prescription = new Prescription();

                $prescription->setDoctor($doctor)
                             ->setPatient($patient)
                             ->setWorksheet($worksheet)
                ;

                $this->generateWorksheetSessions($worksheet, $prescription);

                $this->em->persist($prescription);

                $this->em->flush();

                $gender = $patient->getGender() ? ("male" === $patient->getGender() ? 'M.' : 'Mme') : '';

                return $this->json(
                    "La fiche <strong>{$worksheet->getTitle()}</strong> a bien été prescrite à 
                    <strong>{$gender} {$patient->getFirstname()} {$patient->getLastname()}</strong>.",
                    200,
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu prescrire la fiche, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/edit/prescription", name="app_doctor_edit_prescription", methods={"POST"})
     */
    public function editPrescription(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('edit_prescription' . $doctor->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $data->patientId]);
                $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);
                $prescription = $this->prescriptionRepository->findOneBy(
                    ['patient' => $patient, 'worksheet' => $worksheet]
                );

                $worksheetSessions = $this->worksheetSessionRepository->findBy(['prescription' => $prescription]);

                foreach ($worksheetSessions as $worksheetSession) {
                    $this->em->remove($worksheetSession);
                }

                $this->em->flush();

                $this->generateWorksheetSessions($worksheet, $prescription);

                $this->em->flush();

                $gender = $patient->getGender() ? ("male" === $patient->getGender() ? 'M.' : 'Mme') : '';

                return $this->json(
                    "La fiche <strong>{$worksheet->getTitle()}</strong> prescrite à 
                    <strong>{$gender} {$patient->getFirstname()} {$patient->getLastname()}</strong> 
                    a bien été modifiée.",
                    200,
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu modifier la prescription, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/remove/prescription", name="app_doctor_remove_prescription", methods={"POST"})
     */
    public function removePrescription(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('remove_prescription' . $doctor->getId(), $data->_token)) {
                $prescription = $this->prescriptionRepository->findOneBy(['id' => $data->prescription_id]);

                if ($prescription->getDoctor() === $doctor) {
                    $this->em->remove($prescription);

                    $this->em->flush();

                    return $this->json(
                        'La prescription a bien été supprimée',
                        200,
                    );
                }
            }
        }

        return $this->json(
            'Nous n\'avons pas pu supprimer la prescription, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/get/prescriptions", name="app_doctor_get_prescriptions", methods={"GET"})
     */
    public function getPrescriptions(Doctor $doctor): JsonResponse
    {
        return $this->json(
            $this->prescriptionRepository->findBy(['doctor' => $doctor]),
            200,
            [],
            ['groups' => 'prescription_read']
        );
    }

    private function generateExercise(object $dataExercise, Worksheet $worksheet): void
    {
        $exercise = new Exercise();

        $exercise->setNumberOfRepetitions($dataExercise->numberOfRepetitions)
                 ->setNumberOfSeries($dataExercise->numberOfSeries)
                 ->setOption($dataExercise->option)
                 ->setPosition($dataExercise->position);

        $video = $this->videoRepository->findOneById($dataExercise->video->id);

        $exercise->setVideo($video);

        $worksheet->addExercise($exercise);

        $this->em->persist($exercise);
    }

    private function generateExerciseStatsInit(Exercise $exercise, WorksheetSession $worksheetSession): void
    {
        $exerciseStatsCriterions = [
            "sensitivity",
            "technical",
            "difficulty",
        ];

        $exerciseStatsExists = $this->exerciseStatRepository->findBy(['exercise' => $exercise]);

        if (!$exerciseStatsExists) {
            foreach ($exerciseStatsCriterions as $criterion) {
                $exerciseStatInit = new ExerciseStat();

                $exerciseStatInit->setCriterion($criterion)
                                 ->setExercise($exercise)
                                 ->setWorksheetSession($worksheetSession);

                $this->em->persist($exerciseStatInit);
            }
        }
    }

    private function generateWorksheetSessions(Worksheet $worksheet, Prescription $prescription): void
    {
        for (
            $execution = 1; $execution <= $worksheet->getDuration()
                                        * $worksheet->getPerWeek()
                                        * $worksheet->getPerDay(); $execution++
        ) {
            $worksheetSession = new WorksheetSession();
            $worksheetSession->setPrescription($prescription);
            $worksheetSession->setExecOrder($execution);

            foreach ($worksheet->getExercises() as $exercise) {
                $this->generateExerciseStatsInit($exercise, $worksheetSession);
            }

            $this->em->persist($worksheetSession);
        }
    }
}
