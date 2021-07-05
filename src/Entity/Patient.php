<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\PatientRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PatientRepository::class)
 */
class Patient extends User
{
    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     * @Groups({"patient_read"})
     */
    private $birthdate;

    /**
     * @ORM\ManyToOne(targetEntity=Doctor::class, inversedBy="patients")
     * @Groups({"patient_read"})
     */
    private $doctor;

    public function __construct()
    {
        parent::__construct(['ROLE_PATIENT']);
    }

    public function getBirthdate(): ?\DateTimeImmutable
    {
        return $this->birthdate;
    }

    public function setBirthdate(?\DateTimeImmutable $birthdate): self
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
        $this->doctor = $doctor;

        return $this;
    }
}
