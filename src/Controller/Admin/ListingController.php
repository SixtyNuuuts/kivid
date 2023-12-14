<?php

namespace App\Controller\Admin;

use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Controller\RedirectFromIsGrantedTrait;

/**
 * @Route("/admin")
 */
class ListingController extends AbstractController
{
    use RedirectFromIsGrantedTrait;

    /**
     * @Route("/listing/{listeType}", name="app_admin_listing")
     */
    public function listing(string $listeType): Response
    {
        return $this->render('admin/listing.html.twig', [
            'listeType' => $listeType,
        ]);
    }

    /**
     * @Route("/get/listing/{listeType}", name="app_admin_get_listing", methods={"GET"})
     */
    public function getListing(Request $request, string $listeType, DoctorRepository $doctorRepository, PatientRepository $patientRepository)
    {
        if ($request->isXmlHttpRequest()) {
            return $this->json(
                $listeType === 'doctor' ? $doctorRepository->findAll() : $patientRepository->findAll(),
                200,
                [],
                ['groups' => $listeType === 'doctor' ? 'doctor_listing_read' : 'patient_listing_read']
            );
        } else {
            if ($this->getUser()) {
                return $this->redirectFromIsGranted();
            }
            else {
                return $this->redirectToRoute('app_home');
            }
        }    
    }
}
