<?php

namespace App\Service;

class ScoreService
{
    private const PONDERATION = [
        "technical" => [
            "0" => 0.50,
            "1" => 0.55,
            "2" => 0.60,
            "3" => 0.65,
            "4" => 0.70,
            "5" => 0.75,
            "6" => 0.80,
            "7" => 0.85,
            "8" => 0.90,
            "9" => 0.95,
            "10" => 1
        ],
        "difficulty" => [
            "0" => 0.50,
            "1" => 0.60,
            "2" => 0.70,
            "3" => 0.80,
            "4" => 0.90,
            "5" => 1,
            "6" => 0.90,
            "7" => 0.80,
            "8" => 0.70,
            "9" => 0.60,
            "10" => 0.50
        ],
        "sensitivity" => [
            "0" => 0.50,
            "1.25" => 0.56,
            "2.5" => 0.62,
            "3.75" => 0.67,
            "5" => 0.73,
            "6.25" => 0.78,
            "7.5" => 0.84,
            "8.75" => 0.89,
            "10" => 1,
        ],
    ];

    public function getPonderation(string $statCriterion, string $exerciseStatValue): float
    {
        return "sensitivity" !== $statCriterion
               ? self::PONDERATION[$statCriterion][round((int)$exerciseStatValue)]
               : self::PONDERATION[$statCriterion][$exerciseStatValue]
        ;
    }
}
