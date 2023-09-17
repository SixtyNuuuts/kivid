<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CommentaryRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CommentaryRepository::class)
 */
class Commentary
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"worksheet_read", "dashboard_worksheet_read", "patient_read", "worksheet_doctor_read", "public_worksheet_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"worksheet_read", "worksheet_doctor_read", "public_worksheet_read"})
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=Exercise::class, inversedBy="commentaries")
     */
    private $exercise;

    /**
     * @ORM\ManyToOne(targetEntity=Worksheet::class, inversedBy="commentaries")
     */
    private $worksheet;

    /**
     * @ORM\Column(type="text")
     * @Groups({"worksheet_read", "worksheet_doctor_read", "public_worksheet_read"})
     */
    private $content;

    /**
     * @ORM\ManyToOne(targetEntity=Patient::class, inversedBy="commentaries")
     * @Groups({"worksheet_read", "worksheet_doctor_read"})
     */
    private $patient;

    /**
     * @ORM\ManyToOne(targetEntity=Doctor::class, inversedBy="commentaries")
     * @Groups({"worksheet_read", "patient_read", "dashboard_worksheet_read", "public_worksheet_read"})
     */
    private $doctor;

    /**
     * @ORM\ManyToOne(targetEntity=WorksheetSession::class, inversedBy="commentaries")
     * @ORM\JoinColumn()
     * @Groups({"worksheet_read"})
     */
    private $worksheetSession;

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

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

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

    public function getWorksheet(): ?Worksheet
    {
        return $this->worksheet;
    }

    public function setWorksheet(?Worksheet $worksheet): self
    {
        $this->worksheet = $worksheet;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

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

    public function getDoctor(): ?Doctor
    {
        return $this->doctor;
    }

    public function setDoctor(?Doctor $doctor): self
    {
        $this->doctor = $doctor;

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
}
