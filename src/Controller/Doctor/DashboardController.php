<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Service\StripeService;
use App\Service\SubscriptionService;
use App\Repository\SubscriptionRepository;

/**
 * @Route("/doctor")
 */
class DashboardController extends AbstractController
{
    /**
     * @Route("/{id}/dashboard/{status}", name="app_doctor_dashboard")
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function dashboard(
        Request $request,
        Doctor $doctor,
        string $status = null,
        SubscriptionService $subscriptionService,
        StripeService $stripeService,
        SubscriptionRepository $subscriptionRepository
    ): Response
    {
        if ('success' === $status) {
            $stripeCheckoutSessionId = $request->query->get('session_id');

            $stripeCheckoutSession = $stripeService->retrieveCheckoutSession(
                $stripeCheckoutSessionId
            );

            $stripeSubscription = $stripeService->retrieveSubscription(
                $stripeCheckoutSession->subscription
            );

            $subscriptionExist = $subscriptionRepository->findOneBy([
                'stripeSubscriptionId' => $stripeSubscription->id
            ]);

            if (!$subscriptionExist) {
                $subscriptionService->createSubscription(
                    $doctor,
                    $stripeSubscription
                );
            }
        }

        if ('success' !== $status) {
            $subscription = $subscriptionRepository->findCurrentSubscription($doctor);

            if ($subscription) {
                $stripeSubscription = $stripeService->retrieveSubscription(
                    $subscription->getStripeSubscriptionId()
                );
            }
        }

        return $this->render('doctor/dashboard.html.twig', [
            'doctor' => $doctor,
            'status' => $status,
            'stripeSubPlans' => $subscriptionService->getPlans(),
            'stripeSubscription' => $stripeSubscription ?? null,
        ]);
    }
}
