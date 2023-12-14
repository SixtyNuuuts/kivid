<?php

namespace App\Controller\Admin;

use App\Entity\Patient;
use App\Controller\Admin\ConfigureActionsTrait;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class PatientCrudController extends AbstractCrudController
{
    use ConfigureActionsTrait;

    public static function getEntityFqcn(): string
    {
        return Patient::class;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('createdAt', 'Créé le')
            ->add('lastname')
            ->add('firstname')
            ->add('email')
            ->add('birthdate')
            ->add('gender')
            ->add('isVerified')
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
            DateField::new('birthdate', 'Date de naissance'),
            TextField::new('gender', 'Civilité')->onlyOnIndex(),
            TextField::new('gender', 'Civilité (renseigner : "male" ou "female")')->onlyOnForms(),
            BooleanField::new('isVerified', 'Verif Email')->setSortable(true),
            AssociationField::new('doctor', 'Praticien'),
            AssociationField::new('subscriptions', 'Abonnement(s)')->onlyOnIndex(),
            AssociationField::new('worksheets', 'Fiche(s)')->onlyOnIndex(),
            BooleanField::new('subscriptionRequired', 'Compte qui nécessite un abonnement ?')->onlyOnForms(),
        ];
    }
}
