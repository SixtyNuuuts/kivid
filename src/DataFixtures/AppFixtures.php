<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Doctor;
use App\Entity\Patient;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        for ($ki = 0; $ki < rand(1, 15); $ki++) {
            $kine = new Doctor();

            $kine->setCity($faker->city())
                ->setStreet($faker->streetName())
                ->setEntityName($faker->company())
                ->setDescription($faker->realTextBetween(160, 200, 2))
                ->setEmail("kine{$ki}@mail.com")
                ->setPassword($this->passwordHasher->hashPassword($kine, 'password'))
                ->setFirstname($faker->firstname())
                ->setLastname($faker->lastname())
            ;

            $manager->persist($kine);

            for ($pi = 0; $pi < rand(1, 5); $pi++) {
                $patient = new Patient();

                $patient
                    ->setBirthdate(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-90 years', 'now')))
                    ->addDoctor($kine)
                    ->setEmail("patient{$ki}{$pi}@mail.com")
                    ->setPassword($this->passwordHasher->hashPassword($kine, 'password'))
                    ->setFirstname($faker->firstname())
                    ->setLastname($faker->lastname())
                ;

                $manager->persist($patient);
            }
        }

        $manager->flush();
    }
}
