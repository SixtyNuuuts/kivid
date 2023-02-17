<?php

namespace App\Entity;

use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Repository\FFMKRAdhesionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FFMKRAdhesionRepository::class)
 * @UniqueEntity(fields={"numcli"}, message="Il y a déjà un compte qui utilise ce numcli")
 */
class FFMKRAdhesion
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"doctor_read", "ffmkr_adhesion_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"doctor_read", "ffmkr_adhesion_read"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Groups({"doctor_read", "ffmkr_adhesion_read"})
     */
    private $numcli;

    /**
     * @ORM\Column(type="string", length=2, nullable=true)
     */
    private $civility;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"ffmkr_adhesion_read"})
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $maidenName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"ffmkr_adhesion_read"})
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $suiteName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $entityName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $streetNumber;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $streetName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $streetComplement;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $postalCode;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"ffmkr_adhesion_read"})
     */
    private $dateOf;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"ffmkr_adhesion_read"})
     */
    private $numRpps;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $mobile;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"ffmkr_adhesion_read"})
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $birthdate;

    /**
     * @ORM\OneToOne(targetEntity=Doctor::class, mappedBy="FFMKRAdhesion", cascade={"persist", "remove"})
     * @Groups({"ffmkr_adhesion_read"})
     */
    private $doctor;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActive;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->isActive = true;
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getNumcli(): ?string
    {
        return $this->numcli;
    }

    public function setNumcli(string $numcli): self
    {
        $this->numcli = $numcli;

        return $this;
    }

    public function getCivility(): ?string
    {
        return $this->civility;
    }

    public function setCivility(?string $civility): self
    {
        $this->civility = $civility;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastname;
    }

    public function setLastName(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getMaidenName(): ?string
    {
        return $this->maidenName;
    }

    public function setMaidenName(?string $maidenName): self
    {
        $this->maidenName = $maidenName;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getSuiteName(): ?string
    {
        return $this->suiteName;
    }

    public function setSuiteName(?string $suiteName): self
    {
        $this->suiteName = $suiteName;

        return $this;
    }

    public function getEntityName(): ?string
    {
        return $this->entityName;
    }

    public function setEntityName(?string $entityName): self
    {
        $this->entityName = $entityName;

        return $this;
    }

    public function getStreetNumber(): ?string
    {
        return $this->streetNumber;
    }

    public function setStreetNumber(?string $streetNumber): self
    {
        $this->streetNumber = $streetNumber;

        return $this;
    }

    public function getStreetName(): ?string
    {
        return $this->streetName;
    }

    public function setStreetName(?string $streetName): self
    {
        $this->streetName = $streetName;

        return $this;
    }

    public function getStreetComplement(): ?string
    {
        return $this->streetComplement;
    }

    public function setStreetComplement(?string $streetComplement): self
    {
        $this->streetComplement = $streetComplement;

        return $this;
    }

    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    public function setPostalCode(?string $postalCode): self
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(?string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getDateOf(): ?string
    {
        return $this->dateOf;
    }

    public function setDateOf(string $dateOf): self
    {
        $this->dateOf = $dateOf;

        return $this;
    }

    public function getNumRpps(): ?string
    {
        return $this->numRpps;
    }

    public function setNumRpps(?string $numRpps): self
    {
        $this->numRpps = $numRpps;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(?string $tel): self
    {
        $this->tel = $tel;

        return $this;
    }

    public function getMobile(): ?string
    {
        return $this->mobile;
    }

    public function setMobile(?string $mobile): self
    {
        $this->mobile = $mobile;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getBirthdate(): ?string
    {
        return $this->birthdate;
    }

    public function setBirthdate(?string $birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getDoctor(): ?Doctor
    {
        return $this->doctor;
    }

    public function setDoctor(?Doctor $doctor): self
    {
        // unset the owning side of the relation if necessary
        if ($doctor === null && $this->doctor !== null) {
            $this->doctor->setFFMKRAdhesion(null);
        }

        // set the owning side of the relation if necessary
        if ($doctor !== null && $doctor->getFFMKRAdhesion() !== $this) {
            $doctor->setFFMKRAdhesion($this);
        }

        $this->doctor = $doctor;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }
}
