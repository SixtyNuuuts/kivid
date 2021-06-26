<?php

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/oauth")
 */
class SocialLoginController extends AbstractController
{
    private const SCOPES = [
        'google' => [],
        'facebook' => ['email'],
    ];
    private ClientRegistry $clientRegistry;

    public function __construct(ClientRegistry $clientRegistry)
    {
        $this->clientRegistry = $clientRegistry;
    }

    /**
     * @Route("/connect/{service}", name="app_oauth_connect")
     */
    public function connect(string $service): RedirectResponse
    {
        $this->ensureServiceAccepted($service);

        return $this->clientRegistry->getClient($service)->redirect(self::SCOPES[$service], ['a' => 1]);
    }

    /**
     * @Route("/check/{service}", name="app_oauth_check")
     */
    public function check(): Response
    {
        return new Response();
    }

    private function ensureServiceAccepted(string $service): void
    {
        if (!in_array($service, array_keys(self::SCOPES))) {
            throw new AccessDeniedException();
        }
    }
}
