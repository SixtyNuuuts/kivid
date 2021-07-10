<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Repository\PrescriptionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/kine")
 */
class ManageWorksheetController extends AbstractController
{
    private $prescriptionRepository;
    private $mailer;
    private $em;

    public function __construct(
        PrescriptionRepository $prescriptionRepository,
        MailerInterface $mailer,
        EntityManagerInterface $em
    ) {
        $this->prescriptionRepository = $prescriptionRepository;
        $this->mailer = $mailer;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/fiches", name="app_doctor_worksheets", methods={"GET"})
     */
    public function worksheetList(Doctor $doctor): Response
    {
        $doctorPrescriptions = $this->prescriptionRepository->findBy(['doctor' => $doctor]);

        return $this->render('doctor/worksheet_list.html.twig', [
            'doctor' => $doctor,
            'doctorPrescriptions' => $doctorPrescriptions,
        ]);
    }
}
