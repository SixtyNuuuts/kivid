<?php

namespace App\Service;

use App\Entity\Patient;
use App\Entity\Subscription;
use App\Modele\SubscriptionPlan;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Subscription as StripeSubscription;

class SubscriptionService
{
    private $plans = [];
    private $em;

    public function __construct(
        EntityManagerInterface $entityManager
    ) {
        $this->em = $entityManager;
        // $this->plans[] = new SubscriptionPlan(
        //     'price_1JtvNNCvuRcL0li5gWxMmZKZ',
        //     'TEST Abonnement Jour KIVID',
        //     0.1 * 100
        // );
        $this->plans[] = new SubscriptionPlan(
            'price_1JtYbeCvuRcL0li5Q75UKmqK',
            'Abonnement Mensuel KIVID',
            24.99 * 100
        );
    }

    public function getPlans(): array
    {
        return $this->plans;
    }

    public function createSubscription(
        Patient $patient,
        StripeSubscription $stripeSubscription
    ): void {
        $subscription = new Subscription();

        $subscription->setPatient($patient);

        $subscription->setStripeSubscriptionId($stripeSubscription->id);
        $subscription->setStripeCustomerId($stripeSubscription->customer);

        $currentPeriodStart = new \DateTime();
        $currentPeriodStart->setTimestamp($stripeSubscription->current_period_start);
        $subscription->setCurrentPeriodStart($currentPeriodStart);

        $currentPeriodEnd = new \DateTime();
        $currentPeriodEnd->setTimestamp($stripeSubscription->current_period_end + 20800);
        $subscription->setCurrentPeriodEnd($currentPeriodEnd);

        $this->em->persist($subscription);
        $this->em->flush();
    }
}
