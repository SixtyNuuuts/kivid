<?php

namespace App\Controller\Doctor;

use App\Entity\Video;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Exercise;
use App\Entity\Worksheet;
use App\Entity\Prescription;
use App\Repository\VideoRepository;
use App\Repository\PatientRepository;
use App\Repository\WorksheetRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PrescriptionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/kine")
 */
class ManageWorksheetController extends AbstractController
{
    private $worksheetRepository;
    private $patientRepository;
    private $prescriptionRepository;
    private $videoRepository;
    private $mailer;
    private $serializer;
    private $em;

    public function __construct(
        PatientRepository $patientRepository,
        PrescriptionRepository $prescriptionRepository,
        WorksheetRepository $worksheetRepository,
        VideoRepository $videoRepository,
        MailerInterface $mailer,
        SerializerInterface $serializerInterface,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->prescriptionRepository = $prescriptionRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->videoRepository = $videoRepository;
        $this->mailer = $mailer;
        $this->serializer = $serializerInterface;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/fiches/{list}/{patientForPrescription}", name="app_doctor_worksheets", methods={"GET"})
     */
    public function worksheetList(
        Doctor $doctor,
        string $list = 'prescriptions',
        Patient $patientForPrescription = null
    ): Response {
        return $this->render('doctor/worksheets_list.html.twig', [
            'list' => $list,
            'patientForPrescription' => $patientForPrescription,
            'doctor' => $doctor,
        ]);
    }

    /**
     * @Route("/{id}/fiche/{action}/{worksheetTemplate}/{patientForPrescription}",
     * name="app_doctor_worksheet_creation", methods={"GET"})
     */
    public function worksheetCreation(
        Doctor $doctor,
        string $action,
        Worksheet $worksheetTemplate = null,
        Patient $patientForPrescription = null
    ): Response {
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
                  ->setIsTemplate($data->isTemplate)
                  ->setDoctor($doctor);

                foreach ($data->exercises as $dataExercise) {
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
                  ->setPartOfBody($data->partOfBody);


                foreach ($worksheet->getExercises() as $exercise) {
                    $worksheet->removeExercise($exercise);
                }

                foreach ($data->exercises as $dataExercise) {
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

                if ($worksheetTemplate->getDoctor() === $doctor) {
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
}
