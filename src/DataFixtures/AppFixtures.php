<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Tag;
use App\Entity\Video;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Exercise;
use App\Entity\Worksheet;
use App\Entity\Prescription;
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
        $faker = Faker\Factory::create('fr_FR');

        $worksheetArray = [];

        $tagArray = [];

        $tagNames = [
            'Mobilité',
            'Renforcement',
            'Agilité',
            'Réadaptation',
            'Récupération',
            'Rééducation',
            'Réhabilitation',
        ];

        foreach ($tagNames as $tagName) {
            $tag = new Tag();
            $tag->setName($tagName);
            $manager->persist($tag);
            $tagArray[] = $tag;
        };

        for ($wi = 0; $wi < rand(8, 18); $wi++) {
            $worksheet = new Worksheet();

            $worksheet
                ->setTitle($faker->sentence(4))
                ->setDescription($faker->text())
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween()))
            ;

            $randomTags = array_rand($tagArray, rand(2, 3));

            for ($ei = 0; $ei < rand(8, 15); $ei++) {
                $exercise = new Exercise();

                $exercise->setNumberOfRepetitions(rand(8, 15))
                         ->setNumberOfSeries(rand(3, 6))
                ;

                $video = new Video();

                $video->setName($faker->sentence(3))
                    ->setDescription($faker->text())
                    ->setUrl($faker->imageUrl(640, 480, 'animals', true))
                    ->setThumbnailUrl($faker->imageUrl(640, 480, 'animals', true))
                ;

                foreach ($randomTags as $randomTagId) {
                    $video->addTag($tagArray[$randomTagId]);
                };

                $exercise->setVideo($video);

                $manager->persist($video);
                $manager->persist($exercise);

                $worksheet->addExercise($exercise);
            }

            $worksheetArray[] = $worksheet;

            $manager->persist($worksheet);
        }

        for ($ki = 0; $ki < rand(4, 8); $ki++) {
            $kine = new Doctor();

            $kine->setCity($faker->city)
                ->setStreet($faker->streetName)
                ->setEntityName($faker->company)
                ->setDescription($faker->realTextBetween(160, 200, 2))
                ->setEmail("kine{$ki}@mail.com")
                ->setPassword($this->passwordHasher->hashPassword($kine, 'password'))
                ->setFirstname($faker->firstName)
                ->setLastname($faker->lastName)
            ;

            $manager->persist($kine);

            for ($pi = 0; $pi < rand(10, 50); $pi++) {
                $patient = new Patient();

                $patient
                    ->setBirthdate(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-90 years', 'now')))
                    ->setDoctor($kine)
                    ->setEmail("patient{$ki}{$pi}@mail.com")
                    ->setPassword($this->passwordHasher->hashPassword($kine, 'password'))
                    ->setFirstname($faker->firstName)
                    ->setLastname($faker->lastName)
                    ->setIsVerified($faker->boolean())
                ;

                $prescription = new Prescription();
                $prescription->setPatient($patient)
                             ->setDoctor($kine)
                             ->setWorksheet($worksheetArray[array_rand($worksheetArray)])
                             ->setProgression(rand(5, 100))
                             ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween()))
                ;

                $patient->addPrescription($prescription);

                $manager->persist($prescription);
                $manager->persist($patient);
            }
        }

        $manager->flush();
    }
}
