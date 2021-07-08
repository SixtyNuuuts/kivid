<?php

namespace App\Controller\Patient;

use App\Form\PasswordFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use SymfonyCasts\Bundle\ResetPassword\ResetPasswordHelperInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use SymfonyCasts\Bundle\ResetPassword\Controller\ResetPasswordControllerTrait;
use SymfonyCasts\Bundle\ResetPassword\Exception\ResetPasswordExceptionInterface;

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
                'Aucun jeton de création de mot de passe n\'a été trouvé dans l\'URL ou dans la session.'
            );
        }

        try {
            $user = $this->passwordHelper->validateTokenAndFetchUser($token);
        } catch (ResetPasswordExceptionInterface $e) {
            $this->addFlash('danger', sprintf(
                'Un problème est survenu lors de la création de votre mot de passe - %s',
                $e->getReason()
            ));

            return $this->redirectToRoute('app_home');
        }

        // The token is valid.
        $form = $this->createForm(PasswordFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // A password creation token should be used only once, remove it.
            $this->passwordHelper->removeResetRequest($token);

            // Hash the plain password, and set it.
            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $form->get('plainPassword')->getData()
            );

            $user->setPassword($hashedPassword);

            // email verification ok.
            $user->setIsVerified(true);

            $this->getDoctrine()->getManager()->flush();

            // The session is cleaned up after the password has been created.
            $this->cleanSessionAfterReset();

            $this->addFlash('success', 'Votre mot de passe a été créé.');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('patient/create_pass/form.html.twig', [
            'createpassForm' => $form->createView(),
        ]);
    }
}
