<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Notification\NotificationService;
use App\Repository\NotificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CRUDController extends AbstractController
{
    private $patientRepository;
    private $notificationRepository;
    private $notificationService;
    private $em;

    public function __construct(
        PatientRepository $patientRepository,
        NotificationRepository $notificationRepository,
        NotificationService $notificationService,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->notificationRepository = $notificationRepository;
        $this->notificationService = $notificationService;
        $this->em = $em;
    }

    /**
     * @Route("/get/patients", name="app_get_patients", methods={"GET"})
     */
    public function getPatients(): JsonResponse
    {
        return $this->json($this->patientRepository->findAll(), 200, [], ['groups' => 'patient_read']);
    }

    /**
     * @Route("/patient/{id}/accept/add-request", name="app_patient_accept_add_request", methods={"POST"})
     */
    public function acceptAddRequest(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('accept_add_request' . $patient->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $patient]);
                $notification = $this->notificationRepository->findOneBy(['id' => $data->notificationId]);

                $this->notificationService->createAddRequestAcceptNotification($patient);

                $patient->setDoctorAddRequest(true);

                $this->em->remove($notification);

                $this->em->flush();

                return $this->json(
                    'accept_add_request ok',
                    200,
                );
            }
        }

        return $this->json(
            'accept_add_request error',
            500,
        );
    }

    /**
     * @Route("/patient/{id}/decline/add-request", name="app_patient_decline_add_request", methods={"POST"})
     */
    public function declineAddRequest(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('decline_add_request' . $patient->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $patient]);
                $notification = $this->notificationRepository->findOneBy(['id' => $data->notificationId]);

                $this->notificationService->createAddRequestDeclineNotification($patient);

                $patient->setDoctorAddRequest(false);

                $patient->setDoctor(null);

                $this->em->remove($notification);

                $this->em->flush();

                return $this->json(
                    'decline_add_request ok',
                    200,
                );
            }
        }

        return $this->json(
            'decline_add_request error',
            500,
        );
    }
}
