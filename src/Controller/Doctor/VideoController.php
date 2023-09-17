<?php

namespace App\Controller\Doctor;

use App\Repository\VideoRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\RedirectFromIsGrantedTrait;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/doctor")
 */
class VideoController extends AbstractController
{    
    use RedirectFromIsGrantedTrait;

    private $videoRepository;

    public function __construct(VideoRepository $videoRepository)
    {
        $this->videoRepository = $videoRepository;
    }

    /**
     * @Route("/{id}/get/videos", name="app_doctor_get_videos", methods={"GET"})
     *
     */
    public function getVideos(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            return $this->json($this->videoRepository->findAll(), 200, [], ['groups' => 'video_read']);
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
