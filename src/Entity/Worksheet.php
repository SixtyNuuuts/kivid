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
     * @Groups({"worksheet_read", "dashboard_worksheet_read", "patient_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"worksheet_read", "dashboard_worksheet_read", "patient_read"})
     */
    private $title;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"dashboard_worksheet_read", "patient_read"})
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=Exercise::class, mappedBy="worksheet", orphanRemoval=true)
     * @Groups({"dashboard_worksheet_read"})
     */
    private $exercises;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read", "dashboard_worksheet_read"})
     */
    private $duration;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read", "dashboard_worksheet_read"})
     */
    private $perDay;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read", "dashboard_worksheet_read"})
     */
    private $perWeek;

    /**
     * @ORM\OneToMany(targetEntity=Commentary::class, mappedBy="worksheet")
     * @Groups({"dashboard_worksheet_read"})
     */
    private $commentaries;

    /**
     * @ORM\OneToMany(targetEntity=WorksheetSession::class, mappedBy="worksheet", orphanRemoval=true)
     */
    private $worksheetSessions;

    /**
     * @ORM\ManyToOne(targetEntity=Doctor::class, inversedBy="worksheets")
     * @Groups({"dashboard_worksheet_read"})
     */
    private $doctor;

    /**
     * @ORM\ManyToOne(targetEntity=Patient::class, inversedBy="worksheets")
     * @Groups({"dashboard_worksheet_read"})
     */
    private $patient;

    /**
     * @ORM\OneToMany(targetEntity=ExerciseStat::class, mappedBy="worksheet")
     * @Groups({"dashboard_worksheet_read"})
     */
    private $exerciseStats;

    /**
     * @ORM\ManyToOne(targetEntity=PartOfBody::class, inversedBy="worksheets")
     * @Groups({"worksheet_read", "dashboard_worksheet_read", "patient_read"})
     */
    private $partOfBody;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->exercises = new ArrayCollection();
        $this->duration = 1;
        $this->perDay = 1;
        $this->perWeek = 1;
        $this->commentaries = new ArrayCollection();
        $this->worksheetSessions = new ArrayCollection();
        $this->exerciseStats = new ArrayCollection();
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

    public function __toString()
    {
        return $this->getTitle();
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
            $worksheetSession->setWorksheet($this);
        }

        return $this;
    }

    public function removeWorksheetSession(WorksheetSession $worksheetSession): self
    {
        if ($this->worksheetSessions->removeElement($worksheetSession)) {
            // set the owning side to null (unless already changed)
            if ($worksheetSession->getWorksheet() === $this) {
                $worksheetSession->setWorksheet(null);
            }
        }

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

    public function getPatient(): ?Patient
    {
        return $this->patient;
    }

    public function setPatient(?Patient $patient): self
    {
        $this->patient = $patient;

        return $this;
    }

    /**
     * @return Collection|ExerciseStat[]
     */
    public function getExerciseStats(): Collection
    {
        return $this->exerciseStats;
    }

    public function addExerciseStat(ExerciseStat $exerciseStat): self
    {
        if (!$this->exerciseStats->contains($exerciseStat)) {
            $this->exerciseStats[] = $exerciseStat;
            $exerciseStat->setWorksheet($this);
        }

        return $this;
    }

    public function removeExerciseStat(ExerciseStat $exerciseStat): self
    {
        if ($this->exerciseStats->removeElement($exerciseStat)) {
            // set the owning side to null (unless already changed)
            if ($exerciseStat->getWorksheet() === $this) {
                $exerciseStat->setWorksheet(null);
            }
        }

        return $this;
    }

    public function getPartOfBody(): ?PartOfBody
    {
        return $this->partOfBody;
    }

    public function setPartOfBody(?PartOfBody $partOfBody): self
    {
        $this->partOfBody = $partOfBody;

        return $this;
    }
}
