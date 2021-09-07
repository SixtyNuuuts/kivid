<?php

namespace App\Entity;

use App\Repository\WorksheetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=WorksheetRepository::class)
 */
class Worksheet
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"worksheet_read", "prescription_read", "exercise_stats_read", "patient_read", "patient_prescription_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"worksheet_read", "prescription_read", "patient_read", "exercise_stats_read", "patient_prescription_read"})
     */
    private $title;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"worksheet_read", "prescription_read"})
     */
    private $description;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"worksheet_read"})
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=Exercise::class, mappedBy="worksheet", orphanRemoval=true)
     * @Groups({"worksheet_read", "prescription_read", "patient_read", "patient_prescription_read"})
     */
    private $exercises;

    /**
     * @ORM\OneToMany(targetEntity=Prescription::class, mappedBy="worksheet")
     */
    private $prescriptions;

    /**
     * @ORM\ManyToOne(targetEntity=Doctor::class, inversedBy="worksheets")
     * @Groups({"worksheet_read"})
     */
    private $prescriber;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"worksheet_read", "prescription_read", "exercise_stats_read", "patient_read", "patient_prescription_read"})
     */
    private $partOfBody;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read", "prescription_read", "patient_read", "patient_prescription_read"})
     */
    private $duration;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read", "prescription_read", "patient_read", "patient_prescription_read"})
     */
    private $perDay;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read", "prescription_read", "patient_read", "patient_prescription_read"})
     */
    private $perWeek;

    /**
     * @ORM\OneToMany(targetEntity=Commentary::class, mappedBy="worksheet")
     * @Groups({"worksheet_read", "prescription_read"})
     */
    private $commentaries;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isTemplate;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->exercises = new ArrayCollection();
        $this->prescriptions = new ArrayCollection();
        $this->isTemplate = false;
        $this->duration = 1;
        $this->perDay = 1;
        $this->perWeek = 1;
        $this->commentaries = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
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
     * @return Collection|Exercise[]
     */
    public function getExercises(): Collection
    {
        return $this->exercises;
    }

    public function addExercise(Exercise $exercise): self
    {
        if (!$this->exercises->contains($exercise)) {
            $this->exercises[] = $exercise;
            $exercise->setWorksheet($this);
        }

        return $this;
    }

    public function removeExercise(Exercise $exercise): self
    {
        if ($this->exercises->removeElement($exercise)) {
            // set the owning side to null (unless already changed)
            if ($exercise->getWorksheet() === $this) {
                $exercise->setWorksheet(null);
            }
        }

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
            $prescription->setWorksheet($this);
        }

        return $this;
    }

    public function removePrescription(Prescription $prescription): self
    {
        if ($this->prescriptions->removeElement($prescription)) {
            // set the owning side to null (unless already changed)
            if ($prescription->getWorksheet() === $this) {
                $prescription->setWorksheet(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->getTitle();
    }

    public function getPrescriber(): ?Doctor
    {
        return $this->prescriber;
    }

    public function setPrescriber(?Doctor $prescriber): self
    {
        $this->prescriber = $prescriber;

        return $this;
    }

    public function getIsTemplate(): ?bool
    {
        return $this->isTemplate;
    }

    public function setIsTemplate(?bool $isTemplate): self
    {
        $this->isTemplate = $isTemplate;

        return $this;
    }

    public function getPartOfBody(): ?string
    {
        return $this->partOfBody;
    }

    public function setPartOfBody(?string $partOfBody): self
    {
        $this->partOfBody = $partOfBody;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(?int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    public function getPerDay(): ?int
    {
        return $this->perDay;
    }

    public function setPerDay(?int $perDay): self
    {
        $this->perDay = $perDay;

        return $this;
    }

    public function getPerWeek(): ?int
    {
        return $this->perWeek;
    }

    public function setPerWeek(?int $perWeek): self
    {
        $this->perWeek = $perWeek;

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
            $commentary->setWorksheet($this);
        }

        return $this;
    }

    public function removeCommentary(Commentary $commentary): self
    {
        if ($this->commentaries->removeElement($commentary)) {
            // set the owning side to null (unless already changed)
            if ($commentary->getWorksheet() === $this) {
                $commentary->setWorksheet(null);
            }
        }

        return $this;
    }
}
