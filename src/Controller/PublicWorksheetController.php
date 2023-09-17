<?php

namespace App\Controller;

use App\Entity\Worksheet;
use App\Repository\WorksheetRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\RedirectFromIsGrantedTrait;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/fiche")
 */
class PublicWorksheetController extends AbstractController
{
    use RedirectFromIsGrantedTrait;
    
    private $worksheetRepository;

    public function __construct(
        WorksheetRepository $worksheetRepository
    ) {
        $this->worksheetRepository = $worksheetRepository;
    }

    /**
     * @Route("/{worksheetAccessPublicSlug}", name="app_public_worksheet_read", methods={"GET"})
     */
    public function publicWorksheetRead(string $worksheetAccessPublicSlug = null): Response {
        if ($this->getUser()) {
            $this->get('security.token_storage')->setToken(null);
        }

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
    public function getWorksheet(Request $request, int $worksheetId)
    {
        if ($request->isXmlHttpRequest()) {
            $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);
    
            return $this->json(
                $worksheet,
                200,
                [],
                ['groups' => 'public_worksheet_read']
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
