<?php

namespace App\Controller\FFMKR;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Faker;

/**
 * @Route("/ffmkr")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="app_ffmkr_admin_dashboard")
     */
    public function index(): Response
    {
        return $this->render('admin/ffmkr/dashboard.html.twig');
    }

    /**
     * @Route("/admin/faker", name="app_ffmkr_admin_faker")
     */
    public function faker(): Response
    {        
        $faker = Faker\Factory::create('fr_FR');

        $rows = [];
        for ($i = 0; $i < 90000; $i++) {
            $columnsHeaders = 
            [
                0 => 'numcli',
                1 => 'civility',
                2 => 'lastname',
                3 => 'maidenName',
                4 => 'firstname',
                5 => 'suiteName',
                6 => 'entityName',
                7 => 'streetNumber',
                8 => 'streetName',
                9 => 'streetComplement',
                10 => 'postalCode',
                11 => 'city',
                12 => 'country',
                13 => '',
                14 => 'dateOf',
                15 => '',
                16 => '',
                17 => 'numRpps',
                18 => 'tel',
                19 => '',
                20 => 'mobile',
                21 => 'email',
                22 => '',
                23 => '',
                24 => '',
                25 => '',
                26 => 'birthdate',  
            ];


            $data = [
                0 => uniqid(),
                1 => $faker->numberBetween(1, 4),
                2 => $faker->lastName(),
                3 => '',
                4 => $faker->firstName(),
                5 => $faker->word(),
                6 => $faker->word(),
                7 => $faker->buildingNumber(),
                8 => $faker->streetName(),
                9 => $faker->word(),
                10 => $faker->postcode(),
                11 => $faker->city(),
                12 => $faker->country(),
                13 => '',
                14 => $faker->date('Y'),
                15 => '',
                16 => '',
                17 => $faker->phoneNumber(),
                18 => $faker->phoneNumber(),
                19 => '',
                20 => $faker->phoneNumber(),
                21 => $faker->email(),
                22 => '',
                23 => '',
                24 => '',
                25 => '',
                26 => $faker->date('d/m/Y'),  
            ];

            $rows[$i] = implode(';', $i == 0 ? $columnsHeaders : $data);
        }

        $content = implode("\n", $rows);
        $response = new Response($content);
        $response->headers->set('Content-Type', 'text/csv');

        return $response;

        // dd($faker);
        // on crée 4 auteurs avec noms et prénoms "aléatoires" en français
        // $auteurs = Array();
        // for ($i = 0; $i < 4; $i++) {
        //     $auteurs[$i] = new Auteur();
        //     $auteurs[$i]->setNom($faker->lastName);
        //     $auteurs[$i]->setPrenom($faker->firstName);

        //     $manager->persist($auteurs[$i]);
        // }
        // // nouvelle boucle pour créer des livres

        // $livres = Array();

        // for ($i = 0; $i < 12; $i++) {
        //         $livres[$i] = new Livre();
        //         $livres[$i]->setTitre($faker->sentence($nbWords = 6, $variableNbWords = true));
        //         $livres[$i]->setAnnee($faker->numberBetween($min = 1900, $max = 2020));
        //         $livres[$i]->setAuteur($auteurs[$i % 3]);

        //         $manager->persist($livres[$i]);
        //     }

        //     $manager->flush();

        // return $this->render('admin/ffmkr/dashboard.html.twig');
    }
}
