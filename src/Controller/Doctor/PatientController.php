<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Service\UserService;
use App\Service\NotificationService;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/doctor")
 */
class PatientController extends AbstractController
{
    private $patientRepository;
    private $userService;
    private $notificationService;
    private $em;

    public function __construct(
        PatientRepository $patientRepository,
        UserService $userService,
        NotificationService $notificationService,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->notificationService = $notificationService;
        $this->userService = $userService;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/get/patients", name="app_doctor_get_patients", methods={"GET"})
     */
    public function getPatients(Doctor $doctor): JsonResponse
    {
        return $this->json(
            $this->patientRepository->findBy(['doctor' => $doctor]),
            200,
            [],
            ['groups' => 'patient_read']
        );
    }

    /**
     * @Route("/{id}/get/all/patients", name="app_doctor_get_all_patients", methods={"GET"})
     */
    public function getAllPatients(Doctor $doctor): JsonResponse
    {
        return $this->json(
            $this->patientRepository->findAll(),
            200,
            [],
            ['groups' => 'patient_read']
        );
    }

    /**
     * @Route("/{id}/voir/patient/{patientId}", name="app_doctor_show_patient", methods={"GET"})
     */
    public function showPatient(
        int $patientId = null
    ): Response {
        $patient =
            $patientId ?
                $this->patientRepository->findOneBy(['id' => $patientId])
            : null;

        return $this->render('patient/dashboard.html.twig', [
            'patient' => $patient,
            'doctorView' => true,
        ]);
    }

    /**
     * @Route("/{id}/create/patient", name="app_doctor_create_patient", methods={"POST"})
     */
    public function createPatient(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_patient' . $doctor->getId(), $data->_token)) {
                $patient = new Patient();
                $patient->setFirstname($data->firstname);
                $patient->setLastname($data->lastname);
                $patient->setGender($data->gender);
                $patient->setEmail($data->email);
                $patient->setAddRequestDoctor(true);
                $patient->setDoctor($doctor);

                $this->em->persist($patient);

                try {
                    $this->em->flush();
                } catch (UniqueConstraintViolationException $e) {
                    return $this->json(
                        'Nous n\'avons pas pu créer le patient, car son email est déjà utilisé par un membre.',
                        500,
                    );
                }

                return $this->userService->processSendingPasswordCreationEmail($patient, $doctor);
            }
        }
        return $this->json(
            "Une erreur s'est produite lors de la création du patient",
            500,
        );
    }

    /**
     * @Route("/{id}/add/patient", name="app_doctor_add_patient", methods={"POST"})
     */
    public function addPatient(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('add_patient' . $doctor->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $data->patientId]);

                if (null !== $patient->getAddRequestDoctor()) {
                    return $this->json(
                        "Vous ne pouvez pas ajouter 
                        <strong>{$this->userService->getUserName($patient)}</strong> 
                        car il est déjà en lien avec un autre praticien",
                        500,
                    );
                }

                $patient->setAddRequestDoctor(false);

                $doctor->addPatient($patient);

                $this->notificationService->createAddPatientNotification($doctor, $patient);

                $this->em->flush();

                return $this->json(
                    "<strong>{$this->userService->getUserName($patient)}</strong> 
                    a bien été ajouté à votre liste, 
                    nous lui avons envoyé une demande d'approbation",
                    200,
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de l'ajout du patient à votre liste",
            500,
        );
    }

    /**
     * @Route("/{id}/remove/patient", name="app_doctor_remove_patient", methods={"POST"})
     */
    public function removePatient(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('remove_patient' . $doctor->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $data->patientId]);

                if ($doctor->getPatients()->contains($patient)) {
                    $patient->setAddRequestDoctor(null);

                    $doctor->removePatient($patient);

                    $this->em->flush();

                    return $this->json(
                        "<strong>{$this->userService->getUserName($patient)}</strong> 
                        a bien été retiré de votre liste.",
                        200,
                    );
                }
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la suppression du patient de votre liste",
            500,
        );
    }
}
