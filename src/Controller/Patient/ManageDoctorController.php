<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use Symfony\Component\Mime\Address;
use App\Repository\DoctorRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Notification\NotificationService;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use SymfonyCasts\Bundle\ResetPassword\Model\ResetPasswordToken;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use SymfonyCasts\Bundle\ResetPassword\Exception\ResetPasswordExceptionInterface;

/**
 * @Route("/patient")
 */
class ManageDoctorController extends AbstractController
{
    private $doctorRepository;
    private $notificationService;
    private $em;

    public function __construct(
        DoctorRepository $doctorRepository,
        NotificationService $notificationService,
        EntityManagerInterface $em
    ) {
        $this->doctorRepository = $doctorRepository;
        $this->notificationService = $notificationService;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/select/doctor", name="app_patient_select_doctor", methods={"POST"})
     */
    public function createDoctor(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('select_doctor' . $patient->getId(), $data->_token)) {
                $doctor = $this->doctorRepository->findOneBy(['id' => $data->doctor_id]);
                
                $patient->setDoctor($doctor);

                $this->em->persist($patient);

                $gender = $doctor->getGender() ? ("male" === $doctor->getGender() ? 'M.' : 'Mme') : '';

                return $this->json(
                    "<strong>{$gender} {$doctor->getFirstname()} {$doctor->getLastname()}</strong> 
                     est maintenant votre kinésithérapeute",
                    200,
                );
            }
        }
        return $this->json(
            'Nous n\'avons pas pu créer le doctor, veuillez réessayer ultérieurement.',
            500,
        );
    }
}
