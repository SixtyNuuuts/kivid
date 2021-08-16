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
     * @Groups({"patient_read"})
     */
    private $birthdate;

    /**
     * @ORM\ManyToOne(targetEntity=Doctor::class, inversedBy="patients")
     * @Groups({"patient_read"})
     */
    private $doctor;

    /**
     * @ORM\OneToMany(targetEntity=Prescription::class, mappedBy="patient")
     * @Groups({"patient_read"})
     */
    private $prescriptions;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"patient_read"})
     */
    private $lastLoginAt;

    /**
     * @ORM\OneToMany(targetEntity=Subscription::class, mappedBy="patient", orphanRemoval=true)
     * @Groups({"patient_read"})
     */
    private $subscriptions;

    public function __construct()
    {
        parent::__construct(['ROLE_PATIENT']);
        $this->prescriptions = new ArrayCollection();
        $this->subscriptions = new ArrayCollection();
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

    /**
     * @return Collection|Prescription[]
     */
    public function getPrescriptions(): Collection
    {
        return $this->prescriptions;
    }

    public function addPrescription(Prescription $prescription): self
    {
        if (!$this->prescriptions->contains($prescription)) {
            $this->prescriptions[] = $prescription;
            $prescription->setPatient($this);
        }

        return $this;
    }

    public function removePrescription(Prescription $prescription): self
    {
        if ($this->prescriptions->removeElement($prescription)) {
            // set the owning side to null (unless already changed)
            if ($prescription->getPatient() === $this) {
                $prescription->setPatient(null);
            }
        }

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
}
