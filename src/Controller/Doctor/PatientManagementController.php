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
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
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
    private $serializer;

    public function __construct(
        PatientRepository $patientRepository,
        SerializerInterface $serializer,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->em = $em;
        $this->serializer = $serializer;
    }

    /**
     * @Route("/{id}/patients", name="app_doctor_patients", methods={"GET"})
     */
    public function patientList(Doctor $doctor): Response
    {
        $patients = $this->patientRepository->findAll();

        $form = $this->createForm(CreatePatientFormType::class);

        $view = $this->renderView('doctor/_form_create_patient.html.twig', [
            'form' => $form->createView(),
            'doctor' => $doctor,
        ]);

        return $this->render('doctor/patients_list.html.twig', [
            'doctor' => $doctor,
            'createPatientForm' => $view,
            'allPatients' => $patients,
            'doctorPatients' => $doctor->getPatients(),
        ]);
    }

    /**
     * @Route("/{id}/add/patient/{idPatient}", name="app_doctor_add_patient", methods={"GET"})
     */
    public function addPatient(Doctor $doctor, int $idPatient): JsonResponse
    {
        $patient = $this->patientRepository->findOneBy(['id' => $idPatient]);

        if ($doctor->getPatients()->contains($patient)) {
            return $this->json('Cet utilisateur fait déjà partie de vos patients', 300);
        }

        $doctor->addPatient($patient);

        $this->em->flush();

        $this->addFlash(
            'success',
            "{$patient->getFirstname()} {$patient->getLastname()} a bien été ajouté à votre liste !"
        );

        return $this->json('Patient ajouté !', 200);
    }

    /**
     * @Route("/{id}/remove/patient/{idPatient}", name="app_doctor_remove_patient", methods={"GET"})
     */
    public function removePatient(Doctor $doctor, int $idPatient): JsonResponse
    {
        $patient = $this->patientRepository->findOneBy(['id' => $idPatient]);

        if ($doctor->getPatients()->contains($patient)) {
            $doctor->removePatient($patient);

            $this->em->flush();

            $this->addFlash(
                'success',
                "{$patient->getFirstname()} {$patient->getLastname()} a bien été retiré de votre liste !"
            );

            return $this->json('Patient retiré de votre liste !', 200);
        }

        $this->addFlash('danger', 'Erreur : cet utilisateur ne fait pas partie de vos patient.');

        return $this->json('Erreur : cet utilisateur ne fait pas partie de vos patient.', 300);
    }

    /**
     * @Route("/{id}/create/patient", name="app_doctor_create_patient", methods={"POST"})
     */
    public function createPatient(Request $request, Doctor $doctor): RedirectResponse
    {
        $form = $this->createForm(CreatePatientFormType::class);

        $form->handleRequest($request);

        $patient = new Patient();

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $patient->setFirstname($data['firstname']);
            $patient->setLastname($data['lastname']);
            $patient->setEmail($data['email']);
            $patient->setDoctor($doctor);

            $this->em->persist($patient);

            try {
                $this->em->flush();
            } catch (UniqueConstraintViolationException $e) {
                $this->addFlash('danger', 'Nous n\'avons pas pu créer le patient car son email était déjà utilisé.');

                return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
            }

            $this->addFlash('success', 'L`\'utilisateur a été créé et ajouté à vos patients.');
        }

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
    }
}
