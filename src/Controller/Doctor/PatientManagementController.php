<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Form\SearchFormType;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/kine")
 */
class PatientManagementController extends AbstractController
{
    private $patientRepository;

    public function __construct(PatientRepository $patientRepository)
    {
        $this->patientRepository = $patientRepository;
    }

    /**
     * @Route("/{id}/patients", name="app_doctor_patients", methods={"GET","POST"})
     */
    public function patientList(Request $request, Doctor $doctor): Response
    {
        $patients = $this->patientRepository->findAll();

        $form = $this->createForm(SearchFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid() && $form->get('search')->getData()) {
            $patients = $this->patientRepository->searchWithWords($form->get('search')->getData());
        }

        return $this->render("doctor/patients_list.html.twig", [
            'searchForm' => $form->createView(),
            'doctor' => $doctor,
            'allPatients' => $patients,
            'doctorPatients' => $doctor->getPatients(),
        ]);
    }

    /**
     * @Route("/{id}/manage/patient/{idPatient}", name="app_doctor_manage_patient", methods={"GET"})
     */
    public function addPatient(Doctor $doctor, int $idPatient, EntityManagerInterface $em): RedirectResponse
    {
        $patient = $this->patientRepository->findOneBy(['id' => $idPatient]);

        if ($doctor->getPatients()->contains($patient)) {
            $doctor->removePatient($patient);

            $em->flush();

            $this->addFlash('success', 'Patient supprimé !');

            return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
        }

        $doctor->addPatient($patient);

        $em->flush();

        $this->addFlash('success', 'Patient ajouté !');

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
    }
}
