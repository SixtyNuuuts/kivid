<?php

namespace App\Controller\Admin;

use App\Entity\Doctor;
use App\Controller\Admin\ConfigureActionsTrait;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;

class DoctorCrudController extends AbstractCrudController
{
    use ConfigureActionsTrait;

    public static function getEntityFqcn(): string
    {
        return Doctor::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            DateField::new('created_at', 'Créé le')->onlyOnIndex(),
            TextField::new('lastname', 'Nom'),
            TextField::new('firstname', 'Prénom'),
            TextField::new('email', 'Email'),
            TextField::new('num_rpps_ameli', 'Numéro RPPS ou Ameli'),
            // ImageField::new('avatar_url', 'Avatar')
            //             ->setTemplatePath('admin/custom_field/image.html.twig')->onlyOnIndex(),
            TextField::new('city', 'Ville'),
            TextField::new('entity_name', 'Cabinet'),
            TextField::new('gender', 'Civilité'),
            AssociationField::new('patients', 'Patient(s)'),
            AssociationField::new('worksheets', 'Fiche(s)'),
        ];
    }
}
