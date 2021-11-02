<?php

namespace App\Controller\Patient;

use SymfonyCasts\Bundle\ResetPassword\ResetPasswordHelperInterface;
use SymfonyCasts\Bundle\ResetPassword\Controller\ResetPasswordControllerTrait;
use SymfonyCasts\Bundle\ResetPassword\Exception\ResetPasswordExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class CreatePasswordController extends AbstractController
{
    // Le bundle 'ResetPassword' est utilisé dans la génération du mail "création d'un patient" par le kiné,
    // et lors de la création du mot de passe par ce client.
    use ResetPasswordControllerTrait;

    private $passwordHelper;

    public function __construct(ResetPasswordHelperInterface $passwordHelper)
    {
        $this->passwordHelper = $passwordHelper;
    }

    /**
     * @Route("/create-password/{token}", name="app_create_pass")
     */
    public function createPassword(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        string $token = null
    ): Response {
        if ($token) {
            // We store the token in session and remove it from the URL, to avoid the URL being
            // loaded in a browser and potentially leaking the token to 3rd party JavaScript.
            $this->storeTokenInSession($token);

            return $this->redirectToRoute('app_create_pass');
        }

        $token = $this->getTokenFromSession();
        if (null === $token) {
            throw $this->createNotFoundException(
                'Aucun jeton de création de mot de passe n\'a été trouvé dans l\'URL ou dans la session'
            );
        }

        try {
            $user = $this->passwordHelper->validateTokenAndFetchUser($token);
        } catch (ResetPasswordExceptionInterface $e) {
            return $this->json(
                "Erreur lors du processus de réinitialisation de mot de passe",
                500
            );
        }

        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('patient_create_pass', $data->_token)) {
                // A password reset token should be used only once, remove it.
                $this->passwordHelper->removeResetRequest($token);

                // Hash the plain password, and set it.
                $hashedPassword = $passwordHasher->hashPassword(
                    $user,
                    $data->plainPassword
                );

                $user->setPassword($hashedPassword);

                // email verification ok.
                $user->setIsVerified(true);

                $this->getDoctrine()->getManager()->flush();

                // The session is cleaned up after the password has been changed.
                $this->cleanSessionAfterReset();

                return $this->json(
                    "Votre mot de passe a été créé",
                    200
                );
            }

            return $this->json(
                "Erreur lors du processus de création de mot de passe",
                500
            );
        }


        return $this->render('patient/create_pass/create_pass.html.twig');
    }
}
