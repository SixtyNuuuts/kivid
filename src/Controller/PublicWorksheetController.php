<?php

namespace App\Controller;

use App\Entity\Patient;
use App\Entity\Commentary;
use App\Entity\Worksheet;
use App\Service\StripeService;
use App\Service\SubscriptionService;
use App\Repository\ExerciseRepository;
use App\Repository\WorksheetRepository;
use App\Repository\CommentaryRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\SubscriptionRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\WorksheetSessionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/fiche")
 */
class PublicWorksheetController extends AbstractController
{
    private $exerciseRepository;
    private $commentaryRepository;
    private $worksheetRepository;
    private $worksheetSessionRepository;
    private $subscriptionRepository;
    private $em;

    public function __construct(
        ExerciseRepository $exerciseRepository,
        CommentaryRepository $commentaryRepository,
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        SubscriptionRepository $subscriptionRepository,
        EntityManagerInterface $em
    ) {
        $this->exerciseRepository = $exerciseRepository;
        $this->commentaryRepository = $commentaryRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->subscriptionRepository = $subscriptionRepository;
        $this->em = $em;
    }

    /**
     * @Route("/{worksheetAccessPublicSlug}", name="app_public_worksheet_read", methods={"GET"})
     */
    public function publicWorksheetRead(string $worksheetAccessPublicSlug = null): Response {
        $worksheet = $this->worksheetRepository->findOneBy(['accessPublicSlug' => $worksheetAccessPublicSlug]);

        if (!$worksheet instanceof Worksheet) {
            return $this->redirectToRoute('app_home');
        }

        return $this->render('public/read_worksheet.html.twig', [
            'worksheetId' => $worksheet->getId(),
        ]);
    }

    /**
     * @Route("/get/{worksheetId}", name="app_public_worksheet_get", methods={"GET"})
     */
    public function getWorksheet(int $worksheetId): JsonResponse
    {
        $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

        return $this->json(
            $worksheet,
            200,
            [],
            ['groups' => 'public_worksheet_read']
        );
    }
}
