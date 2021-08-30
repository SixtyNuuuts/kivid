<?php

namespace App\Controller\Admin;

use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;

trait ConfigureActionsTrait
{
    public function configureActions(Actions $actions): Actions
    {
        return $actions
            // in PHP 7.4 and newer you can use arrow functions
            ->update(
                Crud::PAGE_INDEX,
                Action::EDIT,
                fn (Action $action) => $action->setIcone('fas fa-pen')
                                              ->setLabel(false)
                                              ->addCssClass('btn btn-outline-primary')
            )
            ->update(
                Crud::PAGE_INDEX,
                Action::DELETE,
                fn (Action $action) => $action->setIcone('fas fa-trash-alt')
                                              ->setLabel(false)
                                              ->addCssClass('btn btn-outline-danger')
            )
        ;
    }
}
