<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\DoctorRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=DoctorRepository::class)
 */
class Doctor extends User
{
    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"doctor_read"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("e")
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"doctor_read"})
     */
    private $street;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"doctor_read"})
     */
    private $entityName;

    /**
     * @ORM\OneToMany(targetEntity=Patient::class, mappedBy="doctor")
     * @Groups({"doctor_read"})
     */
    private $patients;

    public function __construct()
    {
        parent::__construct(['ROLE_DOCTOR']);
        $this->patients = new ArrayCollection();
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
     * @return Collection|Patient[]
     */
    public function getPatients(): Collection
    {
        return $this->patients;
    }

    public function addPatient(Patient $patient): self
    {
        if (!$this->patients->contains($patient)) {
            $this->patients[] = $patient;
            $patient->setDoctor($this);
        }

        return $this;
    }

    public function removePatient(Patient $patient): self
    {
        if ($this->patients->removeElement($patient)) {
            // set the owning side to null (unless already changed)
            if ($patient->getDoctor() === $this) {
                $patient->setDoctor(null);
            }
        }

        return $this;
    }
}
