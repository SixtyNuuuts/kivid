<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class SubscriptionController extends AbstractController
{
    private $stripePublicKey;

    public function __construct(string $stripePublicKey, string $stripeSecretKey)
    {
        $this->stripePublicKey = $stripePublicKey;
        \Stripe\Stripe::setApiKey($stripeSecretKey);
    }

    /**
     * @Route("/{id}/subscription/{status}", name="app_patient_subscription", methods={"GET"})
     */
    public function subscription(Request $request, Patient $patient, string $status = null): Response
    {
        if ('success' === $status) {
            $stripeCheckoutSessionId = $request->query->get('session_id');
            $stripeCheckoutSession = \Stripe\Checkout\Session::retrieve($stripeCheckoutSessionId);
        }

        return $this->render('patient/subscription.html.twig', [
            'patient' => $patient,
            'stripePublicKey' => $this->stripePublicKey,
            'stripeCheckoutSession' => $stripeCheckoutSession ?? null,
            'status' => $status,
        ]);
    }

    ///// create checkout
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    // $checkout_session = \Stripe\Checkout\Session::create([
    //     'success_url' => $domain_url . '/success.php?session_id={CHECKOUT_SESSION_ID}',
    //     'cancel_url' => $domain_url . '/canceled.php',
    //     'payment_method_types' => ['card'],
    //     'mode' => 'subscription',
    //     'line_items' => [[
    //       'price' => $_POST['priceId'],
    //       'quantity' => 1,
    //     ]]
    //   ]);

    ///// create BillingPortal Session
    // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
    // Typically this is stored alongside the authenticated user in your database.
    // $stripeCustomerId = $stripeCheckoutSession->customer;

    // This is the URL to which users are redirected after managing their billing
    // with the customer portal.
    // $returnUrl = $_ENV['DOMAIN'];

    // $session = \Stripe\BillingPortal\Session::create([
    //   'customer' => $stripeCustomerId,
    //   'return_url' => $returnUrl,
    // ]);
}
