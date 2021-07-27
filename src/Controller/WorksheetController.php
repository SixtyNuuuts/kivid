<?php

namespace App\Controller;

use App\Repository\WorksheetRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class WorksheetController extends AbstractController
{
    private $worksheetRepository;

    public function __construct(WorksheetRepository $worksheetRepository)
    {
        $this->worksheetRepository = $worksheetRepository;
    }

    /**
     * @Route("/get/worksheet-templates", name="app_get_worksheet_templates", methods={"GET"})
     */
    public function getWorksheetTemplates(): JsonResponse
    {
        return $this->json(
            $this->worksheetRepository->findBy(['isTemplate' => true]),
            200,
            [],
            ['groups' => 'worksheet_read']
        );
    }
}
