<?php

namespace App\Controller;

use App\Entity\CalendlyEvent;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class WebhookController extends AbstractController
{
    private $em;

    public function __construct(
        EntityManagerInterface $em
    ) {
        $this->em = $em;
    }

    /**
     * @Route("/webhook/calendly", name="app_webhook_calendly", methods={"POST"})
     */
    public function webhookCalendly(Request $request): JsonResponse
    {
        return $this->handleCalendlyWebhook($request);
    }

    public function handleCalendlyWebhook(Request $request): JsonResponse
    {
        // Récupérez le contenu du payload JSON de la requête
        // $payload = json_decode($request->getContent(), true);

        $newCalendlyEvent = new CalendlyEvent();

        $newCalendlyEvent->setPayload($request->getContent()??'pfff');
        
        $this->em->persist($newCalendlyEvent);

        $this->em->flush();

        // // Maintenant, vous pouvez accéder aux données du payload
        // // Par exemple, pour accéder à l'ID de l'événement Calendly :
        // $eventId = $payload['event']['uuid'];

        // // Faites ce que vous devez faire avec les données du webhook ici

        // Répondez au webhook Calendly avec une réponse HTTP 200 OK
        return new JsonResponse(['status' => 'success'], 200);
    }
}
