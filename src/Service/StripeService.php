<?php

namespace App\Service;

use Stripe\StripeClient;
use App\Entity\Subscription;
use App\Repository\PatientRepository;
use App\Service\SubscriptionService;
use Stripe\Webhook as StripeWebhook;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\SubscriptionRepository;
use Symfony\Component\HttpFoundation\Request;
use Stripe\Subscription as StripeSubscription;
use Symfony\Component\HttpFoundation\JsonResponse;
use Stripe\Checkout\Session as StripeCheckoutSession;
use Stripe\BillingPortal\Session as StripeBillingPortalSession;

class StripeService
{
    private $stripe;
    private $stripeWebhookSecretKey;
    private $subscriptionRepository;
    private $patientRepository;
    private $em;

    public function __construct(
        string $stripeSecretKey,
        string $stripeWebhookSecretKey,
        SubscriptionRepository $subscriptionRepository,
        PatientRepository $patientRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->stripe = new StripeClient($stripeSecretKey);
        $this->stripeWebhookSecretKey = $stripeWebhookSecretKey;
        $this->subscriptionRepository = $subscriptionRepository;
        $this->patientRepository = $patientRepository;
        $this->em = $entityManager;
    }

    public function createCheckoutSession(
        string $customerId = null,
        string $successUrl,
        string $cancelUrl,
        string $subPlanId,
        string $userId
    ): StripeCheckoutSession {
        $config = [
            'success_url' => $successUrl . '?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => $cancelUrl,
            'allow_promotion_codes' => true,
            'payment_method_types' => ['card'],
            'mode' => 'subscription',
            'client_reference_id' => $userId,
            'subscription_data' => [
                'metadata' => [
                    'user_id' => $userId,
                ],
            ],
            'line_items' => [
                [
                    'price' => $subPlanId,
                    // For metered billing, do not pass quantity
                    'quantity' => 1,
                ]
            ],
            ];

        if ($customerId) {
            $config['customer'] = $customerId;
        }

        $session = $this->stripe->checkout->sessions->create($config);

        return $session;
    }

    public function retrieveCheckoutSession(string $checkoutSessionId): StripeCheckoutSession
    {
        $session = $this->stripe->checkout->sessions->retrieve($checkoutSessionId);

        return $session;
    }

    public function retrieveSubscription(string $subscriptionId): StripeSubscription
    {
        $subscription = $this->stripe->subscriptions->retrieve($subscriptionId);

        return $subscription;
    }

    public function createCustomerPortalSession(
        string $customerId = null,
        string $returnUrl
    ): StripeBillingPortalSession {
        $session =  $this->stripe->billingPortal->sessions->create([
            'customer' => $customerId,
            'return_url' => $returnUrl,
          ]);

        return $session;
    }

    public function handleSubscriptionWebhook(Request $request): JsonResponse
    {
        try {
            // Make sure the event is coming from Stripe by checking the signature header
            $event = StripeWebhook::constructEvent(
                $request->getcontent(),
                $request->headers->get('stripe-signature'),
                $this->stripeWebhookSecretKey
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            return new JsonResponse(['error' => $e->getMessage()], 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            return new JsonResponse(['error' => $e->getMessage()], 400);
        }

        // Handle the event
        switch ($event->type) {
            case 'invoice.paid':
                // Continue to provision the subscription as payments continue to be made.
                // Store the status in your database and check when a user accesses your service.
                // This approach helps you avoid hitting rate limits.

                $stripeSubscriptionId = $event->data->object->subscription;

                $subscription = $this->subscriptionRepository->findOneBy([
                    'stripeSubscriptionId' => $stripeSubscriptionId
                ]);

                $stripeSubscription = $this->retrieveSubscription(
                    $stripeSubscriptionId
                );

                if ($subscription) {
                    $newPeriodEnd = new \DateTime();
                    $newPeriodEnd->setTimestamp($stripeSubscription->current_period_end + 20800);
                    $subscription->setCurrentPeriodEnd($newPeriodEnd);

                    $this->em->flush();
                }

                if (!$subscription) {
                    $newSubscription = new Subscription();

                    $patient = $this->patientRepository->findOneBy([
                        'id' => $event->data->object->lines->data[0]->metadata->user_id
                    ]);
                    $newSubscription->setPatient($patient);

                    $newSubscription->setStripeSubscriptionId($stripeSubscriptionId);
                    $newSubscription->setStripeCustomerId($event->data->object->customer);

                    $currentPeriodStart = new \DateTime();
                    $currentPeriodStart->setTimestamp($stripeSubscription->current_period_start);
                    $newSubscription->setCurrentPeriodStart($currentPeriodStart);

                    $currentPeriodEnd = new \DateTime();
                    $currentPeriodEnd->setTimestamp($stripeSubscription->current_period_end + 20800);
                    $newSubscription->setCurrentPeriodEnd($currentPeriodEnd);

                    $this->em->persist($newSubscription);
                    $this->em->flush();
                }

                break;
            case 'invoice.payment_failed':
                // The payment failed or the customer does not have a valid payment method.
                // The subscription becomes past_due. Notify your customer and send them to the
                // customer portal to update their payment information.
                break;
                //   ... handle other event types
            default:
        }

        return new JsonResponse(['status' => 'success'], 200);
    }
}
