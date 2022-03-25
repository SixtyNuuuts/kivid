<?php

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;

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
     * @Route("/connect/{userType}/{service}/{doctorId}/{doctorNumRppsAmeli}", name="app_oauth_connect")
     */
    public function connect(string $userType, string $service, int $doctorId = 0, string $doctorNumRppsAmeli = 'nc'): RedirectResponse
    {
        $this->ensureUserTypeAccepted($userType);
        $this->ensureServiceAccepted($service);

        return $this->clientRegistry->getClient($service)->redirect(
            self::SCOPES[$service],
            ['state' => $this->stateStringGeneration(
                $userType,
                [
                    'doctorId' => $doctorId,
                    'doctorNumRppsAmeli' => $doctorNumRppsAmeli,
                ]
            )]
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

    private function base64UrlEncode(string $inputStr): string
    {
        return strtr(base64_encode($inputStr), '+/=', '-_,');
    }

    private function stateStringGeneration(string $userType, array $data): string
    {
        $randomState = bin2hex(random_bytes(32 / 2));
        $stateArray = [
            'userType' => $userType,
            'data' => $data,
            'randomState' => $randomState
        ];
        $stateString = $this->base64UrlEncode(json_encode($stateArray));

        return $stateString;
    }
}
