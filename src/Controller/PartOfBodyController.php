<?php

namespace App\Controller;

use App\Repository\PartOfBodyRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\RedirectFromIsGrantedTrait;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PartOfBodyController extends AbstractController
{
    use RedirectFromIsGrantedTrait;
    
    private $partOfBodyRepository;

    public function __construct(
        PartOfBodyRepository $partOfBodyRepository
    ) {
        $this->partOfBodyRepository = $partOfBodyRepository;
    }

    /**
     * @Route("/get/parts-of-body", name="app_get_parts_of_body", methods={"GET"})
     * @isGranted("IS_AUTHENTICATED_FULLY")
     */
    public function getPartsOfBody(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            return $this->json(
                $this->partOfBodyRepository->findAll(),
                200,
                [],
                ['groups' => 'video_read']
            );
        } else {
            if ($this->getUser()) {
                return $this->redirectFromIsGranted();
            }
        }    
    }
}
