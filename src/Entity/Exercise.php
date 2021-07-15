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
     * @ORM\ManyToMany(targetEntity=Worksheet::class, mappedBy="exercises")
     */
    private $worksheets;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $position;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->worksheets = new ArrayCollection();
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
            $worksheet->addExercise($this);
        }

        return $this;
    }

    public function removeWorksheet(Worksheet $worksheet): self
    {
        if ($this->worksheets->removeElement($worksheet)) {
            $worksheet->removeExercise($this);
        }

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
}
