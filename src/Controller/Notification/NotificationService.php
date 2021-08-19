<?php

namespace App\Notification;

use App\Entity\User;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Worksheet;
use App\Entity\Notification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class NotificationService
{
    private $em;
    private $urlGenerator;

    public function __construct(
        EntityManagerInterface $entityManager,
        UrlGeneratorInterface $urlGenerator
    ) {
        $this->em = $entityManager;
        $this->urlGenerator = $urlGenerator;
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
        Doctor $doctor,
        Worksheet $worksheet,
        Patient $patient
    ): void {
        $this->createNotification(
            'prescription',
            [
                [
                    'type' => 'user',
                    'content' => "{$doctor->getFirstname()} {$doctor->getLastname()}",
                ],
                [
                    'type' => 'text',
                    'content' => 'vous a prescrit une fiche',
                ],
                [
                    'type' => 'link',
                    'content' => [
                        'text' => $worksheet->getTitle(),
                        'url' => $this->urlGenerator->generate(
                            'app_patient_worksheets',
                            ['id' => $patient->getId()]
                        )
                    ]
                ]
            ],
            $patient
        );
    }

    public function addPatientNotification(
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
                    'type' => 'user',
                    'content' => "{$doctor->getFirstname()} {$doctor->getLastname()}",
                ],
                [
                    'type' => 'text',
                    'content' => 'vous a ajouté : ',
                ],
            ],
            $patient
        );
    }

    public function createTimingWorksheetNotification(
        Worksheet $worksheet,
        Patient $patient
    ): void {
        $this->createNotification(
            'timing-worksheet',
            [
                [
                    'type' => 'text',
                    'content' => 'Plus que quelques ... pour réaliser',
                ],
                [
                    'type' => 'link',
                    'content' => [
                        'text' => $worksheet->getTitle(),
                        'url' => $this->urlGenerator->generate(
                            'app_patient_worksheets',
                            ['id' => $patient->getId()]
                        )
                    ]
                ]
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
