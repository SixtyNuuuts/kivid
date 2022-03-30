<?php

namespace App\Controller\Admin;

use App\Entity\Doctor;
use App\Controller\Admin\ConfigureActionsTrait;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;

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
            DateField::new('createdAt', 'Créé le')->onlyOnIndex()->setSortable(true),
            TextField::new('lastname', 'Nom'),
            TextField::new('firstname', 'Prénom'),
            TextField::new('email', 'Email'),
            TextField::new('numRppsAmeli', 'Numéro RPPS ou Ameli')->setSortable(true),
            TextField::new('entityName', 'Cabinet')->setSortable(true),
            TextField::new('city', 'Ville')->setSortable(true),
            TextField::new('gender', 'Civilité')->onlyOnIndex(),
            TextField::new('gender', 'Civilité (renseigner : "male" ou "female")')->onlyOnForms(),
            AssociationField::new('patients', 'Patient(s)')->onlyOnIndex(),
            AssociationField::new('worksheets', 'Fiche(s)')->onlyOnIndex(),
        ];
    }
}
