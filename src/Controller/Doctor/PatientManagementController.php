<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Form\CreatePatientFormType;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/kine")
 */
class PatientManagementController extends AbstractController
{
    private $patientRepository;
    private $em;

    public function __construct(
        PatientRepository $patientRepository,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/patients", name="app_doctor_patients", methods={"GET"})
     */
    public function patientList(Doctor $doctor): Response
    {
        $patients = $this->patientRepository->findAll();

        $createPatientForm = $this->createForm(CreatePatientFormType::class);

        $createPatientFormView = $this->renderView('doctor/_form_create_patient.html.twig', [
            'form' => $createPatientForm->createView(),
            'doctor' => $doctor,
        ]);

        $addPatientFormView = $this->renderView('doctor/_form_add_patient.html.twig', [
            'doctor' => $doctor,
        ]);

        $removePatientFormView = $this->renderView('doctor/_form_remove_patient.html.twig', [
            'doctor' => $doctor,
        ]);

        return $this->render('doctor/patients_list.html.twig', [
            'doctor' => $doctor,
            'createPatientForm' => $createPatientFormView,
            'addPatientForm' => $addPatientFormView,
            'removePatientForm' => $removePatientFormView,
            'allPatients' => $patients,
        ]);
    }

    /**
     * @Route("/{id}/create/patient", name="app_doctor_create_patient", methods={"POST"})
     */
    public function createPatient(Request $request, Doctor $doctor): RedirectResponse
    {
        $form = $this->createForm(CreatePatientFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $patient = new Patient();
            $patient->setFirstname($data['firstname']);
            $patient->setLastname($data['lastname']);
            $patient->setEmail($data['email']);
            $patient->setDoctor($doctor);

            $this->em->persist($patient);

            try {
                $this->em->flush();
            } catch (UniqueConstraintViolationException $e) {
                $this->addFlash(
                    'danger',
                    'Nous n\'avons pas pu créer le patient car son email est déjà utilisé par un membre.'
                );

                return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
            }

            $this->addFlash(
                'success',
                "{$patient->getFirstname()} {$patient->getLastname()} a été créé et ajouté à vos patients."
            );

            return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu créer le patient, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/add/patient", name="app_doctor_add_patient", methods={"POST"})
     */
    public function addPatient(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('add_patient' . $doctor->getId(), $request->request->get('_token'))) {
            $patient = $this->patientRepository->findOneBy(['id' => $request->request->get('patient_id')]);

            $doctor->addPatient($patient);

            $this->em->flush();

            $this->addFlash(
                'success',
                "{$patient->getFirstname()} {$patient->getLastname()} a bien été ajouté à votre liste !"
            );

            return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu ajouter le patient à votre liste, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/remove/patient", name="app_doctor_remove_patient", methods={"POST"})
     */
    public function removePatient(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('remove_patient' . $doctor->getId(), $request->request->get('_token'))) {
            $patient = $this->patientRepository->findOneBy(['id' => $request->request->get('patient_id')]);

            if ($doctor->getPatients()->contains($patient)) {
                $doctor->removePatient($patient);

                $this->em->flush();

                $this->addFlash(
                    'success',
                    "{$patient->getFirstname()} {$patient->getLastname()} a bien été retiré de votre liste !"
                );

                return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
            }
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu retirer le patient de votre liste, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
    }
}
