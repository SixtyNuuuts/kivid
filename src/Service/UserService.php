<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Repository\ResetPasswordRequestRepository;
use SymfonyCasts\Bundle\ResetPassword\Model\ResetPasswordToken;
use SymfonyCasts\Bundle\ResetPassword\Exception\ResetPasswordExceptionInterface;
use SymfonyCasts\Bundle\ResetPassword\Util\ResetPasswordCleaner;
use SymfonyCasts\Bundle\ResetPassword\Generator\ResetPasswordTokenGenerator;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Serializer\SerializerInterface;

class UserService
{
    private $mailer;
    private $serializer;
    private $resetPasswordRequestRepository;
    private $tokenGenerator;
    private $resetPasswordCleaner;

    // Le bundle 'ResetPassword' est utilisé dans la création d'un utilisateur
    public function __construct(
        MailerInterface $mailer,
        SerializerInterface $serializer,
        ResetPasswordRequestRepository $resetPasswordRequestRepository,
        ResetPasswordTokenGenerator $generator,
        ResetPasswordCleaner $cleaner
    ) {
        $this->mailer = $mailer;
        $this->serializer = $serializer;
        $this->resetPasswordRequestRepository = $resetPasswordRequestRepository;
        $this->tokenGenerator = $generator;
        $this->resetPasswordCleaner = $cleaner;
    }

    public function getCivility(?string $gender): ?string
    {
        return  $gender ? ("male" === $gender ? 'M. ' : 'Mme ') : null;
    }

    public function getUserName(User $user): string
    {
        $name = $user->getFirstname() || $user->getLastname()
                ? "{$user->getFirstname()} {$user->getLastname()}"
                : $user->getEmail();

        return $this->getCivility($user->getGender()) . $name;
    }

    public function processSendingPasswordPatientCreationEmail(Patient $patient, Doctor $doctor): JsonResponse
    {
        // Le bundle 'ResetPassword' est utilisé pour la génération du token.
        try {
            $passToken = $this->generatePasswordCreationToken($patient);
        } catch (ResetPasswordExceptionInterface $e) {
            return new JsonResponse(
                "Un problème est survenu lors de la génération du token de création 
                de mot de passe du patient {$e->getReason()}",
                500
            );
        }

        $email = (new TemplatedEmail())
            ->from(new Address('contact@kivid.fr', '"Kivid Contact"'))
            ->to($patient->getEmail())
            ->subject("Vous avez été ajouté comme patient par {$this->getUserName($doctor)}")
            ->htmlTemplate('create_password/patient-email.html.twig')
            ->context([
                'passToken' => $passToken,
                'doctor' => $doctor,
            ])
        ;

        $this->mailer->send($email);

        $json = $this->serializer->serialize([
            "message" => "
                <strong>{$this->getUserName($patient)}</strong> 
                a été créé et ajouté à vos patients, 
                Nous lui avons envoyé un email pour qu'il valide son inscription
            ",
            "patient" => $patient
        ], 'json', ['groups' => 'patient_read']);

        return new JsonResponse($json, 200, [], true);
    }

    private function generatePasswordCreationToken(User $user): ResetPasswordToken
    {
        $this->resetPasswordCleaner->handleGarbageCollection();

        // 31536000 : Expiration 1 an
        $expiresAt = new \DateTimeImmutable(sprintf('+%d seconds', 31536000));

        $generatedAt = ($expiresAt->getTimestamp() - 31536000);

        $tokenComponents = $this->tokenGenerator->createToken(
            $expiresAt,
            $this->resetPasswordRequestRepository->getUserIdentifier($user)
        );

        // Le bundle 'ResetPassword' est utilisé pour la persistence du token.
        $passwordResetRequest = $this->resetPasswordRequestRepository->createResetPasswordRequest(
            $user,
            $expiresAt,
            $tokenComponents->getSelector(),
            $tokenComponents->getHashedToken()
        );

        $this->resetPasswordRequestRepository->persistResetPasswordRequest($passwordResetRequest);

        return new ResetPasswordToken(
            $tokenComponents->getPublicToken(),
            $expiresAt,
            $generatedAt
        );
    }
}
