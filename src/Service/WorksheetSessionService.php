<?php

namespace App\Service;

use App\Entity\Worksheet;
use App\Entity\WorksheetSession;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\WorksheetSessionRepository;

class WorksheetSessionService
{
    private $worksheetSessionRepository;
    private $em;

    public function __construct(
        WorksheetSessionRepository $worksheetSessionRepository,
        EntityManagerInterface $em
    ) {
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->em = $em;
    }

    public function generateWorksheetSessionsAndGetFirst(Worksheet $worksheet): ?WorksheetSession
    {
        $checkIfWorksheetSessionsExist = $this->worksheetSessionRepository->findOneBy(
            ['worksheet' => $worksheet, 'execOrder' => 1]
        );

        if ($checkIfWorksheetSessionsExist) {
            return null;
        }

        $firstGenerateWorksheetSession = $this->generateWorksheetSessions($worksheet);

        return $firstGenerateWorksheetSession;
    }

    private function generateWorksheetSessions(Worksheet $worksheet): ?WorksheetSession
    {
        $sessionDuration = (
            (
                604800 // secondes dans une semaine
                / $worksheet->getPerWeek()
            )
            / $worksheet->getPerDay()
        );

        $refDate = new \DateTime();

        $firstGenerateWorksheetSession = null;

        for (
            $session = 1; $session <= $worksheet->getDuration()
                                    * $worksheet->getPerWeek()
                                    * $worksheet->getPerDay(); $session++
        ) {
            $worksheetSession = new WorksheetSession();

            $worksheetSession->setWorksheet($worksheet);
            $worksheetSession->setExecOrder($session);

            $worksheetSessionStartDate = new \DateTime();
            $worksheetSessionStartDate->setTimestamp(
                $refDate->getTimestamp()
                + 1
            );
            $worksheetSession->setStartAt($worksheetSessionStartDate);

            $worksheetSessionEndDate = new \DateTime();
            $worksheetSessionEndDate->setTimestamp(
                $worksheetSessionStartDate->getTimestamp()
                + $sessionDuration
            );
            $worksheetSession->setEndAt($worksheetSessionEndDate);

            $refDate = $worksheetSessionEndDate;

            if (1 === $session) {
                $firstGenerateWorksheetSession = $worksheetSession;
            }

            $this->em->persist($worksheetSession);
        }

        $this->em->flush();

        return $firstGenerateWorksheetSession;
    }
}
