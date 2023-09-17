<?php

namespace App\Controller;

use App\Repository\DoctorRepository;
use Symfony\Component\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Controller\RedirectFromIsGrantedTrait;

class HomeController extends AbstractController
{
    use RedirectFromIsGrantedTrait;

    /**
     * @Route("/", name="app_home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    /**
     * @Route("/conditions-utilisation", name="app_conditions_utilisation")
     */
    public function conditionsUtilisation(): Response
    {
        return $this->render('home/conditions-utilisation.html.twig');
    }

    /**
     * @Route("/politique-confidentialite", name="app_politique-confidentialite")
     */
    public function politiqueConfidentialite(): Response
    {
        return $this->render('home/politique-confidentialite.html.twig');
    }

    /**
     * @Route("/cgv", name="app_cgv")
     */
    public function cgv(): Response
    {
        return $this->render('home/cgv.html.twig');
    }

    /**
     * @Route("/get/doctors", name="app_get_doctors", methods={"GET"})
     */
    public function getDoctors(Request $request, DoctorRepository $doctorRepository)
    {
        if ($request->isXmlHttpRequest()) {
            return $this->json($doctorRepository->findAll(), 200, [], ['groups' => 'doctor_read']);
        } else {
            if ($this->getUser()) {
                return $this->redirectFromIsGranted();
            }
            else {
                return $this->redirectToRoute('app_home');
            }
        } 
    }

    /**
     * @Route("/contact", name="app_contact", methods={"POST"})
     */
    public function contact(Request $request, MailerInterface $mailer): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('contact', $data->_token)) {
                $email = (new TemplatedEmail())
                ->from(new Address($data->email, "{$data->firstname} {$data->lastname}"))
                ->to('contact@kivid.fr')
                ->subject("Demande de praticien")
                ->htmlTemplate('home/contact_email.html.twig')
                ->context([
                    'patient' => "{$data->firstname} {$data->lastname}",
                    'contactTel' => $data->contactTel,
                    'contactEmail' => $data->email,
                    'contactChoice' => $data->contactChoice,
                ])
                ;

                $mailer->send($email);

                return $this->json(
                    "Votre demande a été envoyée, l'équipe KIVID vous contactera dans les plus brefs délais",
                    200,
                );
            }
        }
        return $this->json(
            "Une erreur s'est produite lors de l'envoi du message",
            500,
        );
    }
}
