<?php

namespace App\Entity;

use App\Repository\ExerciseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ExerciseRepository::class)
 */
class Exercise
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"worksheet_read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Video::class, inversedBy="exercises")
     * @Groups({"worksheet_read"})
     */
    private $video;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $numberOfRepetitions;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $numberOfSeries;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $option;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $tempo;

    
    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $hold;

    /**
     * @ORM\ManyToOne(targetEntity=Worksheet::class, inversedBy="exercises")
     */
    private $worksheet;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $position;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"worksheet_read"})
     */
    private $isCompleted;

    /**
     * @ORM\OneToMany(targetEntity=ExerciseStat::class, mappedBy="exercise")
     * @Groups({"worksheet_read"})
     */
    private $exerciseStats;

    /**
     * @ORM\OneToMany(targetEntity=Commentary::class, mappedBy="exercise")
     * @Groups({"worksheet_read"})
     */
    private $commentaries;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->isCompleted = false;
        $this->exerciseStats = new ArrayCollection();
        $this->commentaries = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVideo(): ?Video
    {
        return $this->video;
    }

    public function setVideo(?Video $video): self
    {
        $this->video = $video;

        return $this;
    }

    public function getNumberOfRepetitions(): ?int
    {
        return $this->numberOfRepetitions;
    }

    public function setNumberOfRepetitions(?int $numberOfRepetitions): self
    {
        $this->numberOfRepetitions = $numberOfRepetitions;

        return $this;
    }

    public function getNumberOfSeries(): ?int
    {
        return $this->numberOfSeries;
    }

    public function setNumberOfSeries(?int $numberOfSeries): self
    {
        $this->numberOfSeries = $numberOfSeries;

        return $this;
    }

    public function getOption(): ?string
    {
        return $this->option;
    }

    public function setOption(?string $option): self
    {
        $this->option = $option;

        return $this;
    }

    public function getTempo(): ?string
    {
        return $this->tempo;
    }

    public function setTempo(?string $tempo): self
    {
        $this->tempo = $tempo;

        return $this;
    }

    public function getHold(): ?int
    {
        return $this->hold;
    }

    public function setHold(?int $hold): self
    {
        $this->hold = $hold;

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

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(?int $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function __toString()
    {
        return $this->getVideo()->getName();
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
            $exerciseStat->setExercise($this);
        }

        return $this;
    }

    public function removeExerciseStat(ExerciseStat $exerciseStat): self
    {
        if ($this->exerciseStats->removeElement($exerciseStat)) {
            // set the owning side to null (unless already changed)
            if ($exerciseStat->getExercise() === $this) {
                $exerciseStat->setExercise(null);
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
            $commentary->setExercise($this);
        }

        return $this;
    }

    public function removeCommentary(Commentary $commentary): self
    {
        if ($this->commentaries->removeElement($commentary)) {
            // set the owning side to null (unless already changed)
            if ($commentary->getExercise() === $this) {
                $commentary->setExercise(null);
            }
        }

        return $this;
    }
}
