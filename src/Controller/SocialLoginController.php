<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

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
     * @Route("/connect/{userType}/{service}", name="app_oauth_connect")
     */
    public function connect(string $userType, string $service): RedirectResponse
    {
        $this->ensureServiceAccepted($service);

        $randomState = bin2hex(random_bytes(32 / 2));
        $stateArray = ['userType' => $userType, 'randomState' => $randomState];
        $stateString = $this->base64UrlEncode(json_encode($stateArray));

        return $this->clientRegistry->getClient($service)->redirect(self::SCOPES[$service], ['state' => $stateString]);
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

    private function base64UrlEncode($inputStr)
    {
        return strtr(base64_encode($inputStr), '+/=', '-_,');
    }
}
