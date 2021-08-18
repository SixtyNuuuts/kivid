<?php

namespace App\Controller;

use App\Entity\Patient;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Notification\NotificationService;
use App\Repository\NotificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class NotificationController extends AbstractController
{
    private $patientRepository;
    private $doctorRepository;
    private $notificationRepository;
    private $em;

    public function __construct(
        PatientRepository $patientRepository,
        DoctorRepository $doctorRepository,
        NotificationRepository $notificationRepository,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->doctorRepository = $doctorRepository;
        $this->notificationRepository = $notificationRepository;
        $this->em = $em;
    }


    /**
     * @Route("/{userType}/{id}/read/notifications", name="app_user_read_notifications", methods={"POST"})
     */
    public function readNotifications(
        Request $request,
        string $userType,
        int $id,
        NotificationService $notificationService
    ): JsonResponse {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('read_notifications', $data->_token)) {
                $repository = $this->patientRepository;

                if ('doctor' === $userType) {
                    $repository = $this->doctorRepository;
                }

                $user = $repository->findOneById($id);

                $notifications = $this->notificationRepository->findBy([$userType => $user, 'isViewed' => false]);

                $notificationService->readNotifications($notifications);

                $this->em->flush();

                return $this->json(
                    'notifications read',
                    200,
                );
            }
        }

        return $this->json(
            'error notifications read',
            500,
        );
    }

    /**
     * @Route("{userType}/{id}/get/notifications", name="app_user_get_notifications", methods={"GET"})
     */
    public function getNotifications(
        string $userType,
        int $id
    ): JsonResponse {
        $repository = $this->patientRepository;

        if ('doctor' === $userType) {
            $repository = $this->doctorRepository;
        }

        $user = $repository->findOneById($id);

        return $this->json(
            $this->notificationRepository->findBy([$userType => $user], ['createdAt' => 'DESC']),
            200,
            [],
            ['groups' => 'user_read']
        );
    }

    /**
     * @Route("/{id}/get/patient-dashboard-notifications",
     * name="app_get_patient_dashboard_notifications", methods={"GET"})
     */
    public function getPatientDashboardNotifications(
        Patient $patient
    ): JsonResponse {
        return $this->json(
            $this->notificationRepository->findBy(['patient' => $patient, 'type' => 'dashboard']),
            200,
            [],
            ['groups' => 'user_read']
        );
    }
}
