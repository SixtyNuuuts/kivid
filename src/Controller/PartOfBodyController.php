<?php

namespace App\Controller;

use App\Repository\PartOfBodyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class PartOfBodyController extends AbstractController
{
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
    public function getPartsOfBody(): JsonResponse
    {
        return $this->json(
            $this->partOfBodyRepository->findAll(),
            200,
            [],
            ['groups' => 'video_read']
        );
    }
}
