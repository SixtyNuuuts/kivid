<?php

namespace App\Entity;

use App\Entity\TagGroup;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\TagRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=TagRepository::class)
 */
class Tag
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"video_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"video_read", "dashboard_worksheet_read"})
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity=Video::class, mappedBy="tags")
     */
    private $videos;
    
    /**
     * @ORM\ManyToOne(targetEntity=TagGroup::class, inversedBy="tags")
     * @Groups({"video_read", "dashboard_worksheet_read"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $tagGroup;

    public function __construct()
    {
        $this->videos = new ArrayCollection();
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
            $video->addTag($this);
        }

        return $this;
    }

    public function removeVideo(Video $video): self
    {
        if ($this->videos->removeElement($video)) {
            $video->removeTag($this);
        }

        return $this;
    }

    public function getTagGroup(): ?TagGroup
    {
        return $this->tagGroup;
    }

    public function setTagGroup(?TagGroup $tagGroup): self
    {
        $this->tagGroup = $tagGroup;

        return $this;
    }

    public function __toString()
    {
        return $this->getName();
    }
}
