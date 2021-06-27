<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\Doctor;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use App\Security\Exception\UserAuthenticatedException;
use App\Security\Exception\UserOauthNotFoundException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;
use Symfony\Component\Security\Http\Util\TargetPathTrait;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use KnpU\OAuth2ClientBundle\Security\Authenticator\OAuth2Authenticator;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\PassportInterface;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

abstract class AbstractSocialAuthenticator extends OAuth2Authenticator
{
    use TargetPathTrait;

    protected $serviceName = '';
    private $clientRegistry;
    protected $em;
    private $urlGenerator;
    private $tokenStorage;

    public function __construct(
        ClientRegistry $clientRegistry,
        EntityManagerInterface $em,
        UrlGeneratorInterface $urlGenerator,
        TokenStorageInterface $tokenStorage
    ) {
        $this->clientRegistry = $clientRegistry;
        $this->em = $em;
        $this->urlGenerator = $urlGenerator;
        $this->tokenStorage = $tokenStorage;
    }

    public function supports(Request $request): bool
    {
        if ('' === $this->serviceName) {
            throw new \Exception("Vous devez définir une propriété \$serviceName (par exemple 'google', 'facebook')");
        }

        return 'app_oauth_check' === $request->attributes->get('_route')
             && $request->get('service') === $this->serviceName;
    }

    public function authenticate(Request $request): PassportInterface
    {
        $client = $this->clientRegistry->getClient($this->serviceName);
        $accessToken = $this->fetchAccessToken($client);
        $userType = json_decode($this->base64UrlDecode($request->get('state')))->userType;

        return new SelfValidatingPassport(
            new UserBadge($accessToken, function () use ($accessToken, $client, $userType) {
                $resourceOwner = $client->fetchUserFromToken($accessToken);

                $user = $this->getCurrentUser();

                if ($user) {
                    throw new UserAuthenticatedException($user, $resourceOwner);
                }

                $user = $this->getUserFromResourceOwner($resourceOwner, $userType);

                if (!$user) {
                    throw new UserOauthNotFoundException($resourceOwner);
                }

                return $user;
            })
        );
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): RedirectResponse
    {
        if ($exception instanceof UserOauthNotFoundException) {
            return new RedirectResponse($this->urlGenerator->generate('app_register'));
        }

        if ($exception instanceof UserAuthenticatedException) {
            /** @var User $user */
            $user = $exception->getUser();

            if ($user instanceof Doctor) {
                return new RedirectResponse(
                    $this->urlGenerator->generate('app_doctor_dashboard', ['id' => $user->getId()])
                );
            }

            return new RedirectResponse(
                $this->urlGenerator->generate('app_patient_dashboard', ['id' => $user->getId()])
            );
        }

        if ($request->hasSession()) {
            $request->getSession()->set(Security::AUTHENTICATION_ERROR, $exception);
        }

        return new RedirectResponse($this->urlGenerator->generate('app_login'));
    }

    public function onAuthenticationSuccess(
        Request $request,
        TokenInterface $token,
        string $firewallName
    ): RedirectResponse {
        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }
        /** @var User $user */
        $user = $token->getUser();

        if ($user instanceof Doctor) {
            return new RedirectResponse(
                $this->urlGenerator->generate('app_doctor_dashboard', ['id' => $user->getId()])
            );
        }

        return new RedirectResponse(
            $this->urlGenerator->generate('app_patient_dashboard', ['id' => $user->getId()])
        );
    }

    protected function getUserFromResourceOwner(ResourceOwnerInterface $resourceOwner, string $userType): ?User
    {
        return null;
    }

    private function getCurrentUser(): ?User
    {
        if (!$token = $this->tokenStorage->getToken()) {
            return null;
        }

        $user = $token->getUser();

        if (!\is_object($user)) {
            return null;
        }

        if (!$user instanceof User) {
            return null;
        }

        return $user;
    }

    private function base64UrlDecode($inputStr)
    {
        return base64_decode(strtr($inputStr, '-_,', '+/='));
    }
}
