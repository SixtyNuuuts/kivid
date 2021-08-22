<?php

namespace App\Entity;

use App\Repository\SubscriptionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=SubscriptionRepository::class)
 */
class Subscription
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"patient_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"patient_read", "user_read"})
     */
    private $stripeSubscriptionId;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"patient_read"})
     */
    private $stripeCustomerId;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"patient_read", "user_read"})
     */
    private $currentPeriodStart;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"patient_read", "user_read"})
     */
    private $currentPeriodEnd;

    /**
     * @ORM\ManyToOne(targetEntity=Patient::class, inversedBy="subscriptions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $patient;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"patient_read", "user_read"})
     */
    private $isActive;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStripeSubscriptionId(): ?string
    {
        return $this->stripeSubscriptionId;
    }

    public function setStripeSubscriptionId(?string $stripeSubscriptionId): self
    {
        $this->stripeSubscriptionId = $stripeSubscriptionId;

        return $this;
    }

    public function getStripeCustomerId(): ?string
    {
        return $this->stripeCustomerId;
    }

    public function setStripeCustomerId(?string $stripeCustomerId): self
    {
        $this->stripeCustomerId = $stripeCustomerId;

        return $this;
    }

    public function getCurrentPeriodStart(): ?\DateTime
    {
        return $this->currentPeriodStart;
    }

    public function setCurrentPeriodStart(?\DateTime $currentPeriodStart): self
    {
        $this->currentPeriodStart = $currentPeriodStart;

        return $this;
    }

    public function getCurrentPeriodEnd(): ?\DateTime
    {
        return $this->currentPeriodEnd;
    }

    public function setCurrentPeriodEnd(?\DateTime $currentPeriodEnd): self
    {
        $this->currentPeriodEnd = $currentPeriodEnd;

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

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }
}
