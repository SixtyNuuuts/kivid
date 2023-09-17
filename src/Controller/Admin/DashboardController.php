<?php

namespace App\Controller\Admin;

use App\Entity\Tag;
use App\Entity\Video;
use App\Entity\Doctor;
use App\Entity\Option;
use App\Entity\Patient;
use App\Entity\TagGroup;
use App\Entity\PartOfBody;
use App\Entity\VideoLibrary;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
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
    private $patientRepository;
    private $doctorRepository;

    public function __construct(
        PatientRepository $patientRepository,
        DoctorRepository $doctorRepository
    ) {
        $this->patientRepository = $patientRepository;
        $this->doctorRepository = $doctorRepository;
    }

    /**
     * @Route("/dashboard", name="app_admin_dashboard")
     */
    public function index(): Response
    {
        return $this->render('admin/dashboard.html.twig', [
            'countAllPatients' => $this->patientRepository->countAllPatients(),
            'countAllDoctors' => $this->doctorRepository->countAllDoctors(),
        ]);
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
        yield MenuItem::linkToCrud('Patients', 'fas fa-user', Patient::class);
        yield MenuItem::linkToCrud('Praticiens', 'fas fa-user-nurse', Doctor::class);
        yield MenuItem::linkToCrud('Tags', 'fas fa-tags', Tag::class);
        yield MenuItem::linkToCrud('Tags Groupes', 'fas fa-tags', TagGroup::class);
        yield MenuItem::linkToCrud('Options', 'fas fa-list-ul', Option::class);
        yield MenuItem::linkToCrud('Parties du corps', 'fas fa-child', PartOfBody::class);
        yield MenuItem::linkToCrud('Vidéos', 'fab fa-youtube', Video::class);
        yield MenuItem::linkToCrud('Bibliothèques vidéo', 'fab fa-stack-overflow', VideoLibrary::class);
    }
}
