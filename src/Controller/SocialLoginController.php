<?php

namespace App\Controller;

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
    private const USER_TYPE = [
        'patient' => 'patient',
        'doctor' => 'doctor',
    ];
    private $clientRegistry;

    public function __construct(ClientRegistry $clientRegistry)
    {
        $this->clientRegistry = $clientRegistry;
    }

    /**
     * @Route("/connect/{userType}/{service}", name="app_oauth_connect")
     */
    public function connect(string $userType, string $service): RedirectResponse
    {
        $this->ensureUserTypeAccepted($userType);
        $this->ensureServiceAccepted($service);

        return $this->clientRegistry->getClient($service)->redirect(
            self::SCOPES[$service],
            ['state' => $this->stateStringGeneration($userType)]
        );
    }

    /**
     * @Route("/check/{service}", name="app_oauth_check")
     */
    public function check(): Response
    {
        return new Response();
    }

    private function ensureUserTypeAccepted(string $userType): void
    {
        if (!in_array($userType, array_keys(self::USER_TYPE))) {
            throw new AccessDeniedException();
        }
    }

    private function ensureServiceAccepted(string $service): void
    {
        if (!in_array($service, array_keys(self::SCOPES))) {
            throw new AccessDeniedException();
        }
    }

    private function base64UrlEncode($inputStr): string
    {
        return strtr(base64_encode($inputStr), '+/=', '-_,');
    }

    private function stateStringGeneration($userType): string
    {
        $randomState = bin2hex(random_bytes(32 / 2));
        $stateArray = ['userType' => $userType, 'randomState' => $randomState];
        $stateString = $this->base64UrlEncode(json_encode($stateArray));

        return $stateString;
    }
}
