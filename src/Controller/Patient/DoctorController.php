<?php

namespace App\Controller\Patient;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Service\UserService;
use App\Repository\DoctorRepository;
use App\Service\NotificationService;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\NotificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Controller\RedirectFromIsGrantedTrait;

/**
 * @Route("/patient")
 */
class DoctorController extends AbstractController
{
    use RedirectFromIsGrantedTrait;

    private $doctorRepository;
    private $notificationService;
    private $notificationRepository;
    private $userService;
    private $em;

    public function __construct(
        DoctorRepository $doctorRepository,
        NotificationService $notificationService,
        NotificationRepository $notificationRepository,
        UserService $userService,
        EntityManagerInterface $em
    ) {
        $this->doctorRepository = $doctorRepository;
        $this->notificationService = $notificationService;
        $this->notificationRepository = $notificationRepository;
        $this->userService = $userService;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/get/doctors", name="app_patient_get_doctors", methods={"GET"})
     */
    public function getDoctors(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            return $this->json($this->doctorRepository->findAll(), 200, [], ['groups' => 'doctor_read']);
        } else {
            if ($this->getUser()) {
                return $this->redirectFromIsGranted();
            }
            else {
                return $this->redirectToRoute('app_home');
            }
        }    
    }

    /**
     * @Route("/{id}/select/doctor", name="app_patient_select_doctor", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function selectDoctor(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('select_doctor' . $patient->getId(), $data->_token)) {                
                if(!$data->doctorId)
                {
                    $patient->setAddRequestDoctor(false);
                    $this->notificationService->createPatientWithoutDoctorNotification($patient);
                    $this->em->flush();

                    return $this->json(
                        'patient-without-doctor',
                        200
                    );    
                }
                
                $patient->setAddRequestDoctor(true);

                $doctor = $this->doctorRepository->findOneBy(['id' => $data->doctorId]);
                if(!$doctor instanceof Doctor)
                {
                    return $this->json(
                        "Une erreur s'est produite lors de l'ajout du praticien",
                        500
                    );            
                }
                
                $patient->setDoctor($doctor);

                $this->notificationService->createSelectDoctorNotification($patient, $doctor);

                $this->em->flush();

                return $this->json(
                    "<strong>{$this->userService->getUserName($doctor)}</strong> 
                    est maintenant votre praticien",
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de l'ajout du praticien",
            500
        );
    }

    /**
     * @Route("/{id}/accept/doctor", name="app_patient_accept_doctor", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function acceptDoctor(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('accept_doctor' . $patient->getId(), $data->_token)) {
                $notification = $this->notificationRepository->findOneBy(['id' => $data->notificationId]);

                $doctor = $this->doctorRepository->findOneBy(['id' => $data->doctorId]);

                $patient->setAddRequestDoctor(true);

                $patient->setDoctor($doctor);

                $this->em->remove($notification);

                $this->notificationService->createAcceptDoctorNotification($patient, $doctor);

                $this->em->flush();

                return $this->json(
                    "<strong>{$this->userService->getUserName($doctor)}</strong> 
                    est maintenant votre praticien",
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de l'acceptation de la demande d'ajout du praticien",
            500
        );
    }

    /**
     * @Route("/{id}/decline/doctor", name="app_patient_decline_doctor", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function declineDoctor(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('decline_doctor' . $patient->getId(), $data->_token)) {
                $notification = $this->notificationRepository->findOneBy(['id' => $data->notificationId]);

                $doctor = $this->doctorRepository->findOneBy(['id' => $data->doctorId]);

                $patient->setAddRequestDoctor(null);

                $patient->setDoctor(null);

                $this->em->remove($notification);

                $this->notificationService->createDeclineDoctorNotification($patient, $doctor);

                $this->em->flush();

                return $this->json(
                    "Vous avez refusé la demande d'ajout de 
                    <strong>{$this->userService->getUserName($doctor)}</strong>",
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors du refus de la demande d'ajout du praticien",
            500
        );
    }

    /**
     * @Route("/{id}/calendlyevent", name="app_patient_calendlyevent", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function calendlyEvent(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if($data->eventUrl)
            {
                return $this->json(
                    'calendlyEvent create',
                    200
                );    
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de calendlyEvent",
            500
        );
    }
}
