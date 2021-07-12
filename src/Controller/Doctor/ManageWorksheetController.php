<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\Prescription;
use App\Repository\PatientRepository;
use App\Repository\WorksheetRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PrescriptionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/kine")
 */
class ManageWorksheetController extends AbstractController
{
    private $worksheetRepository;
    private $patientRepository;
    private $prescriptionRepository;
    private $mailer;
    private $em;

    public function __construct(
        PatientRepository $patientRepository,
        PrescriptionRepository $prescriptionRepository,
        WorksheetRepository $worksheetRepository,
        MailerInterface $mailer,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->prescriptionRepository = $prescriptionRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->mailer = $mailer;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/fiches", name="app_doctor_worksheets", methods={"GET"})
     */
    public function worksheetList(Doctor $doctor): Response
    {
        $doctorPrescriptions = $this->prescriptionRepository->findBy(['doctor' => $doctor]);

        $createPrescriptionFormView = $this->renderView('doctor/_form_create_prescription.html.twig', [
            'doctor' => $doctor,
        ]);

        $removePrescriptionFormView = $this->renderView('doctor/_form_add_remove_common.html.twig', [
            'actionRoute' => 'app_doctor_remove_prescription',
            'tokenName' => 'remove_prescription',
            'classBtnColor' => 'vs-button--danger',
            'doctor' => $doctor,
        ]);

        $removeWorksheetFormView = $this->renderView('doctor/_form_add_remove_common.html.twig', [
            'actionRoute' => 'app_doctor_remove_worksheet',
            'tokenName' => 'remove_worksheet',
            'classBtnColor' => 'vs-button--danger',
            'doctor' => $doctor,
        ]);

        return $this->render('doctor/worksheet_list.html.twig', [
            'doctor' => $doctor,
            'doctorPrescriptions' => $doctorPrescriptions,
            'createPrescriptionForm' => $createPrescriptionFormView,
            'removePrescriptionForm' => $removePrescriptionFormView,
            'removeWorksheetForm' => $removeWorksheetFormView,
        ]);
    }

    /**
     * @Route("/{id}/create/prescription", name="app_doctor_create_prescription", methods={"POST"})
     */
    public function createPrescription(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('create_prescription' . $doctor->getId(), $request->request->get('_token'))) {
            $patient = $this->patientRepository->findOneBy(['id' => $request->request->get('patient_id')]);
            $worksheet = $this->worksheetRepository->findOneBy(['id' => $request->request->get('worksheet_id')]);

            $prescription = new Prescription();

            $prescription->setDoctor($doctor)
                         ->setPatient($patient)
                         ->setWorksheet($worksheet)
            ;

            $this->em->persist($prescription);

            $this->em->flush();

            $this->addFlash(
                'success',
                "La fiche <strong>{$worksheet->getTitle()}</strong> 
                a bien été prescrite à <strong>{$patient->getFirstname()} {$patient->getLastname()}</strong>."
            );

            return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu créer la prescription, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/remove/prescription", name="app_doctor_remove_prescription", methods={"POST"})
     */
    public function removePrescription(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('remove_prescription' . $doctor->getId(), $request->request->get('_token'))) {
            $prescription = $this->prescriptionRepository->findOneBy(['id' => $request->request->get('_id')]);

            if ($doctor->getPrescriptions()->contains($prescription)) {
                $this->em->remove($prescription);

                $this->em->flush();

                $this->addFlash(
                    'success',
                    "La prescription a bien été supprimée."
                );

                return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
            }
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu supprimer la prescription, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/remove/worksheet", name="app_doctor_remove_worksheet", methods={"POST"})
     */
    public function removeWorksheet(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('remove_worksheet' . $doctor->getId(), $request->request->get('_token'))) {
            $worksheet = $this->worksheetRepository->findOneBy(['id' => $request->request->get('_id')]);
            $this->em->remove($worksheet);

            $this->em->flush();

            $this->addFlash(
                'success',
                "La Fiche a bien été supprimée."
            );

            return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu supprimer la fiche, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_worksheets', ['id' => $doctor->getId()]);
    }
}
