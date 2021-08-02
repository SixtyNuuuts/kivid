<?php

namespace App\Entity;

use App\Repository\WorksheetSessionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=WorksheetSessionRepository::class)
 */
class WorksheetSession
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"prescription_read"})
     */
    private $startAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"prescription_read"})
     */
    private $deadlineAt;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"prescription_read"})
     */
    private $isCompleted;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"prescription_read"})
     */
    private $day;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"prescription_read"})
     */
    private $week;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"prescription_read"})
     */
    private $execution;

    /**
     * @ORM\ManyToOne(targetEntity=Prescription::class, inversedBy="worksheetSessions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $prescription;

    public function __construct()
    {
        $this->isCompleted = false;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStartAt(): ?\DateTimeInterface
    {
        return $this->startAt;
    }

    public function setStartAt(?\DateTimeInterface $startAt): self
    {
        $this->startAt = $startAt;

        return $this;
    }

    public function getDeadlineAt(): ?\DateTimeInterface
    {
        return $this->deadlineAt;
    }

    public function setDeadlineAt(?\DateTimeInterface $deadlineAt): self
    {
        $this->deadlineAt = $deadlineAt;

        return $this;
    }

    public function getIsCompleted(): ?bool
    {
        return $this->isCompleted;
    }

    public function setIsCompleted(?bool $isCompleted): self
    {
        $this->isCompleted = $isCompleted;

        return $this;
    }

    public function getDay(): ?int
    {
        return $this->day;
    }

    public function setDay(?int $day): self
    {
        $this->day = $day;

        return $this;
    }

    public function getExecution(): ?int
    {
        return $this->execution;
    }

    public function setExecution(?int $execution): self
    {
        $this->execution = $execution;

        return $this;
    }

    public function getPrescription(): ?Prescription
    {
        return $this->prescription;
    }

    public function setPrescription(?Prescription $prescription): self
    {
        $this->prescription = $prescription;

        return $this;
    }

    public function getWeek(): ?int
    {
        return $this->week;
    }

    public function setWeek(?int $week): self
    {
        $this->week = $week;

        return $this;
    }
}
