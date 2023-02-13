<?php

namespace App\Controller\Admin;

use App\Entity\Video;
use App\Controller\Admin\ConfigureActionsTrait;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class VideoCrudController extends AbstractCrudController
{
    use ConfigureActionsTrait;

    public static function getEntityFqcn(): string
    {
        return Video::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name', 'Nom'),
            TextField::new('youtubeId', 'Id Youtube'),
            ImageField::new('thumbnail_url', 'Vignette')
                        ->setTemplatePath('admin/custom_field/image.html.twig')->onlyOnIndex(),
            TextEditorField::new('description'),
            AssociationField::new('tags', 'Tag(s)'),
            AssociationField::new('options', 'Option(s)'),
            AssociationField::new('partOfBodys', 'Partie(s) du corps'),
            AssociationField::new('videoLibrary', 'Bibliothèque vidéo'),
        ];
    }
}
