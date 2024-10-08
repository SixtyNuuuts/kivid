<?php

namespace App\Controller;

use App\Entity\Patient;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Service\NotificationService;
use App\Repository\NotificationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use App\Controller\RedirectFromIsGrantedTrait;

class NotificationController extends AbstractController
{
    use RedirectFromIsGrantedTrait;
    
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
     * @isGranted("IS_AUTHENTICATED_FULLY")
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
     * @isGranted("IS_AUTHENTICATED_FULLY")
     */
    public function getNotifications( 
        Request $request,
        string $userType,
        int $id
    ) {
        if ($request->isXmlHttpRequest()) {
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
        } else {
            if ($this->getUser()) {
                return $this->redirectFromIsGranted();
            }
        }
    }

    /**
     * @Route("/patient/{id}/get/patient-dashboard-notifications",
     * name="app_get_patient_dashboard_notifications", methods={"GET"})
     * @isGranted("IS_AUTHENTICATED_FULLY")
     */
    public function getPatientDashboardNotifications(
        Request $request,
        Patient $patient
    ) {
        if ($request->isXmlHttpRequest()) {
            return $this->json(
                $this->notificationRepository->findBy(['patient' => $patient, 'type' => 'dashboard']),
                200,
                [],
                ['groups' => 'user_read']
            );    
        } else {
            if ($this->getUser()) {
                return $this->redirectFromIsGranted();
            }
        }
    }
}
