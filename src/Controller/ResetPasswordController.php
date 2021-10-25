<?php

namespace App\Controller;

use App\Entity\Doctor;
use App\Entity\Patient;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use SymfonyCasts\Bundle\ResetPassword\ResetPasswordHelperInterface;
use SymfonyCasts\Bundle\ResetPassword\Controller\ResetPasswordControllerTrait;
use SymfonyCasts\Bundle\ResetPassword\Exception\ResetPasswordExceptionInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * @Route("/reset-password")
 */
class ResetPasswordController extends AbstractController
{
    use ResetPasswordControllerTrait;

    private $resetPasswordHelper;

    public function __construct(ResetPasswordHelperInterface $resetPasswordHelper)
    {
        $this->resetPasswordHelper = $resetPasswordHelper;
    }

    /**
     * Display & process form to request a password reset.
     *
     * @Route("", name="app_forgot_password_request")
     */
    public function request(Request $request, MailerInterface $mailer): Response
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('reset_pass_request', $data->_token)) {
                $this->processSendingPasswordResetEmail(
                    $data->email,
                    $mailer
                );

                return $this->json(
                    "S'il existe un compte correspondant à votre e-mail, un e-mail vient d'être envoyé 
                    contenant un lien que vous pouvez utiliser pour réinitialiser votre mot de passe",
                    200
                );
            }

            return $this->json(
                "Erreur lors du processus de réinitialisation de mot de passe",
                500
            );
        }

        return $this->render('reset_password/request.html.twig');
    }

    /**
     * Validates and process the reset URL that the user clicked in their email.
     *
     * @Route("/reset/{token}", name="app_reset_password")
     */
    public function reset(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        string $token = null
    ): Response {
        if ($token) {
            // We store the token in session and remove it from the URL, to avoid the URL being
            // loaded in a browser and potentially leaking the token to 3rd party JavaScript.
            $this->storeTokenInSession($token);

            return $this->redirectToRoute('app_reset_password');
        }

        $token = $this->getTokenFromSession();
        if (null === $token) {
            throw $this->createNotFoundException(
                'Aucun jeton de réinitialisation de mot de passe n\'a été trouvé dans l\'URL ou dans la session.'
            );
        }

        try {
            $user = $this->resetPasswordHelper->validateTokenAndFetchUser($token);
        } catch (ResetPasswordExceptionInterface $e) {
            return $this->json(
                "Erreur lors du processus de réinitialisation de mot de passe",
                500
            );
        }


        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('reset_pass', $data->_token)) {
                // A password reset token should be used only once, remove it.
                $this->resetPasswordHelper->removeResetRequest($token);

                // Hash the plain password, and set it.
                $hashedPassword = $passwordHasher->hashPassword(
                    $user,
                    $data->plainPassword
                );

                $user->setPassword($hashedPassword);

                $this->getDoctrine()->getManager()->flush();

                // The session is cleaned up after the password has been changed.
                $this->cleanSessionAfterReset();

                return $this->json(
                    "Votre mot de passe a été réinitialisé",
                    200
                );
            }

            return $this->json(
                "Erreur lors du processus de réinitialisation de mot de passe",
                500
            );
        }

        return $this->render('reset_password/reset.html.twig');
    }

    private function processSendingPasswordResetEmail(string $emailFormData, MailerInterface $mailer): void
    {
        $user = $this->getDoctrine()->getRepository(Patient::class)->findOneBy(['email' => $emailFormData])
             ?? $this->getDoctrine()->getRepository(Doctor::class)->findOneBy(['email' => $emailFormData]);


        $resetToken = null;

        if ($user) {
            try {
                $resetToken = $this->resetPasswordHelper->generateResetToken($user);
            } catch (ResetPasswordExceptionInterface $e) {
                // return $this->redirectToRoute('app_check_email');
            }
        }

        if ($resetToken) {
            $email = (new TemplatedEmail())
                ->from(new Address('contact@kivid.fr', '"Kivid Contact"'))
                ->to($user->getEmail())
                ->subject('Votre demande de réinitialisation de mot de passe')
                ->htmlTemplate('reset_password/email.html.twig')
                ->context([
                    'resetToken' => $resetToken,
                ])
            ;

            $mailer->send($email);

            // Store the token object in session for retrieval in check-email route.
            $this->setTokenObjectInSession($resetToken);
        }
    }
}
