<?php

namespace App\Controller\Doctor;

use App\Entity\Video;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Exercise;
use App\Entity\Worksheet;
use App\Entity\Prescription;
use App\Form\CreatePatientFormType;
use App\Repository\VideoRepository;
use App\Form\CreateWorksheetFormType;
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
     * @Route("/{id}/fiches/{prescribedPatient}", name="app_doctor_worksheets", methods={"GET"})
     */
    public function worksheetList(Doctor $doctor, Patient $prescribedPatient = null): Response
    {
        $doctorPrescriptions = $this->prescriptionRepository->findBy(['doctor' => $doctor]);

        $createPatientForm = $this->createForm(CreatePatientFormType::class);

        $createPatientFormView = $this->renderView('doctor/_form_create_patient.html.twig', [
            'form' => $createPatientForm->createView(),
            'doctor' => $doctor,
        ]);

        $btnAddPrescriptionFormView = $this->renderView('doctor/_form_create_prescription.html.twig', [
            'doctor' => $doctor,
        ]);

        $btnRemoveWorksheetFormView = $this->renderView('doctor/_form_add_remove_common.html.twig', [
            'actionRoute' => 'app_doctor_remove_worksheet',
            'tokenName' => 'remove_worksheet',
            'classBtnColor' => 'vs-button--danger',
            'doctor' => $doctor,
        ]);

        return $this->render('doctor/worksheet_list.html.twig', [
            'prescribedPatient' => $prescribedPatient,
            'doctor' => $doctor,
            'createPatientForm' => $createPatientFormView,
            'doctorPrescriptions' => $doctorPrescriptions,
            'btnAddPrescriptionForm' => $btnAddPrescriptionFormView,
            'btnRemoveWorksheetForm' => $btnRemoveWorksheetFormView,
        ]);
    }

    /**
     * @Route("/{id}/create/prescription", name="app_doctor_create_prescription", methods={"POST"})
     */
    public function createPrescription(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('create_prescription' . $doctor->getId(), $request->request->get('_token'))) {
            $patient = $this->patientRepository->findOneBy(['id' => $request->request->get('patient_id')]);
            $worksheet = $this->worksheetRepository->findOneBy(['id' => $request->request->get('worksheet_id')]);

            $prescription = new Prescription();

            $prescription->setDoctor($doctor)
                         ->setPatient($patient)
                         ->setWorksheet($worksheet)
            ;

            $this->em->persist($prescription);

            $this->em->flush();

            $gender = $patient->getGender() ? ("male" === $patient->getGender() ? 'M.' : 'Mme') : '';

            $this->addFlash(
                'success',
                "La fiche <strong>{$worksheet->getTitle()}</strong> 
                a bien été prescrite à <strong>{$gender} {$patient->getFirstname()} {$patient->getLastname()}</strong>."
            );

            return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu créer la prescription, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/remove/prescription", name="app_doctor_remove_prescription", methods={"POST"})
     */
    public function removePrescription(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('remove_prescription' . $doctor->getId(), $request->request->get('_token'))) {
            $prescription = $this->prescriptionRepository->findOneBy(['id' => $request->request->get('_id')]);

            if ($doctor->getPrescriptions()->contains($prescription)) {
                $this->em->remove($prescription);

                $this->em->flush();

                $this->addFlash(
                    'success',
                    "La prescription a bien été supprimée."
                );

                return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
            }
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu supprimer la prescription, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/create/worksheet/{worksheetTemplate}/{prescribedPatient}", name="app_doctor_create_worksheet", methods={"GET", "POST"})
     */
    public function createWorksheet(Request $request, Doctor $doctor, Worksheet $worksheetTemplate = null, Patient $prescribedPatient = null): Response
    {
        // $createWorksheetForm = $this->createForm(CreateWorksheetFormType::class);

        if ($request->isMethod('post')) {
            // $test = $this->serializer->deserialize($request->getContent(), 'null', 'json');
            $worksheetData = json_decode($request->getContent());

            $worksheet = new Worksheet();
            $worksheet->setTitle($worksheetData->title)
                      ->setDescription($worksheetData->description)
                      ->setDoctor($doctor);

            foreach ($worksheetData->exercises as $exerciseData) {
                $exercise = new Exercise();
                $exercise->setNumberOfRepetitions($exerciseData->numberOfRepetitions)
                         ->setNumberOfSeries($exerciseData->numberOfSeries)
                         ->setOption($exerciseData->option)
                         ->setPosition($exerciseData->position);

                $video = $this->videoRepository->findOneById($exerciseData->video->id);
                $exercise->setVideo($video);

                $worksheet->addExercise($exercise);

                $this->em->persist($exercise);
            }

            $this->em->persist($worksheet);

            if ($prescribedPatient) {
                $prescription = new Prescription();

                $prescription->setDoctor($doctor)
                         ->setPatient($prescribedPatient)
                         ->setWorksheet($worksheet)
                ;
                $this->em->persist($prescription);
            }

            $this->em->flush();
            
            if ($prescribedPatient) {
                $gender = $prescribedPatient->getGender() ? ("male" === $prescribedPatient->getGender() ? 'M.' : 'Mme') : '';
    
                $this->addFlash(
                    'success',
                    "La Fiche <strong>{$worksheet->getTitle()}</strong> a bien été créée et prescrite à 
                    <strong>{$gender} {$prescribedPatient->getFirstname()} {$prescribedPatient->getLastname()}</strong>."
                );
            }
    
            $this->addFlash(
                'success',
                "La Fiche <strong>{$worksheet->getTitle()}</strong> a bien été créée."
            );

            return $this->json(
                'fiche créée',
                200,
            );
        }

        // $createWorksheetView = $this->renderView('doctor/_form_create_worksheet.html.twig', [
        //     'form' => $createWorksheetForm->createView(),
        //     'doctor' => $doctor,
        // ]);

        return $this->render('doctor/create_worksheet_page.html.twig', [
            'doctor' => $doctor,
            'worksheetTemplate' => $worksheetTemplate,
            'prescribedPatient' => $prescribedPatient,
            // 'createWorksheetForm' => $createWorksheetView,
        ]);
    }

    /**
     * @Route("/{id}/remove/worksheet", name="app_doctor_remove_worksheet", methods={"POST"})
     */
    public function removeWorksheet(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('remove_worksheet' . $doctor->getId(), $request->request->get('_token'))) {
            $worksheet = $this->worksheetRepository->findOneBy(['id' => $request->request->get('_id')]);
            $this->em->remove($worksheet);

            $this->em->flush();

            $this->addFlash(
                'success',
                "La Fiche a bien été supprimée."
            );

            return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu supprimer la fiche, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/get/worksheets", name="app_doctor_get_worksheets", methods={"GET"})
     */
    public function getWorksheets(Doctor $doctor): JsonResponse
    {
        return $this->json(
            $this->worksheetRepository->findBy(['doctor' => $doctor]),
            200,
            [],
            ['groups' => 'worksheet_read']
        );
    }
}
