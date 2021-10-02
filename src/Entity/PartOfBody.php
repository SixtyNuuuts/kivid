<?php

namespace App\Entity;

use App\Repository\PartOfBodyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PartOfBodyRepository::class)
 */
class PartOfBody
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"video_read", "dashboard_worksheet_read", "worksheet_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"video_read", "dashboard_worksheet_read", "worksheet_read", "patient_read"})
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity=Video::class, mappedBy="partOfBodys")
     */
    private $videos;

    /**
     * @ORM\OneToMany(targetEntity=Worksheet::class, mappedBy="partOfBody")
     */
    private $worksheets;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"video_read", "dashboard_worksheet_read", "worksheet_read", "patient_read"})
     */
    private $icon;

    public function __construct()
    {
        $this->videos = new ArrayCollection();
        $this->worksheets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Video[]
     */
    public function getVideos(): Collection
    {
        return $this->videos;
    }

    public function addVideo(Video $video): self
    {
        if (!$this->videos->contains($video)) {
            $this->videos[] = $video;
            $video->addPartOfBody($this);
        }

        return $this;
    }

    public function removeVideo(Video $video): self
    {
        if ($this->videos->removeElement($video)) {
            $video->removePartOfBody($this);
        }

        return $this;
    }

    public function __toString()
    {
        return $this->getName();
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
            $worksheet->setPartOfBody($this);
        }

        return $this;
    }

    public function removeWorksheet(Worksheet $worksheet): self
    {
        if ($this->worksheets->removeElement($worksheet)) {
            // set the owning side to null (unless already changed)
            if ($worksheet->getPartOfBody() === $this) {
                $worksheet->setPartOfBody(null);
            }
        }

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(?string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }
}
