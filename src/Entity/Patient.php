<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\PatientRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=PatientRepository::class)
 */
class Patient extends User
{
    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $birthdate;

    /**
     * @ORM\OneToMany(targetEntity=DoctorPatient::class, mappedBy="patient", orphanRemoval=true)
     */
    private $patientDoctors;

    public function __construct()
    {
        parent::__construct(['ROLE_PATIENT']);
        $this->patientDoctors = new ArrayCollection();
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

    public function isHisDoctor(Doctor $doctor)
    {
        foreach ($this->getPatientDoctors() as $dp) {
            if ($dp->getDoctor() === $doctor) {
                return true;
            }
        }
        return false;
    }

    /**
     * @return Collection|DoctorPatient[]
     */
    public function getPatientDoctors(): Collection
    {
        return $this->patientDoctors;
    }

    public function addPatientDoctor(DoctorPatient $patientDoctor): self
    {
        if (!$this->patientDoctors->contains($patientDoctor)) {
            $this->patientDoctors[] = $patientDoctor;
            $patientDoctor->setPatient($this);
        }

        return $this;
    }

    public function removePatientDoctor(DoctorPatient $patientDoctor): self
    {
        if ($this->patientDoctors->removeElement($patientDoctor)) {
            // set the owning side to null (unless already changed)
            if ($patientDoctor->getPatient() === $this) {
                $patientDoctor->setPatient(null);
            }
        }

        return $this;
    }
}
