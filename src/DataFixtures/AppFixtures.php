<?php

namespace App\DataFixtures;

use App\Entity\PartOfBody;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $partsOfBodyDetails = [
            ["name" => "Pied", "icon" => "pied"],
            ["name" => "Cheville", "icon" => "pied"],
            ["name" => "Jambe", "icon" => "jambe"],
            ["name" => "Cuisse", "icon" => "jambe"],
            ["name" => "Genou", "icon" => "jambe"],
            ["name" => "Bras", "icon" => "bras"],
            ["name" => "Coude", "icon" => "bras"],
            ["name" => "Avant-Bras", "icon" => "bras"],
            ["name" => "Main", "icon" => "main"],
            ["name" => "Épaule", "icon" => "epaule"],
            ["name" => "Dos", "icon" => "dos"],
            ["name" => "Dorsales", "icon" => "dos"],
            ["name" => "Cervicales", "icon" => "cervicales"],
            ["name" => "Lombaires", "icon" => "lombaires"] ,
            ["name" => "Bassin", "icon" => "lombaires"],
            ["name" => "Hanche", "icon" => "lombaires"],
            ["name" => "Thoracique", "icon" => "thoracique"],
            ["name" => "Abdominal", "icon" => "thoracique"],
        ];
        foreach ($partsOfBodyDetails as $partOfBodyDetails) {
            $partOfBody = new PartOfBody();
            $partOfBody->setName($partOfBodyDetails["name"]);
            $partOfBody->setIcon($partOfBodyDetails["icon"]);
            $manager->persist($partOfBody);
        };

        $manager->flush();
    }
}
