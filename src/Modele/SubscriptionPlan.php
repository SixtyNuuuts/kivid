<?php

namespace App\Modele;

class SubscriptionPlan
{
    private $planId;
    private $name;
    private $price;

    public function __construct(string $planId, string $name, int $price)
    {
        $this->planId = $planId;
        $this->name = $name;
        $this->price = $price;
    }

    public function getPlanId(): string
    {
        return $this->planId;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getPrice(): string
    {
        return $this->price;
    }
}
