<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/stripe")
 */
class StripeController extends AbstractController
{
    private $stripeWebhookSecretKey;

    public function __construct(string $stripeWebhookSecretKey, string $stripeSecretKey)
    {
        $this->stripeWebhookSecretKey = $stripeWebhookSecretKey;
        \Stripe\Stripe::setApiKey($stripeSecretKey);
    }

    /**
     * @Route("/subscription/webhook", name="app_stripe_subscription_webhook", methods={"POST"})
     */
    public function subscriptionWebhook(Request $request)
    {
        try {
            // Make sure the event is coming from Stripe by checking the signature header
            $event = \Stripe\Webhook::constructEvent(
                $request->getcontent(),
                $request->headers->get('Stripe-Signature'),
                $this->stripeWebhookSecretKey
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            return $this->json(['error' => $e->getMessage()], 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            return $this->json(['error' => $e->getMessage()], 400);
        }

        // Handle the event
        switch ($event->type) {
            case 'payment_intent.succeeded':
                // $paymentIntent = $event->data->object; // contains a \Stripe\PaymentIntent
                // Then define and call a method to handle the successful payment intent.
                // handlePaymentIntentSucceeded($paymentIntent);
                break;
            case 'payment_method.attached':
                // $paymentMethod = $event->data->object; // contains a \Stripe\PaymentMethod
                // Then define and call a method to handle the successful attachment of a PaymentMethod.
                // handlePaymentMethodAttached($paymentMethod);
                break;
            case 'checkout.session.completed':
                // Payment is successful and the subscription is created.
                // You should provision the subscription.
                // $user->setSubEndDate($today);
                // $manager->persist($user);
                // $manager->flush();
                break;
            case 'invoice.paid':
                // Continue to provision the subscription as payments continue to be made.
                // Store the status in your database and check when a user accesses your service.
                // This approach helps you avoid hitting rate limits.
                break;
            case 'invoice.payment_failed':
                // The payment failed or the customer does not have a valid payment method.
                // The subscription becomes past_due. Notify your customer and send them to the
                // customer portal to update their payment information.
                break;
                //   ... handle other event types
            default:
        }

        return $this->json('success', 200);
    }
}
