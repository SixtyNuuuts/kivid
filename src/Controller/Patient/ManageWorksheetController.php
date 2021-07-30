<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Repository\VideoRepository;
use App\Repository\DoctorRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PrescriptionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class ManageWorksheetController extends AbstractController
{
    private $doctorRepository;
    private $prescriptionRepository;
    private $videoRepository;
    private $mailer;
    private $serializer;
    private $em;

    public function __construct(
        DoctorRepository $doctorRepository,
        PrescriptionRepository $prescriptionRepository,
        VideoRepository $videoRepository,
        MailerInterface $mailer,
        SerializerInterface $serializerInterface,
        EntityManagerInterface $em
    ) {
        $this->doctorRepository = $doctorRepository;
        $this->prescriptionRepository = $prescriptionRepository;
        $this->videoRepository = $videoRepository;
        $this->mailer = $mailer;
        $this->serializer = $serializerInterface;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/fiches", name="app_patient_worksheets", methods={"GET"})
     */
    public function worksheetList(Patient $patient): Response
    {
        return $this->render('patient/worksheets_list.html.twig', [
            'patient' => $patient,
        ]);
    }

    /**
     * @Route("/{id}/get/prescriptions", name="app_patient_get_prescriptions", methods={"GET"})
     */
    public function getPrescriptions(Patient $patient): JsonResponse
    {
        return $this->json(
            $this->prescriptionRepository->findBy(['patient' => $patient]),
            200,
            [],
            ['groups' => 'prescription_read']
        );
    }
}
