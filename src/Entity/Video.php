<?php

namespace App\Entity;

use App\Repository\VideoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=VideoRepository::class)
 */
class Video
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"worksheet_read", "video_read", "public_worksheet_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"worksheet_read", "video_read", "public_worksheet_read"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"worksheet_read", "video_read", "dashboard_worksheet_read", "public_worksheet_read"})
     */
    private $thumbnailUrl;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\ManyToMany(targetEntity=Tag::class, inversedBy="videos")
     * @Groups({"video_read", "dashboard_worksheet_read"})
     */
    private $tags;

    /**
     * @ORM\ManyToMany(targetEntity=Option::class, inversedBy="videos")
     * @Groups({"video_read", "worksheet_read"})
     */
    private $options;

    /**
    * @ORM\ManyToMany(targetEntity=PartOfBody::class, inversedBy="videos")
    * @Groups({"video_read", "dashboard_worksheet_read", "worksheet_read"})
    */
    private $partOfBodys;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"worksheet_read", "video_read", "public_worksheet_read"})
     */
    private $youtubeId;

    /**
     * @ORM\OneToMany(targetEntity=Exercise::class, mappedBy="video", orphanRemoval=true)
     */
    private $exercises;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=VideoLibrary::class, inversedBy="videos")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"video_read", "dashboard_worksheet_read"})
     */
    private $videoLibrary;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->tags = new ArrayCollection();
        $this->options = new ArrayCollection();
        $this->partOfBodys = new ArrayCollection();
        $this->exercises = new ArrayCollection();
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

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getThumbnailUrl(): ?string
    {
        return $this->thumbnailUrl;
    }

    public function setThumbnailUrl(string $thumbnailUrl): self
    {
        $this->thumbnailUrl = $thumbnailUrl;

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

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        $this->tags->removeElement($tag);

        return $this;
    }

    /**
     * @return Collection|Option[]
     */
    public function getOptions(): Collection
    {
        return $this->options;
    }

    public function addOption(Option $option): self
    {
        if (!$this->options->contains($option)) {
            $this->options[] = $option;
        }

        return $this;
    }

    public function removeOption(Option $option): self
    {
        $this->options->removeElement($option);

        return $this;
    }

    /**
         * @return Collection|PartOfBody[]
         */
    public function getPartOfBodys(): Collection
    {
        return $this->partOfBodys;
    }

    public function addPartOfBody(PartOfBody $partOfBody): self
    {
        if (!$this->partOfBodys->contains($partOfBody)) {
            $this->partOfBodys[] = $partOfBody;
        }

        return $this;
    }

    public function removePartOfBody(PartOfBody $partOfBody): self
    {
        $this->partOfBodys->removeElement($partOfBody);

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
            $exercise->setVideo($this);
        }

        return $this;
    }

    public function removeExercise(Exercise $exercise): self
    {
        if ($this->exercises->removeElement($exercise)) {
            // set the owning side to null (unless already changed)
            if ($exercise->getVideo() === $this) {
                $exercise->setVideo(null);
            }
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

    public function getYoutubeId(): ?string
    {
        return $this->youtubeId;
    }

    public function setYoutubeId(?string $youtubeId): self
    {
        $this->youtubeId = $youtubeId;

        return $this;
    }

    public function getVideoLibrary(): ?VideoLibrary
    {
        return $this->videoLibrary;
    }

    public function setVideoLibrary(?VideoLibrary $videoLibrary): self
    {
        $this->videoLibrary = $videoLibrary;

        return $this;
    }
}
