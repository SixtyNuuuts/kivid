<?php

namespace App\Subscription;

use App\Subscription\SubscriptionPlan;

class SubscriptionHelper
{
    private $plans = [];

    public function __construct()
    {
        $this->plans[] = new SubscriptionPlan(
            'price_1JO7HmC71RxKshwfqOiGi10v',
            'Kivid Premium',
            30 * 100
        );
    }

    public function getPlans(): array
    {
        return $this->plans;
    }
}
