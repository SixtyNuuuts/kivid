<?php

namespace App\Entity;

use App\Repository\WorksheetSessionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=WorksheetSessionRepository::class)
 */
class WorksheetSession
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"worksheet_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $startAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $deadlineAt;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $isInProgress;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $isCompleted;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $execOrder;

    /**
     * @ORM\OneToMany(targetEntity=ExerciseStat::class, mappedBy="worksheetSession", orphanRemoval=true)
     */
    private $exerciseStats;

    /**
     * @ORM\ManyToOne(targetEntity=Worksheet::class, inversedBy="worksheetSessions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $worksheet;

    public function __construct()
    {
        $this->isInProgress = false;
        $this->isCompleted = false;
        $this->exerciseStats = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStartAt(): ?\DateTimeInterface
    {
        return $this->startAt;
    }

    public function setStartAt(?\DateTimeInterface $startAt): self
    {
        $this->startAt = $startAt;

        return $this;
    }

    public function getDeadlineAt(): ?\DateTimeInterface
    {
        return $this->deadlineAt;
    }

    public function setDeadlineAt(?\DateTimeInterface $deadlineAt): self
    {
        $this->deadlineAt = $deadlineAt;

        return $this;
    }

    public function getIsInProgress(): ?bool
    {
        return $this->isInProgress;
    }

    public function setIsInProgress(?bool $isInProgress): self
    {
        $this->isInProgress = $isInProgress;

        return $this;
    }

    public function getIsCompleted(): ?bool
    {
        return $this->isCompleted;
    }

    public function setIsCompleted(?bool $isCompleted): self
    {
        $this->isCompleted = $isCompleted;

        return $this;
    }

    public function getExecOrder(): ?int
    {
        return $this->execOrder;
    }

    public function setExecOrder(?int $execOrder): self
    {
        $this->execOrder = $execOrder;

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
            $exerciseStat->setWorksheetSession($this);
        }

        return $this;
    }

    public function removeExerciseStat(ExerciseStat $exerciseStat): self
    {
        if ($this->exerciseStats->removeElement($exerciseStat)) {
            // set the owning side to null (unless already changed)
            if ($exerciseStat->getWorksheetSession() === $this) {
                $exerciseStat->setWorksheetSession(null);
            }
        }

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
}
