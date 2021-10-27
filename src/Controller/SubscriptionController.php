<?php

namespace App\Controller;

use App\Service\StripeService;
use App\Service\SubscriptionService;
use App\Repository\SubscriptionRepository;
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

    public function __construct(
        StripeService $stripeService,
        SubscriptionRepository $subscriptionRepository
    ) {
        $this->stripeService = $stripeService;
        $this->subscriptionRepository = $subscriptionRepository;
    }

    /**
     * @Route("/abonnement/{status}", name="app_subscription", methods={"GET"})
     */
    public function subscription(
        Request $request,
        string $status = null,
        SubscriptionService $subscriptionService
    ): Response {
        $user = $this->getUser();

        if ('success' === $status) {
            $stripeCheckoutSessionId = $request->query->get('session_id');

            $stripeCheckoutSession = $this->stripeService->retrieveCheckoutSession(
                $stripeCheckoutSessionId
            );

            $stripeSubscription = $this->stripeService->retrieveSubscription(
                $stripeCheckoutSession->subscription
            );

            $subscriptionExist = $this->subscriptionRepository->findOneBy([
                'stripeSubscriptionId' => $stripeSubscription->id
            ]);

            if (!$subscriptionExist) {
                $subscriptionService->createSubscription(
                    $user,
                    $stripeSubscription
                );
            }
        }

        if ('success' !== $status) {
            $subscription = $this->subscriptionRepository->findCurrentSubscription($user);

            if ($subscription) {
                $stripeSubscription = $this->stripeService->retrieveSubscription(
                    $subscription->getStripeSubscriptionId()
                );
            }
        }

        return $this->render('settings/subscription.html.twig', [
            'currentUser' => $user,
            'status' => $status,
            'stripeSubPlans' => $subscriptionService->getPlans(),
            'stripeSubscription' => $stripeSubscription ?? null,
        ]);
    }

    /**
     * @Route("/subscription/checkout",
     * name="app_subscription_checkout", priority=1, methods={"POST"})
     */
    public function subscriptionCheckout(
        Request $request
    ): JsonResponse {
        $data = json_decode($request->getContent());

        $stripeCheckoutSession = $this->stripeService->createCheckoutSession(
            $data->stripeCustomerId,
            $this->generateUrl(
                'app_home',
                [],
                UrlGenerator::ABSOLUTE_URL
            ) . $data->successUrl,
            $this->generateUrl(
                'app_home',
                [],
                UrlGenerator::ABSOLUTE_URL
            ) . $data->cancelUrl,
            $data->stripeSubPlanId
        );

        return $this->json(
            $stripeCheckoutSession->url,
            200,
        );
    }

    /**
     * @Route("/subscription/customer-portal-session",
     * name="app_subscription_customer_portal_session", priority=1, methods={"POST"})
     */
    public function subscriptionCustomerPortalSession(
        Request $request
    ): JsonResponse {
        $data = json_decode($request->getContent());

        $stripeCustomerPortalSession = $this->stripeService->createCustomerPortalSession(
            $data->stripeCustomerId,
            $this->generateUrl(
                'app_subscription',
                [],
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
}
