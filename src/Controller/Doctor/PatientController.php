<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Service\UserService;
use App\Service\NotificationService;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Controller\RedirectFromIsGrantedTrait;
use App\Repository\DoctorRepository;

/**
 * @Route("/doctor")
 */
class PatientController extends AbstractController
{
    use RedirectFromIsGrantedTrait;
    
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
     * @Route("/{id}/get/patients/{maxresult}/{firstresult}", name="app_doctor_get_patients", methods={"GET"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getPatients(Request $request, Doctor $doctor, ?int $maxresult = null, ?int $firstresult = null)
    {
        if ($request->isXmlHttpRequest()) {
            return $this->json(
                $this->patientRepository->findByDoctor($doctor, $maxresult, $firstresult),
                200,
                [],
                ['groups' => 'patient_read']
            );
        } else {
            if ($this->getUser()) {
                return $this->redirectFromIsGranted();
            }
        }    
    }

    /**
     * @Route("/{id}/get/all/patients", name="app_doctor_get_all_patients", methods={"GET"})
     */
    public function getAllPatients(Request $request, Doctor $doctor)
    {
        if ($request->isXmlHttpRequest()) {
            return $this->json(
                $this->patientRepository->findPatientsCreatedLastFourWeeks(),
                200,
                [],
                ['groups' => 'patient_read']
            );
        } else {
            if ($this->getUser()) {
                return $this->redirectFromIsGranted();
            }
        }    
    }

    /**
     * @Route("/{id}/voir/patient/{patientId}", name="app_doctor_show_patient", methods={"GET"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
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
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function createPatient(Request $request, Doctor $doctor, DoctorRepository $doctorRepository): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_patient' . $doctor->getId(), $data->_token)) {
                $doctorWithThisEmail = $doctorRepository->findOneBy(['email' => $data->email]);

                if ($doctorWithThisEmail) {
                    return $this->json(
                        'Cet email est déjà utilisé par un praticien',
                        500,
                    );
                }

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
                        'Nous n\'avons pas pu créer le patient, car son email est déjà utilisé par un membre',
                        500,
                    );
                }

                return $this->userService->processSendingPasswordPatientCreationEmail($patient, $doctor);
            }
        }
        return $this->json(
            "Une erreur s'est produite lors de la création du patient",
            500,
        );
    }

    /**
     * @Route("/{id}/add/patient", name="app_doctor_add_patient", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function addPatient(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('add_patient' . $doctor->getId(), $data->_token)) {
                if(!empty($data->patientId))
                    $patient = $this->patientRepository->findOneBy(['id' => $data->patientId]);
                elseif(!empty($data->patientEmail))
                    $patient = $this->patientRepository->findOneBy(['email' => $data->patientEmail]);

                if ($patient->getAddRequestDoctor()) {
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
                    [
                        "message" => "<strong>{$this->userService->getUserName($patient)}</strong> 
                        a bien été ajouté à votre liste, 
                        nous lui avons envoyé une demande d'approbation",
                        "patient" => $patient
                    ],
                    200,
                    [],
                    ['groups' => 'patient_read']
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
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
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
                        a bien été retiré de votre liste",
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
