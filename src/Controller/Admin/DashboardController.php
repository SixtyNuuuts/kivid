<?php

namespace App\Controller\Admin;

use App\Entity\Tag;
use App\Entity\Video;
use App\Entity\Option;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

/**
 * @Route("/admin")
 */
class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/dashboard", name="app_admin_dashboard")
     */
    public function index(): Response
    {
        return $this->render('admin/dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Admin Kivid')
            ->setFaviconPath('img/favicon.ico')
        ;
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('Accueil', 'fa fa-home');
        yield MenuItem::linkToCrud('Tags', 'fas fa-tags', Tag::class);
        yield MenuItem::linkToCrud('Options', 'fas fa-list-ul', Option::class);
        yield MenuItem::linkToCrud('Vidéos', 'fab fa-youtube', Video::class);
    }
}
