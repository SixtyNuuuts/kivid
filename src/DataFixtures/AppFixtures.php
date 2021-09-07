<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Tag;
use App\Entity\Video;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Exercise;
use App\Entity\Worksheet;
use App\Entity\ExerciseStat;
use App\Entity\Prescription;
use App\Entity\WorksheetSession;
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

        $worksheetTemplateArray = [];

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

        $partOfBody = [
            'Genou',
            'Coude',
            'Cheville',
            'Hanche',
            'Epaule',
            'Dos',
        ];

        $videosId = [
            '5ijJ0ofOrE4',
            'UaU62T7v7Bk',
            'vHUOZ5Ee_ak',
            'dm_Ec0egqJY',
            'FQ8ynzO8S7M',
        ];

        $gender = [
            'male',
            'female',
        ];

        $exerciseStatsCriterions = [
            "sensitivity",
            "technical",
            "difficulty",
        ];

        foreach ($tagNames as $tagName) {
            $tag = new Tag();
            $tag->setName($tagName);
            $manager->persist($tag);
            $tagArray[] = $tag;
        };

        $worksheetTempleatePrescriber = new Doctor();

        $worksheetTempleatePrescriber->setEmail("kine-prescriber@mail.com")
            ->setPassword($this->passwordHasher->hashPassword($worksheetTempleatePrescriber, 'password'))
            ->setFirstname($faker->firstName)
            ->setLastname($faker->lastName)
            ->setGender($gender[array_rand($gender)]);
        ;

        $manager->persist($worksheetTempleatePrescriber);

        for ($wi = 0; $wi < rand(5, 15); $wi++) {
            $worksheetTemplate = new Worksheet();

            $worksheetTemplate
                ->setTitle($tagNames[array_rand($tagNames)])
                ->setDescription($faker->text())
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween()))
                ->setPrescriber($worksheetTempleatePrescriber)
                ->setPartOfBody($partOfBody[array_rand($partOfBody)])
                ->setIsTemplate(true)
                ->setDuration(1)
                ->setPerDay(1)
                ->setPerWeek(1)
            ;

            $randomTags = array_rand($tagArray, rand(2, 3));

            for ($ei = 0; $ei < rand(3, 5); $ei++) {
                $exercise = new Exercise();

                $exercise->setNumberOfRepetitions(rand(8, 15))
                         ->setNumberOfSeries(rand(3, 6))
                         ->setPosition($ei)
                ;

                $video = new Video();
                $videoId = $videosId[array_rand($videosId)];

                $video->setName($faker->sentence(3))
                    ->setDescription($faker->text())
                    ->setUrl("https://www.youtube.com/watch?v={$videoId}")
                    ->setYoutubeId($videoId)
                    ->setThumbnailUrl("https://img.youtube.com/vi/{$videoId}/mqdefault.jpg")
                ;

                foreach ($randomTags as $randomTagId) {
                    $video->addTag($tagArray[$randomTagId]);
                };

                $exercise->setVideo($video);

                $manager->persist($video);
                $manager->persist($exercise);

                $worksheetTemplate->addExercise($exercise);
            }

            $worksheetTemplateArray[] = $worksheetTemplate;

            $manager->persist($worksheetTemplate);
        }

        for ($ki = 0; $ki < 1; $ki++) {
            $kine = new Doctor();

            $kine->setCity($faker->city)
                ->setStreet($faker->streetName)
                ->setEntityName($faker->company)
                ->setDescription($faker->realTextBetween(160, 200, 2))
                ->setEmail("kine{$ki}@mail.com")
                ->setPassword($this->passwordHasher->hashPassword($kine, 'password'))
                ->setFirstname($faker->firstName)
                ->setLastname($faker->lastName)
                ->setGender($gender[array_rand($gender)]);
            ;

            for ($wii = 0; $wii < rand(1, 2); $wii++) {
                $kine->addWorksheet($worksheetTemplateArray[array_rand($worksheetTemplateArray)]);
            }

            $manager->persist($kine);

            for ($pi = 0; $pi < 1; $pi++) {
                $patient = new Patient();

                $patient
                    ->setBirthdate(
                        \DateTimeImmutable::createFromMutable(
                            $faker->dateTimeBetween('-90 years', '-20 years')
                        )
                    )
                    ->setAddRequestDoctor(true)
                    ->setDoctor($kine)
                    ->setEmail("patient{$ki}{$pi}@mail.com")
                    ->setPassword($this->passwordHasher->hashPassword($kine, 'password'))
                    ->setFirstname($faker->firstName)
                    ->setLastname($faker->lastName)
                    ->setIsVerified($faker->boolean())
                    ->setGender($gender[array_rand($gender)])
                ;

                for ($wpi = 0; $wpi < 2; $wpi++) {
                    $worksheetForPrescription = $worksheetTemplateArray[array_rand($worksheetTemplateArray)];
                    $worksheetForPrescription->setDuration(26)
                                             ->setPerDay(1)
                                             ->setPerWeek(7)
                    ;

                    $prescription = new Prescription();
                    $prescription->setPatient($patient)
                        ->setDoctor($kine)
                        ->setWorksheet($worksheetForPrescription)
                        ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween()))
                    ;

                    $randomStartDate = $faker->dateTimeBetween('-6 months', '-6 months');

                    for (
                        $ws = 1; $ws <= $worksheetForPrescription->getDuration()
                                      * $worksheetForPrescription->getPerWeek()
                                      * $worksheetForPrescription->getPerDay(); $ws++
                    ) {
                        $worksheetSession = new WorksheetSession();

                        $worksheetSession->setPrescription($prescription)
                                         ->setExecOrder($ws);

                        $worksheetSession->setIsCompleted(true);

                        $worksheetSessionStartDate = new \DateTime();
                        $worksheetSessionStartDate->setTimestamp($randomStartDate->getTimestamp());
                        $worksheetSession->setStartAt($worksheetSessionStartDate);

                        $inc = 1;

                        foreach ($worksheetForPrescription->getExercises() as $exercise) {
                            $exercise->setIsCompleted(true);

                            foreach ($exerciseStatsCriterions as $criterion) {
                                $exerciseStat = new ExerciseStat();

                                $exerciseStat->setCriterion($criterion)
                                             ->setExercise($exercise)
                                             ->setWorksheetSession($worksheetSession);

                                $exerciseStatDoneDate = new \DateTime();

                                $exerciseStatDoneDate->setTimestamp(
                                    $randomStartDate->getTimestamp() + $inc++ * 150
                                );

                                $exerciseStat->setDoneAt($exerciseStatDoneDate)
                                             ->setRating(rand(1, 5));

                                $manager->persist($exerciseStat);
                            }
                        }

                        $worksheetSessionDeadlineDate = new \DateTime();
                        $worksheetSessionDeadlineDate->setTimestamp($randomStartDate->getTimestamp() + 86400);
                        $worksheetSession->setDeadlineAt($worksheetSessionDeadlineDate);

                        $randomStartDate = $worksheetSessionDeadlineDate;

                        $manager->persist($worksheetSession);
                    }

                    $patient->addPrescription($prescription);
                    $manager->persist($prescription);
                }

                $manager->persist($patient);
            }
        }

        $manager->flush();
    }
}
