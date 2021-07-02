<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\DoctorPatient;
use App\Form\SearchFormType;
use App\Repository\DoctorPatientRepository;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;

/**
 * @Route("/kine")
 */
class PatientManagementController extends AbstractController
{
    /**
     * @Route("/{id}/patients", name="app_doctor_patients", methods={"GET","POST"})
     */
    public function patientsList(Request $request, Doctor $doctor, PatientRepository $patientRepository): Response
    {
        $patients = $patientRepository->findAllWithoutDoctor($doctor);

        $form = $this->createForm(SearchFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid() && $form->get('search')->getData()) {
            $patients = $patientRepository->searchWithWords($form->get('search')->getData());
        }

        return $this->render("doctor/patients_list.html.twig", [
            'searchForm' => $form->createView(),
            'doctor' => $doctor,
            'allPatients' => $patients,
            'doctorPatients' => $doctor->getDoctorPatients(),
        ]);
    }

    /**
     * @Route("/{id}/manage/patient/{idPatient}", name="app_doctor_manage_patient", methods={"GET","POST"})
     */
    public function addPatient(
        Doctor $doctor,
        int $idPatient,
        PatientRepository $patientRepository,
        DoctorPatientRepository $doctorPatientRepository,
        EntityManagerInterface $em
    ): RedirectResponse {
        $patient = $patientRepository->findOneBy(['id' => $idPatient]);
        $doctorPatient = $doctorPatientRepository->findOneBy(['doctor' => $doctor, 'patient' => $patient]);

        if ($doctorPatient) {
            $doctor->removeDoctorPatient($doctorPatient);

            $em->flush();

            $this->addFlash('success', 'Patient supprimé !');

            return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
        }

        $doctorPatient = new DoctorPatient();
        $doctorPatient->setPatient($patient);

        $doctor->addDoctorPatient($doctorPatient);

        $em->persist($doctorPatient);

        $em->flush();

        $this->addFlash('success', 'Patient ajouté !');

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
    }
}
