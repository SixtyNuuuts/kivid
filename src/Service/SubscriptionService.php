<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\Subscription;
use App\Modele\SubscriptionPlan;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Subscription as StripeSubscription;
use App\Entity\Doctor;
use App\Entity\Patient;

class SubscriptionService
{
    private $plans = [];
    private $em;

    public function __construct(
        EntityManagerInterface $entityManager
    ) {
        $this->em = $entityManager;
        // $this->plans[] = new SubscriptionPlan(
        //     'price_1KfmuyCvuRcL0li5ogCMRBLw',
        //     'Abonnement Mensuel KIVID',
        //     9.90 * 100
        // );
        $this->plans['patient'] = new SubscriptionPlan( //test Abo Patient
            'price_1JfYRrC71RxKshwfHNB7BS3P',
            'Kivid',
            0.1 * 100
        );
        $this->plans['doctor'] = new SubscriptionPlan( //test Abo Praticien
            'price_1OQ3ieC71RxKshwfQehsD1YA',
            'Kivid Pro',
            0.1 * 100
        );
        $this->plans['doctor_monthly'] = new SubscriptionPlan( //test Abo Praticien mensuel
            'price_1OQ3ieC71RxKshwfQehsD1YA',
            'Kivid Pro',
            0.1 * 100
        );
        $this->plans['doctor_annual'] = new SubscriptionPlan( //test Abo Praticien annuel
            'price_1OQ3EjC71RxKshwfsPnP0J44',
            'Kivid Pro',
            0.2 * 100
        );
    }

    public function getPlans(): array
    {
        return $this->plans;
    }

    public function createSubscription(
        User $user,
        StripeSubscription $stripeSubscription
    ): void {
        $subscription = new Subscription();

        if ($user instanceof Patient) {
            $subscription->setPatient($user);
        }
        elseif ($user instanceof Doctor) {
            $subscription->setDoctor($user);
        }

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
