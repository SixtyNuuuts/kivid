<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class DobToAge extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('age', [$this, 'getAge']),
        ];
    }

    public function getAge($date)
    {
        if (!$date instanceof \DateTimeImmutable) {
            return null;
        }

        $referenceDate = date('01-01-Y');
        $referenceDateTimeObject = new \DateTimeImmutable($referenceDate);
        $diff = $referenceDateTimeObject->diff($date);
        return $diff->y;
    }
}
