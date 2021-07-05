<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Form\SearchFormType;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/kine")
 */
class PatientManagementController extends AbstractController
{
    private $patientRepository;
    private $serializer;

    public function __construct(PatientRepository $patientRepository, SerializerInterface $serializer)
    {
        $this->patientRepository = $patientRepository;
        $this->serializer = $serializer;
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
    public function addPatient(Doctor $doctor, int $idPatient, EntityManagerInterface $em): JsonResponse
    {
        $patient = $this->patientRepository->findOneBy(['id' => $idPatient]);

        if ($doctor->getPatients()->contains($patient)) {
            $doctor->removePatient($patient);

            $em->flush();

            $this->addFlash('success', 'Patient supprimé !');

            return $this->json('Patient supprimé !', 200);
            // return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
        }

        $doctor->addPatient($patient);

        $em->flush();

        $this->addFlash('success', 'Patient ajouté !');

        return $this->json('Patient ajouté !', 200);
        // return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/patients/search/{search}", name="app_doctor_patients_search", methods={"GET"})
     */
    // public function searchPatient(Doctor $doctor, string $search): JsonResponse
    // {
    //     $patientsFiltered = $this->patientRepository->searchWithWords($search);

    //     $jsonPatientsFiltered = $this->serializer->serialize(
    //         $patientsFiltered,
    //         'json',
    //         ['groups' => 'patient_read']
    //     );

    //     return $this->json($jsonPatientsFiltered, 200);
    // }
}
