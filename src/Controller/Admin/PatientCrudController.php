<?php

namespace App\Controller\Admin;

use App\Entity\Patient;
use App\Controller\Admin\ConfigureActionsTrait;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;

class PatientCrudController extends AbstractCrudController
{
    use ConfigureActionsTrait;

    public static function getEntityFqcn(): string
    {
        return Patient::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            DateField::new('created_at', 'Créé le')->onlyOnIndex(),
            TextField::new('lastname', 'Nom'),
            TextField::new('firstname', 'Prénom'),
            TextField::new('email', 'Email'),
            DateField::new('birthdate', 'Date de naissance'),
            // ImageField::new('avatar_url', 'Avatar')
            //             ->setTemplatePath('admin/custom_field/image.html.twig')->onlyOnIndex(),
            BooleanField::new('is_verified', 'Verif Email'),
            TextField::new('gender', 'Civilité'),
            AssociationField::new('doctor', 'Praticien'),
            AssociationField::new('subscriptions', 'Abonnement(s)')->onlyOnIndex(),
            AssociationField::new('worksheets', 'Fiche(s)'),
        ];
    }
}
