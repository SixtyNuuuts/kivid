<?php

namespace App\Entity;

use App\Repository\PrescriptionRepository;
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
     * @Groups({"worksheet_read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Patient::class, inversedBy="prescriptions")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"worksheet_read"})
     */
    private $patient;

    /**
     * @ORM\ManyToOne(targetEntity=Doctor::class, inversedBy="prescriptions")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"worksheet_read"})
     */
    private $doctor;

    /**
     * @ORM\ManyToOne(targetEntity=Worksheet::class, inversedBy="prescriptions")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"worksheet_read"})
     */
    private $worksheet;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"worksheet_read"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"worksheet_read"})
     */
    private $progression;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->progression = 0;
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

    public function getProgression(): ?int
    {
        return $this->progression;
    }

    public function setProgression(int $progression): self
    {
        $this->progression = $progression;

        return $this;
    }
}
