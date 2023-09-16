<?php

namespace App\Controller\Admin;

use App\Entity\Doctor;
use App\Controller\Admin\ConfigureActionsTrait;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class DoctorCrudController extends AbstractCrudController
{
    use ConfigureActionsTrait;

    public static function getEntityFqcn(): string
    {
        return Doctor::class;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('createdAt')
            ->add('lastname')
            ->add('firstname')
            ->add('email')
            ->add('numRppsAmeli')
            ->add('entityName')
            ->add('city')
            ->add('gender')
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            NumberField::new('id', 'Id')->onlyOnIndex()->setSortable(true),
            DateField::new('createdAt', 'Créé le')->onlyOnIndex()->setSortable(true),
            TextField::new('lastname', 'Nom'),
            TextField::new('firstname', 'Prénom'),
            TextField::new('email', 'Email'),
            TextField::new('numRppsAmeli', 'Numéro RPPS ou AMELI')->setSortable(true),
            TextField::new('entityName', 'Cabinet')->setSortable(true),
            TextField::new('city', 'Ville')->setSortable(true),
            TextField::new('gender', 'Civilité')->onlyOnIndex(),
            TextField::new('gender', 'Civilité (renseigner : "male" ou "female")')->onlyOnForms(),
            AssociationField::new('patients', 'Patient(s)')->onlyOnIndex(),
            AssociationField::new('worksheets', 'Fiche(s)')->onlyOnIndex(),
            // BooleanField::new('giveFreeAccessPrescri', 'Donner l\'accès gratuit à ses prescriptions ?')->onlyOnForms(),
            BooleanField::new('giveAccessPublicWorksheetGeneration', 'Donner l\'accès à la génération de fiches publiques ?')->onlyOnForms(),
            BooleanField::new('giveAccessAddFreePatient', 'Donner l\'accès à l\'ajout des patients sans praticien ?')->onlyOnForms(),
        ];
    }
}
