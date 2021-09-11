<?php

namespace App\Controller\Patient;

use App\Repository\PatientRepository;
<<<<<<< HEAD
=======
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
>>>>>>> f22952b (integration design step 8)
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class CRUDController extends AbstractController
{
    private $patientRepository;

    public function __construct(
        PatientRepository $patientRepository
    ) {
        $this->patientRepository = $patientRepository;
    }

    /**
     * @Route("/get/patients", name="app_get_patients", methods={"GET"})
     */
    public function getPatients(): JsonResponse
    {
        return $this->json($this->patientRepository->findAll(), 200, [], ['groups' => 'patient_read']);
    }
}
