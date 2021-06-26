<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\Doctor;
use Doctrine\ORM\EntityManagerInterface;
use League\OAuth2\Client\Token\AccessToken;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use KnpU\OAuth2ClientBundle\Client\OAuth2Client;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use League\OAuth2\Client\Token\AccessTokenInterface;
use App\Security\Exception\UserAuthenticatedException;
use App\Security\Exception\UserOauthNotFoundException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;
use Symfony\Component\Security\Http\Util\TargetPathTrait;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use KnpU\OAuth2ClientBundle\Security\Authenticator\SocialAuthenticator;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

abstract class AbstractSocialAuthenticator extends SocialAuthenticator
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

        return 'app_oauth_check' === $request->attributes->get('_route') && $request->get('service') === $this->serviceName;
    }

    public function start(Request $request, AuthenticationException $authException = null): RedirectResponse
    {
        return new RedirectResponse($this->urlGenerator->generate('app_login'));
    }

    public function getCredentials(Request $request): AccessTokenInterface
    {
        return $this->fetchAccessToken($this->getClient());
    }

    /**
     * @param AccessToken $credentials
     */
    public function getUser($credentials, UserProviderInterface $userProvider): ?User
    {
        $resourceOwner = $this->getResourceOwnerFromCredentials($credentials);

        $user = $this->getCurrentUser();

        if ($user) {
            throw new UserAuthenticatedException($user, $resourceOwner);
        }

        $user = $this->getUserFromResourceOwner($resourceOwner);

        if (null === $user) {
            throw new UserOauthNotFoundException($resourceOwner);
        }

        return $user;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): RedirectResponse
    {
        if ($exception instanceof UserOauthNotFoundException) {
            return new RedirectResponse($this->urlGenerator->generate('app_register'));
        }

        if ($exception instanceof UserAuthenticatedException) {
            return new RedirectResponse($this->urlGenerator->generate('app_home'));
            // return new RedirectResponse($this->urlGenerator->generate('app_user_edit'));
        }

        if ($request->hasSession()) {
            $request->getSession()->set(Security::AUTHENTICATION_ERROR, $exception);
        }

        return new RedirectResponse($this->urlGenerator->generate('app_login'));
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): RedirectResponse
    {
        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        $user = $token->getUser();

        if ($user instanceof Doctor) {
            return new RedirectResponse($this->urlGenerator->generate('app_doctor_dashboard'));
        }

        return new RedirectResponse($this->urlGenerator->generate('app_patient_dashboard'));
    }

    protected function getResourceOwnerFromCredentials(AccessToken $credentials): ResourceOwnerInterface
    {
        return $this->getClient()->fetchUserFromToken($credentials);
    }

    protected function getUserFromResourceOwner(ResourceOwnerInterface $resourceOwner): ?User
    {
        return null;
    }

    protected function getClient(): OAuth2Client
    {
        /** @var OAuth2Client $client */
        $client = $this->clientRegistry->getClient($this->serviceName);

        return $client;
    }

    public function getCurrentUser(): ?User
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
}
