<?php

namespace App\Entity;

use App\Repository\ExerciseStatRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ExerciseStatRepository::class)
 */
class ExerciseStat
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"dashboard_worksheet_read"})
     */
    private $doneAt;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"dashboard_worksheet_read"})
     */
    private $criterion;

    /**
     * @ORM\Column(type="float")
     * @Groups({"dashboard_worksheet_read"})
     */
    private $rating;

    /**
     * @ORM\ManyToOne(targetEntity=Exercise::class, inversedBy="exerciseStats")
     * @ORM\JoinColumn(nullable=true)
     */
    private $exercise;

    /**
     * @ORM\ManyToOne(targetEntity=WorksheetSession::class, inversedBy="exerciseStats")
     */
    private $worksheetSession;

    /**
     * @ORM\ManyToOne(targetEntity=Worksheet::class, inversedBy="exerciseStats")
     * @ORM\JoinColumn(nullable=false)
     */
    private $worksheet;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getDoneAt(): ?\DateTime
    {
        return $this->doneAt;
    }

    public function setDoneAt(\DateTime $doneAt): self
    {
        $this->doneAt = $doneAt;

        return $this;
    }

    public function getCriterion(): ?string
    {
        return $this->criterion;
    }

    public function setCriterion(string $criterion): self
    {
        $this->criterion = $criterion;

        return $this;
    }

    public function getRating(): ?float
    {
        return $this->rating;
    }

    public function setRating(float $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getExercise(): ?Exercise
    {
        return $this->exercise;
    }

    public function setExercise(?Exercise $exercise): self
    {
        $this->exercise = $exercise;

        return $this;
    }

    public function getWorksheetSession(): ?WorksheetSession
    {
        return $this->worksheetSession;
    }

    public function setWorksheetSession(?WorksheetSession $worksheetSession): self
    {
        $this->worksheetSession = $worksheetSession;

        return $this;
    }

    public function getWorksheet(): ?Worksheet
    {
        return $this->worksheet;
    }

    public function setWorksheet(?Worksheet $worksheet): self
    {
        $this->worksheet = $worksheet;

        return $this;
    }
}
