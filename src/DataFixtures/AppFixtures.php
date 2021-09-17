<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Tag;
use App\Entity\Score;
use App\Entity\Video;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Exercise;
use App\Entity\Worksheet;
use App\Entity\ExerciseStat;
use App\Entity\WorksheetSession;
use App\Service\NotificationService;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $passwordHasher;
    private $notificationService;

    public function __construct(
        UserPasswordHasherInterface $passwordHasher,
        NotificationService $notificationService
    ) {
        $this->passwordHasher = $passwordHasher;
        $this->notificationService = $notificationService;
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

        $partOfBody = [
            'Genou',
            'Coude',
            'Cheville',
            'Hanche',
            'Epaule',
            'Dos',
        ];

        $videosId = [
            'tQj9cNQ1mfU',
            'iWtFLj6yV1I',
            'NFf2ZD1X6lM',
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

        $worksheetTempleateCreator = new Doctor();

        $worksheetTempleateCreator->setEmail("kine-creator@mail.com")
            ->setPassword($this->passwordHasher->hashPassword($worksheetTempleateCreator, 'password'))
            ->setFirstname($faker->firstName)
            ->setLastname($faker->lastName)
            ->setGender($gender[array_rand($gender)]);
        ;

        $manager->persist($worksheetTempleateCreator);

        for ($wi = 0; $wi < rand(5, 15); $wi++) {
            $worksheet = new Worksheet();

            $worksheet
                ->setTitle($tagNames[array_rand($tagNames)])
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween()))
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
                    ->setThumbnailUrl("https://img.youtube.com/vi/{$videoId}/maxresdefault.jpg")
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
                ->setGender($gender[array_rand($gender)])
            ;

            $kine->addWorksheet($worksheetArray[array_rand($worksheetArray)]);

            for ($wii = 0; $wii < rand(1, 2); $wii++) {
                $kine->addWorksheet($worksheetArray[array_rand($worksheetArray)]);
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
                    $worksheetForPrescription = $worksheetArray[$wpi];
                    $worksheetForPrescription->setDuration(26)
                                             ->setPerDay(1)
                                             ->setPerWeek(7)
                                             ->setPatient($patient)
                                             ->setDoctor($kine)
                    ;

                    $randomStartDate = $faker->dateTimeBetween('-6 months', '-6 months');

                    for (
                        $ws = 1; $ws <= $worksheetForPrescription->getDuration()
                                      * $worksheetForPrescription->getPerWeek()
                                      * $worksheetForPrescription->getPerDay(); $ws++
                    ) {
                        $worksheetSession = new WorksheetSession();

                        $worksheetSession->setExecOrder($ws);

                        $worksheetSession->setIsCompleted(true)
                                         ->setWorksheet($worksheetForPrescription);


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
                                             ->setWorksheetSession($worksheetSession)
                                             ->setWorksheet($worksheetForPrescription);

                                $exerciseStatDoneDate = new \DateTime();

                                $exerciseStatDoneDate->setTimestamp(
                                    $randomStartDate->getTimestamp() + $inc++ * 150
                                );

                                $exerciseStat->setDoneAt($exerciseStatDoneDate)
                                             ->setRating(rand(1, 10));

                                $manager->persist($exerciseStat);
                            }

                            $score = new Score();

                            $score->setPatient($patient)
                                  ->setLabel('exercise_completed')
                                  ->setPoints(30)
                            ;

                            $manager->persist($score);
                        }

                        $worksheetSessionEndDate = new \DateTime();
                        $worksheetSessionEndDate->setTimestamp($randomStartDate->getTimestamp() + 86400);
                        $worksheetSession->setEndAt($worksheetSessionEndDate);

                        $randomStartDate = $worksheetSessionEndDate;

                        $manager->persist($worksheetSession);
                        $manager->persist($worksheetForPrescription);
                    }
                }

                for ($wpei = 1; $wpei < 3; $wpei++) {
                    $prescription = new Worksheet();
                    $prescription->setDuration(1)
                                ->setPerDay(48 * $wpei)
                                ->setPerWeek(7)
                                ->setPatient($patient)
                                ->setDoctor($kine)
                                ->setTitle($tagNames[array_rand($tagNames)])
                                ->setCreatedAt(new \DateTimeImmutable())
                                ->setPartOfBody($partOfBody[array_rand($partOfBody)])
                    ;

                    $this->notificationService->createPrescriptionNotification($prescription, $patient);

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
                            ->setThumbnailUrl("https://img.youtube.com/vi/{$videoId}/maxresdefault.jpg")
                        ;

                        $exercise->setVideo($video);

                        $manager->persist($video);
                        $manager->persist($exercise);

                        $prescription->addExercise($exercise);
                    }

                    $this->notificationService->createAcceptDoctorNotification($patient, $kine);
                    $this->notificationService->createSelectDoctorNotification($patient, $kine);
                    $this->notificationService->createDeclineDoctorNotification($patient, $kine);
                    $this->notificationService->createScoreRankNotification('Super Patient', $patient);
                    $this->notificationService->createTimingWorksheetNotification($patient);

                    $manager->persist($prescription);
                }

                $this->notificationService->createAddPatientNotification($kine, $patient);

                $manager->persist($patient);
            }
        }

        $manager->flush();
    }
}
