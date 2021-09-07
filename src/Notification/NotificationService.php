<?php

namespace App\Notification;

use App\Entity\User;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Worksheet;
use App\User\UserService;
use App\Entity\Notification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class NotificationService
{
    private $em;
    private $userService;

    // $this->notificationService->createPrescriptionNotification($worksheet, $patient);
    // $this->notificationService->createAcceptDoctorNotification($patient, $doctor);
    // $this->notificationService->createSelectDoctorNotification($patient, $doctor);
    // $this->notificationService->createDeclineDoctorNotification($patient, $doctor);
    // $this->notificationService->createScoreRankNotification('Super Patient', $patient);
    // $this->notificationService->createTimingWorksheetNotification($patient);

    public function __construct(
        EntityManagerInterface $entityManager,
        UserService $userService
    ) {
        $this->em = $entityManager;
        $this->userService = $userService;
    }

    public function createNotification(
        string $type,
        array $content,
        User $recipient
    ): void {
        $notification = new Notification();

        $notification->setType($type)
                     ->setContent($content)
        ;

        if ($recipient instanceof Patient) {
            $notification->setPatient($recipient);
        }

        if ($recipient instanceof Doctor) {
            $notification->setDoctor($recipient);
        }

        $this->em->persist($notification);
    }

    public function createPrescriptionNotification(
        Worksheet $worksheet,
        Patient $patient
    ): void {
        $this->createNotification(
            'prescription',
            [
                [
                    'type' => 'text',
                    'content' => 'Votre praticien',
                ],
                [
                    'type' => 'text',
                    'content' => " vous a prescrit une fiche \"{$worksheet->getTitle()}\"",
                ],
            ],
            $patient
        );
    }

    public function createAcceptDoctorNotification(
        Patient $patient,
        Doctor $doctor
    ): void {
        $this->createNotification(
            'accept-doctor',
            [
                [
                    'type' => 'user',
                    'content' => "{$this->userService->getUserName($patient)}",
                ],
                [
                    'type' => 'text',
                    'content' => " a accepté votre demande d'ajout",
                ],
            ],
            $doctor
        );
    }

    public function createDeclineDoctorNotification(
        Patient $patient,
        Doctor $doctor
    ): void {
        $this->createNotification(
            'decline-doctor',
            [
                [
                    'type' => 'user',
                    'content' => "{$this->userService->getUserName($patient)}",
                ],
                [
                    'type' => 'text',
                    'content' => " a refusé votre demande d'ajout",
                ],
            ],
            $doctor
        );
    }

    public function createSelectDoctorNotification(
        Patient $patient,
        Doctor $doctor
    ): void {
        $this->createNotification(
            'select-doctor',
            [
                [
                    'type' => 'user',
                    'content' => "{$this->userService->getUserName($patient)}",
                ],
                [
                    'type' => 'text',
                    'content' => " vous a choisi comme praticien",
                ],
            ],
            $doctor
        );
    }

    public function createAddPatientNotification(
        Doctor $doctor,
        Patient $patient
    ): void {
        $this->createNotification(
            'dashboard',
            [
                [
                    'type' => 'add-patient',

                ],
                [
                    'type' => 'text',
                    'content' => 'Un praticien ',
                ],
                [
                    'type' => 'user',
                    'content' => "({$this->userService->getUserName($doctor)})",
                ],
                [
                    'type' => 'text',
                    'content' => ' vous a ajouté',
                ],
            ],
            $patient
        );
    }

    public function createTimingWorksheetNotification(
        Patient $patient
    ): void {
        $this->createNotification(
            'timing-worksheet',
            [
                [
                    'type' => 'text',
                    'content' => "Plus que quelques heures pour réaliser vos exercices, je m'y met maintenant !",
                ],
            ],
            $patient
        );
    }

    public function createScoreRankNotification(
        string $scoreRank,
        Patient $patient
    ): void {
        $this->createNotification(
            'score-rank',
            [
                [
                    'type' => 'text',
                    'content' => "Vous avez atteint le niveau {$scoreRank} ! Félicitation !",
                ],
            ],
            $patient
        );
    }

    public function readNotification($notification): void
    {
        $notification->setIsViewed(true);
    }

    public function readNotifications(array $notifications): void
    {
        foreach ($notifications as $notification) {
            $notification->setIsViewed(true);
        }
    }
}
