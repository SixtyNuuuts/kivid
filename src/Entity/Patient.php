<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\PatientRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PatientRepository::class)
 */
class Patient extends User
{
    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     * @Groups({"patient_read", "user_read"})
     */
    private $birthdate;

    /**
     * @ORM\ManyToOne(targetEntity=Doctor::class, inversedBy="patients")
     * @Groups({"patient_read"})
     */
    private $doctor;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"patient_read"})
     */
    private $lastLoginAt;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"patient_read"})
     */
    private $addRequestDoctor;

    /**
     * @ORM\OneToMany(targetEntity=Subscription::class, mappedBy="patient", orphanRemoval=true)
     * @Groups({"patient_read"})
     */
    private $subscriptions;

    /**
     * @ORM\OneToMany(targetEntity=Notification::class, mappedBy="patient")
     */
    private $notifications;

    /**
     * @ORM\OneToMany(targetEntity=Commentary::class, mappedBy="patient")
     */
    private $commentaries;

    /**
     * @ORM\OneToMany(targetEntity=Worksheet::class, mappedBy="patient")
     * @Groups({"patient_read"})
     */
    private $worksheets;

    /**
     * @ORM\OneToMany(targetEntity=Score::class, mappedBy="patient", orphanRemoval=true)
     */
    private $scores;

    public function __construct()
    {
        parent::__construct(['ROLE_PATIENT']);
        $this->subscriptions = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->commentaries = new ArrayCollection();
        $this->worksheets = new ArrayCollection();
        $this->scores = new ArrayCollection();
    }

    public function getBirthdate(): ?\DateTimeImmutable
    {
        return $this->birthdate;
    }

    public function setBirthdate(?\DateTimeImmutable $birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getDoctor(): ?Doctor
    {
        return $this->doctor;
    }

    public function setDoctor(?Doctor $doctor): self
    {
        $this->doctor = $doctor;

        return $this;
    }

    public function getLastLoginAt(): ?\DateTimeInterface
    {
        return $this->lastLoginAt;
    }

    public function setLastLoginAt(?\DateTimeInterface $lastLoginAt): self
    {
        $this->lastLoginAt = $lastLoginAt;

        return $this;
    }

    /**
     * @return Collection|Subscription[]
     */
    public function getSubscriptions(): Collection
    {
        return $this->subscriptions;
    }

    public function addSubscription(Subscription $subscription): self
    {
        if (!$this->subscriptions->contains($subscription)) {
            $this->subscriptions[] = $subscription;
            $subscription->setPatient($this);
        }

        return $this;
    }

    public function removeSubscription(Subscription $subscription): self
    {
        if ($this->subscriptions->removeElement($subscription)) {
            // set the owning side to null (unless already changed)
            if ($subscription->getPatient() === $this) {
                $subscription->setPatient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Notification[]
     */
    public function getNotifications(): Collection
    {
        return $this->notifications;
    }

    public function addNotification(Notification $notification): self
    {
        if (!$this->notifications->contains($notification)) {
            $this->notifications[] = $notification;
            $notification->setPatient($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): self
    {
        if ($this->notifications->removeElement($notification)) {
            // set the owning side to null (unless already changed)
            if ($notification->getPatient() === $this) {
                $notification->setPatient(null);
            }
        }

        return $this;
    }

    public function getAddRequestDoctor(): ?bool
    {
        return $this->addRequestDoctor;
    }

    public function setAddRequestDoctor(?bool $addRequestDoctor): self
    {
        $this->addRequestDoctor = $addRequestDoctor;

        return $this;
    }

    /**
     * @return Collection|Commentary[]
     */
    public function getCommentaries(): Collection
    {
        return $this->commentaries;
    }

    public function addCommentary(Commentary $commentary): self
    {
        if (!$this->commentaries->contains($commentary)) {
            $this->commentaries[] = $commentary;
            $commentary->setPatient($this);
        }

        return $this;
    }

    public function removeCommentary(Commentary $commentary): self
    {
        if ($this->commentaries->removeElement($commentary)) {
            // set the owning side to null (unless already changed)
            if ($commentary->getPatient() === $this) {
                $commentary->setPatient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Worksheet[]
     */
    public function getWorksheets(): Collection
    {
        return $this->worksheets;
    }

    public function addWorksheet(Worksheet $worksheet): self
    {
        if (!$this->worksheets->contains($worksheet)) {
            $this->worksheets[] = $worksheet;
            $worksheet->setPatient($this);
        }

        return $this;
    }

    public function removeWorksheet(Worksheet $worksheet): self
    {
        if ($this->worksheets->removeElement($worksheet)) {
            // set the owning side to null (unless already changed)
            if ($worksheet->getPatient() === $this) {
                $worksheet->setPatient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Score[]
     */
    public function getScores(): Collection
    {
        return $this->scores;
    }

    public function addScore(Score $score): self
    {
        if (!$this->scores->contains($score)) {
            $this->scores[] = $score;
            $score->setPatient($this);
        }

        return $this;
    }

    public function removeScore(Score $score): self
    {
        if ($this->scores->removeElement($score)) {
            // set the owning side to null (unless already changed)
            if ($score->getPatient() === $this) {
                $score->setPatient(null);
            }
        }

        return $this;
    }
}
