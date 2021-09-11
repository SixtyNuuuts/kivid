<?php

namespace App\Controller\Doctor;

use App\Repository\VideoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class VideoController extends AbstractController
{
    private $videoRepository;

    public function __construct(VideoRepository $videoRepository)
    {
        $this->videoRepository = $videoRepository;
    }

    /**
     * @Route("/get/videos", name="app_get_videos", methods={"GET"})
     */
    public function getVideos(): JsonResponse
    {
        return $this->json($this->videoRepository->findAll(), 200, [], ['groups' => 'video_read']);
    }
}
