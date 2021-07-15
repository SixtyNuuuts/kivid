<?php

namespace App\Controller;

use App\Repository\VideoRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class VideoController extends AbstractController
{
    private $videoRepository;

    public function __construct(VideoRepository $videoRepository)
    {
        $this->videoRepository = $videoRepository;
    }

    /**
     * @Route("/videos", name="app_video_get_all", methods={"GET"})
     */
    public function getAll(): JsonResponse
    {
        return $this->json($this->videoRepository->findAll(), 200, [], ['groups' => 'video_read']);
    }
}
