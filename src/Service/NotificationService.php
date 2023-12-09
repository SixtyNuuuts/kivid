<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Worksheet;
use App\Entity\Notification;
use App\Service\UserService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Header\PathHeader;

class NotificationService
{
    private $em;
    private $userService;
    private $mailer;
    private $router;


    // $this->notificationService->createPrescriptionNotification($worksheet, $patient);
    // $this->notificationService->createAcceptDoctorNotification($patient, $doctor);
    // $this->notificationService->createSelectDoctorNotification($patient, $doctor);
    // $this->notificationService->createDeclineDoctorNotification($patient, $doctor);
    // $this->notificationService->createScoreRankNotification('Super Patient', $patient);
    // $this->notificationService->createTimingWorksheetNotification($patient);

    public function __construct(
        EntityManagerInterface $entityManager,
        UserService $userService,
        MailerInterface $mailer,
        UrlGeneratorInterface $router
    ) {
        $this->em = $entityManager;
        $this->mailer = $mailer;
        $this->userService = $userService;
        $this->router = $router;
    }

    public function createNotification(
        string $type,
        array $content,
        User $recipient,
        int $typeId = null
    ): void {
        $notification = new Notification();

        $notification->setType($type)
                     ->setContent($content)
                     ->setTypeId($typeId)
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
                // important : laisser toujours le worksheetidlink en dernier dans le []
                [
                    'type' => 'worksheetidlink',
                    'content' => "{$worksheet->getId()}",
                ],
            ],
            $patient
        );
    }

    public function createWorksheetCompletedNotification(
        Doctor $doctor,
        Worksheet $worksheet,
        Patient $patient
    ): void {
        $this->createNotification(
            'worksheet-completed',
            [
                [
                    'type' => 'user',
                    'content' => "{$this->userService->getUserName($patient)}",
                ],
                [
                    'type' => 'text',
                    'content' => " a terminé la dernière session de sa fiche \"{$worksheet->getTitle()}\"",
                ],
                // important : laisser toujours le worksheetidlink en dernier dans le []
                [
                    'type' => 'worksheetidlink',
                    'content' => "{$worksheet->getId()}/{$patient->getId()}",
                ],
            ],
            $doctor
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
        // $patientPrescriptionUrl = $this->router->generate(
        //     'app_doctor_worksheet_action',
        //     [
        //         'id' => $doctor->getId(),
        //         'action' => 'creation',
        //         'worksheetId' => 0,
        //         'patientId' => $patient->getId(),
        //     ],
        //     UrlGeneratorInterface::ABSOLUTE_URL
        // );
        //
        // new:
        // https://127.0.0.1:8000/doctor/4/dashboard?pp=933
        $patientPrescriptionUrl = $this->router->generate(
            'app_doctor_dashboard',
            [
                'id' => $doctor->getId(),
            ],
            UrlGeneratorInterface::ABSOLUTE_URL
        ).'?pp='.$patient->getId();

        $this->createNotification(
            'select-doctor',
            [
                [
                    'type' => 'user',
                    'content' => "{$this->userService->getUserName($patient)}",
                ],
                [
                    'type' => 'text',
                    'content' => " vous a choisi comme praticien ",
                ],
                [
                    'type' => 'link',
                    'content' => '<a href="'.$patientPrescriptionUrl.'" class="link-btn"><span>Prescrire</span></a>',
                ],
            ],
            $doctor
        );

        $email = (new TemplatedEmail())
            ->from(new Address('contact@kivid.fr', '"Kivid Contact"'))
            ->to($doctor->getEmail())
            ->subject('Vous avez un nouveau patient !')
            ->htmlTemplate('/doctor/patient_add_doctor_email.html.twig')
            ->context([
                'patientName' => $this->userService->getUserName($patient),
                'patientPrescriptionUrl' => $patientPrescriptionUrl,
            ])
        ;
        
        $email->getHeaders()->addTextHeader('List-Unsubscribe', '<mailto:contact@kivid.fr>');
        $email->getHeaders()->add(new PathHeader('Return-Path', new Address('contact@kivid.fr', '"Kivid Contact"')));

        $this->mailer->send($email);
    }

    public function createPatientWithoutDoctorNotification(
        Patient $patient
    ): void {

        $email = (new TemplatedEmail())
        ->from(new Address($patient->getEmail(), "{$patient->getFirstname()} {$patient->getLastname()}}"))
        ->to('ponsoda.fabrice@gmail.com')
        ->subject('Ce nouveau patient n\'a pas de praticien !')
        ->htmlTemplate('/doctor/patient_without_doctor_email.html.twig')
        ->context([
            'patient' => "{$patient->getFirstname()} {$patient->getLastname()}",
            'contactEmail' => $patient->getEmail(),
        ])
        ;

        $this->mailer->send($email);
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
        Patient $patient,
        string $type,
        Worksheet $worksheet,
        int $typeID
    ): void {
        $this->createNotification(
            'timing-worksheet',
            [
                [
                    'type' => 'text',
                    'content' => "Plus que quelques {$type} pour réaliser vos exercices 
                    de \"{$worksheet->getTitle()}\", je m'y met maintenant !",
                ],
                // important : laisser toujours le worksheetidlink en dernier dans le []
                [
                    'type' => 'worksheetidlink',
                    'content' => "{$worksheet->getId()}",
                ],
            ],
            $patient,
            $typeID
        );
    }

    public function createScoreRankNotification(
        string $scoreRank,
        Patient $patient,
        int $typeID
    ): void {
        $this->createNotification(
            'score-rank',
            [
                [
                    'type' => 'text',
                    'content' => "Vous avez atteint le niveau {$scoreRank} ! Félicitations !",
                ],
            ],
            $patient,
            $typeID
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
