<?php

namespace App\Controller;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mime\Address;

class HelpSupportController extends AbstractController
{
    /**
     * @Route("/support", name="app_support", methods={"GET", "POST"})
     * @isGranted("IS_AUTHENTICATED_FULLY")
     */
    public function userSupport(
        Request $request,
        MailerInterface $mailer
    ): Response {
        $user = $this->getUser();
        $userType = null;
        
        if ($this->isGranted('ROLE_PATIENT')) {
            $userType = 'patient';
        }

        if ($this->isGranted('ROLE_DOCTOR')) {
            $userType = 'praticien';
        }

        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('support_contact' . $user->getId(), $data->_token)) {
                $email = (new TemplatedEmail())
                ->from(new Address($user->getEmail(), "{$user->getFirstname()} {$user->getLastname()}}"))
                ->to('contact@kivid.fr')
                ->subject($data->contactSubject)
                ->htmlTemplate('help-support/contact_email.html.twig')
                ->context([
                    'patient' => "{$user->getFirstname()} {$user->getLastname()} ({$userType})",
                    'contactEmail' => $user->getEmail(),
                    'contactSubject' => $data->contactSubject,
                    'contactMessage' => $data->contactMessage,
                ])
                ;

                $mailer->send($email);

                return $this->json(
                    "Votre message a bien été envoyé, l'équipe KIVID vous contactera dans les plus brefs délais.",
                    200,
                );
            }
        }

        return $this->render("help-support/contact.html.twig", ['currentUser' => $user]);
    }
}
