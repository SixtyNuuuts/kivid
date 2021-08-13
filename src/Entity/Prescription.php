<?php

namespace App\Entity;

use App\Repository\PrescriptionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PrescriptionRepository::class)
 */
class Prescription
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"prescription_read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Patient::class, inversedBy="prescriptions")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"prescription_read"})
     */
    private $patient;

    /**
     * @ORM\ManyToOne(targetEntity=Doctor::class, inversedBy="prescriptions")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"prescription_read"})
     */
    private $doctor;

    /**
     * @ORM\ManyToOne(targetEntity=Worksheet::class, inversedBy="prescriptions", cascade={"remove"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"prescription_read", "patient_read", "exercise_stats_read"})
     */
    private $worksheet;

    /**
     * @ORM\OneToMany(targetEntity=WorksheetSession::class, mappedBy="prescription", orphanRemoval=true)
     * @Groups({"prescription_read", "exercise_stats_read"})
     */
    private $worksheetSessions;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"prescription_read"})
     */
    private $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->worksheetSessions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDoctor(): ?Doctor
    {
        return $this->doctor;
    }

    public function setDoctor(?Doctor $doctor): self
    {
        $this->doctor = $doctor;

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

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection|WorksheetSession[]
     */
    public function getWorksheetSessions(): Collection
    {
        return $this->worksheetSessions;
    }

    public function addWorksheetSession(WorksheetSession $worksheetSession): self
    {
        if (!$this->worksheetSessions->contains($worksheetSession)) {
            $this->worksheetSessions[] = $worksheetSession;
            $worksheetSession->setPrescription($this);
        }

        return $this;
    }

    public function removeWorksheetSession(WorksheetSession $worksheetSession): self
    {
        if ($this->worksheetSessions->removeElement($worksheetSession)) {
            // set the owning side to null (unless already changed)
            if ($worksheetSession->getPrescription() === $this) {
                $worksheetSession->setPrescription(null);
            }
        }

        return $this;
    }
}
