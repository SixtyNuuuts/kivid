<?php

namespace App\Controller\Admin;

use App\Entity\VideoLibrary;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class VideoLibraryCrudController extends AbstractCrudController
{
    use ConfigureActionsTrait;

    public static function getEntityFqcn(): string
    {
        return VideoLibrary::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name', 'Nom'),
            TextField::new('reference', 'Référence'),
        ];
    }
}
