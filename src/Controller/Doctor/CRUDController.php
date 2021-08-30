<?php

namespace App\Controller\Doctor;

use App\Repository\DoctorRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CRUDController extends AbstractController
{
    private $doctorRepository;

    public function __construct(
        DoctorRepository $doctorRepository
    ) {
        $this->doctorRepository = $doctorRepository;
    }

    /**
     * @Route("/get/doctors", name="app_get_doctors", methods={"GET"})
     */
    public function getDoctors(): JsonResponse
    {
        return $this->json($this->doctorRepository->findAll(), 200, [], ['groups' => 'doctor_read']);
    }
}
