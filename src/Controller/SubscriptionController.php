<?php

namespace App\Controller;

use App\Entity\Patient;
use App\Entity\Subscription;
use App\Repository\SubscriptionRepository;
use App\Stripe\StripeService;
use App\Subscription\SubscriptionHelper;
use Stripe\Checkout\Session as StripeCheckoutSession;
use Stripe\Subscription as StripeSubscription;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SubscriptionController extends AbstractController
{
    private $stripeService;
    private $subscriptionRepository;
    private $em;

    public function __construct(
        StripeService $stripeService,
        SubscriptionRepository $subscriptionRepository,
        EntityManagerInterface $entityManagerInterface
    ) {
        $this->stripeService = $stripeService;
        $this->subscriptionRepository = $subscriptionRepository;
        $this->em = $entityManagerInterface;
    }

    /**
     * @Route("/{id}/subscription/{status}", name="app_subscription", methods={"GET"})
     */
    public function subscription(
        Patient $patient,
        Request $request,
        string $status = null,
        SubscriptionHelper $subscriptionHelper
    ): Response {
        $subscription = 'success' === $status
                      ? new Subscription()
                      : $this->subscriptionRepository->findOneBy(
                          ['patient' => $patient],
                          ['currentPeriodStart' => 'ASC']
                      )
        ;

        if ($subscription) {
            $stripeCheckoutSessionId = 'success' === $status
                ? $request->query->get('session_id')
                : $subscription->getStripeCustomerId()
            ;

            $stripeCheckoutSession = $this->stripeService->retrieveCheckoutSession(
                $stripeCheckoutSessionId
            );

            $stripeSubscription = $this->stripeService->retrieveSubscription(
                $stripeCheckoutSession->subscription
            );

            if ('success' === $status) {
                $this->createSubscription(
                    $patient,
                    $subscription,
                    $stripeCheckoutSession,
                    $stripeSubscription
                );
            }
        }

        return $this->render('patient/subscription.html.twig', [
            'patient' => $patient,
            'stripeSubPlans' => $subscriptionHelper->getPlans(),
            'status' => $status,
            'stripeCheckoutSession' => $stripeCheckoutSession ?? null,
            'stripeSubscription' => $stripeSubscription ?? null,
        ]);
    }

    /**
     * @Route("/{id}/subscription/checkout",
     * name="app_subscription_checkout", priority=1, methods={"POST"})
     */
    public function subscriptionCheckout(
        Patient $patient,
        Request $request
    ): JsonResponse {
        $data = json_decode($request->getContent());

        $stripeCheckoutSession = $this->stripeService->createCheckoutSession(
            $data->stripeCustomerId,
            $this->generateUrl(
                'app_subscription',
                ['id' => $patient->getId(), 'status' => 'success'],
                UrlGenerator::ABSOLUTE_URL
            ),
            $this->generateUrl(
                'app_subscription',
                ['id' => $patient->getId(), 'status' => 'cancel'],
                UrlGenerator::ABSOLUTE_URL
            ),
            $data->stripeSubPlanId
        );

        return $this->json(
            $stripeCheckoutSession->url,
            200,
        );
    }

    /**
     * @Route("/{id}/subscription/customer-portal-session",
     * name="app_subscription_customer_portal_session", priority=1, methods={"POST"})
     */
    public function subscriptionCustomerPortalSession(
        Patient $patient,
        Request $request
    ): JsonResponse {
        $data = json_decode($request->getContent());

        $stripeCustomerPortalSession = $this->stripeService->createCustomerPortalSession(
            $data->stripeCustomerId,
            $this->generateUrl(
                'app_subscription',
                ['id' => $patient->getId()],
                UrlGenerator::ABSOLUTE_URL
            ),
        );

        return $this->json(
            $stripeCustomerPortalSession->url,
            200,
        );
    }

    /**
     * @Route("/subscription/webhook", name="app_subscription_webhook", methods={"POST"})
     */
    public function subscriptionWebhook(Request $request): JsonResponse
    {
        return $this->stripeService->handleSubscriptionWebhook($request);
    }

    private function createSubscription(
        Patient $patient,
        Subscription $subscription,
        StripeCheckoutSession $stripeCheckoutSession,
        StripeSubscription $stripeSubscription
    ): void {
        $subscription->setPatient($patient);

        $subscription->setStripeCustomerId($stripeCheckoutSession->id);
        $subscription->setStripeSubscriptionId($stripeSubscription->id);

        $currentPeriodStart = new \DateTime();
        $currentPeriodStart->setTimestamp($stripeSubscription->current_period_start);
        $subscription->setCurrentPeriodStart($currentPeriodStart);

        $currentPeriodEnd = new \DateTime();
        $currentPeriodEnd->setTimestamp($stripeSubscription->current_period_end);
        $subscription->setCurrentPeriodEnd($currentPeriodEnd);

        $subscription->setIsActive(true);

        $this->em->persist($subscription);
        $this->em->flush();
    }
}
