<?php

namespace App\Entity;

use App\Repository\CalendlyEventRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CalendlyEventRepository::class)
 */
class CalendlyEvent
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"patient_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"patient_read"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"patient_read"})
     */
    private $eventUrl;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"patient_read"})
     */
    private $userEmail;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     * @Groups({"patient_read"})
     */
    private $scheduledEventStatus;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"patient_read"})
     */
    private $scheduledEventStartTime;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"patient_read"})
     */
    private $scheduledEventEndTime;

    /**
     * @ORM\ManyToOne(targetEntity=Patient::class, inversedBy="calendlyEvents")
     * @ORM\JoinColumn(nullable=false)
     */
    private $patient;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getEventUrl(): ?string
    {
        return $this->eventUrl;
    }

    public function setEventUrl(?string $eventUrl): self
    {
        $this->eventUrl = $eventUrl;

        return $this;
    }

    public function getUserEmail(): ?string
    {
        return $this->userEmail;
    }

    public function setUserEmail(?string $userEmail): self
    {
        $this->userEmail = $userEmail;

        return $this;
    }

    public function getScheduledEventStatus(): ?string
    {
        return $this->scheduledEventStatus;
    }

    public function setScheduledEventStatus(?string $scheduledEventStatus): self
    {
        $this->scheduledEventStatus = $scheduledEventStatus;

        return $this;
    }

    public function getScheduledEventStartTime(): ?\DateTime
    {
        return $this->scheduledEventStartTime;
    }

    public function setScheduledEventStartTime(?\DateTime $scheduledEventStartTime): self
    {
        $this->scheduledEventStartTime = $scheduledEventStartTime;

        return $this;
    }

    public function getScheduledEventEndTime(): ?\DateTime
    {
        return $this->scheduledEventEndTime;
    }

    public function setScheduledEventEndTime(?\DateTime $scheduledEventEndTime): self
    {
        $this->scheduledEventEndTime = $scheduledEventEndTime;

        return $this;
    }

    public function getPatient(): ?Patient
    {
        return $this->patient;
    }

    public function setPatient(?Patient $patient): self
    {
        $this->patient = $patient;

        return $this;
    }
}
