<?php

namespace App\Controller;

use App\Repository\PartOfBodyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

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
