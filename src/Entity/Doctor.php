<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\DoctorRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=DoctorRepository::class)
 */
class Doctor extends User
{
    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"doctor_read"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"doctor_read", "patient_read", "user_read"})
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"doctor_read", "user_read"})
     */
    private $street;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"doctor_read", "patient_read", "user_read"})
     */
    private $entityName;

    /**
     * @ORM\OneToMany(targetEntity=Patient::class, mappedBy="doctor")
     * @Groups({"doctor_read"})
     */
    private $patients;

    /**
     * @ORM\OneToMany(targetEntity=Notification::class, mappedBy="doctor")
     * @Groups({"user_read"})
     */
    private $notifications;

    /**
     * @ORM\OneToMany(targetEntity=Commentary::class, mappedBy="doctor")
     */
    private $commentaries;

    /**
     * @ORM\OneToMany(targetEntity=Worksheet::class, mappedBy="doctor")
     */
    private $worksheets;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"doctor_read", "user_read"})
     */
    private $numRppsAmeli;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $giveFreeAccessPrescri;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"doctor_read"})
     */
    private $giveAccessPublicWorksheetGeneration;

    public function __construct()
    {
        parent::__construct(['ROLE_DOCTOR']);
        $this->patients = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->commentaries = new ArrayCollection();
        $this->worksheets = new ArrayCollection();
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(?string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getEntityName(): ?string
    {
        return $this->entityName;
    }

    public function setEntityName(?string $entityName): self
    {
        $this->entityName = $entityName;

        return $this;
    }

    /**
     * @return Collection|Patient[]
     */
    public function getPatients(): Collection
    {
        return $this->patients;
    }

    public function addPatient(Patient $patient): self
    {
        if (!$this->patients->contains($patient)) {
            $this->patients[] = $patient;
            $patient->setDoctor($this);
        }

        return $this;
    }

    public function removePatient(Patient $patient): self
    {
        if ($this->patients->removeElement($patient)) {
            // set the owning side to null (unless already changed)
            if ($patient->getDoctor() === $this) {
                $patient->setDoctor(null);
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
            $notification->setDoctor($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): self
    {
        if ($this->notifications->removeElement($notification)) {
            // set the owning side to null (unless already changed)
            if ($notification->getDoctor() === $this) {
                $notification->setDoctor(null);
            }
        }

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
            $commentary->setDoctor($this);
        }

        return $this;
    }

    public function removeCommentary(Commentary $commentary): self
    {
        if ($this->commentaries->removeElement($commentary)) {
            // set the owning side to null (unless already changed)
            if ($commentary->getDoctor() === $this) {
                $commentary->setDoctor(null);
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
            $worksheet->setDoctor($this);
        }

        return $this;
    }

    public function removeWorksheet(Worksheet $worksheet): self
    {
        if ($this->worksheets->removeElement($worksheet)) {
            // set the owning side to null (unless already changed)
            if ($worksheet->getDoctor() === $this) {
                $worksheet->setDoctor(null);
            }
        }

        return $this;
    }

    public function getNumRppsAmeli(): ?string
    {
        return $this->numRppsAmeli;
    }

    public function setNumRppsAmeli(?string $numRppsAmeli): self
    {
        $this->numRppsAmeli = $numRppsAmeli;

        return $this;
    }

    public function isGiveFreeAccessPrescri(): ?bool
    {
        return $this->giveFreeAccessPrescri;
    }

    public function setGiveFreeAccessPrescri(?bool $giveFreeAccessPrescri): self
    {
        $this->giveFreeAccessPrescri = $giveFreeAccessPrescri;

        return $this;
    }

    public function isGiveAccessPublicWorksheetGeneration(): ?bool
    {
        return $this->giveAccessPublicWorksheetGeneration;
    }

    public function setGiveAccessPublicWorksheetGeneration(?bool $giveAccessPublicWorksheetGeneration): self
    {
        $this->giveAccessPublicWorksheetGeneration = $giveAccessPublicWorksheetGeneration;

        return $this;
    }
}
