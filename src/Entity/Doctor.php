<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\DoctorRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=DoctorRepository::class)
 */
class Doctor extends User
{
    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $street;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $entityName;

    /**
     * @ORM\OneToMany(targetEntity=DoctorPatient::class, mappedBy="doctor", orphanRemoval=true)
     */
    private $doctorPatients;

    public function __construct()
    {
        parent::__construct(['ROLE_DOCTOR']);
        $this->doctorPatients = new ArrayCollection();
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

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(?string $street): self
    {
        $this->street = $street;

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

    /**
     * @return Collection|DoctorPatient[]
     */
    public function getDoctorPatients(): Collection
    {
        return $this->doctorPatients;
    }

    public function addDoctorPatient(DoctorPatient $doctorPatient): self
    {
        if (!$this->doctorPatients->contains($doctorPatient)) {
            $this->doctorPatients[] = $doctorPatient;
            $doctorPatient->setDoctor($this);
        }

        return $this;
    }

    public function removeDoctorPatient(DoctorPatient $doctorPatient): self
    {
        if ($this->doctorPatients->removeElement($doctorPatient)) {
            // set the owning side to null (unless already changed)
            if ($doctorPatient->getDoctor() === $this) {
                $doctorPatient->setDoctor(null);
            }
        }

        return $this;
    }
}
