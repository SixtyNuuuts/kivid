<?php

namespace App\Controller;

use App\Entity\CalendlyEvent;
use App\Repository\CalendlyEventRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class WebhookController extends AbstractController
{
    private $em;
    private $calendlyEventRepository;

    public function __construct(
        EntityManagerInterface $em,
        CalendlyEventRepository $calendlyEventRepository
    ) {
        $this->calendlyEventRepository = $calendlyEventRepository;
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
        $calendlyData = json_decode($request->getContent(), true);

        if(isset($calendlyData['event'])&&isset($calendlyData['payload']))
        {
            $eventUrl = $calendlyData['payload']['event']??null;
            $calendlyEvent = $this->calendlyEventRepository->findOneBy([
                'eventUrl' => $eventUrl
            ]);

            if(!$calendlyEvent)
            {
                $calendlyEvent = new CalendlyEvent();
                $calendlyEvent
                    ->setEventUrl($eventUrl)
                ;
            }

            $calendlyEvent
                ->setUpdatedAt(new \DateTime())
                ->setUserEmail($calendlyData['payload']['email']??null)
                ->setEventCancelUrl(new \DateTime($calendlyData['payload']['cancel_url'])??null)
                ->setEventRescheduleUrl(new \DateTime($calendlyData['payload']['reschedule_url'])??null)
                ->setScheduledEventStatus($calendlyData['payload']['scheduled_event']['status']??null)   
                ->setScheduledEventStartTime(new \DateTime($calendlyData['payload']['scheduled_event']['start_time'])??null)
                ->setScheduledEventEndTime(new \DateTime($calendlyData['payload']['scheduled_event']['end_time'])??null)
            ;

            $this->em->persist($calendlyEvent);

            $this->em->flush();

            // switch ($calendlyData['event']) {
            //     case 'invitee.created':                    
            //         break;
            //     case 'invitee.canceled':
            //         break;
            //     default:
            // }

            return new JsonResponse(['status' => 'success'], 200);    
        }

        return new JsonResponse(['status' => 'error'], 400);
    }
}
