<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\Patient;
use Symfony\Component\Mime\Address;
use App\Repository\PatientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ResetPasswordRequestRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use SymfonyCasts\Bundle\ResetPassword\Model\ResetPasswordToken;
use SymfonyCasts\Bundle\ResetPassword\Util\ResetPasswordCleaner;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use SymfonyCasts\Bundle\ResetPassword\Generator\ResetPasswordTokenGenerator;
use SymfonyCasts\Bundle\ResetPassword\Exception\ResetPasswordExceptionInterface;

/**
 * @Route("/kine")
 */
class ManagePatientController extends AbstractController
{
    private $patientRepository;
    private $mailer;
    private $tokenGenerator;
    private $resetPasswordRequestRepository;
    private $resetPasswordCleaner;
    private $em;

    // Le bundle 'ResetPassword' est utilisé dans la génération du mail "création d'un patient" par le kiné,
    // et lors de la création du mot de passe par ce client.
    public function __construct(
        PatientRepository $patientRepository,
        MailerInterface $mailer,
        ResetPasswordRequestRepository $resetPasswordRequestRepository,
        ResetPasswordTokenGenerator $generator,
        ResetPasswordCleaner $cleaner,
        EntityManagerInterface $em
    ) {
        $this->patientRepository = $patientRepository;
        $this->mailer = $mailer;
        $this->tokenGenerator = $generator;
        $this->resetPasswordRequestRepository = $resetPasswordRequestRepository;
        $this->resetPasswordCleaner = $cleaner;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/patients/{trigger}", name="app_doctor_patients", methods={"GET"})
     */
    public function patientsList(Doctor $doctor, string $trigger = ""): Response
    {
        return $this->render('doctor/patients_list.html.twig', [
            'doctor' => $doctor,
            'trigger' => $trigger,
        ]);
    }

    /**
     * @Route("/{id}/get/patients", name="app_doctor_get_patients", methods={"GET"})
     */
    public function getPatients(Doctor $doctor): JsonResponse
    {
        return $this->json(
            $this->patientRepository->findBy(['doctor' => $doctor]),
            200,
            [],
            ['groups' => 'patient_read']
        );
    }

    /**
     * @Route("/{id}/create/patient", name="app_doctor_create_patient", methods={"POST"})
     */
    public function createPatient(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_patient' . $doctor->getId(), $data->_token)) {
                $patient = new Patient();
                $patient->setFirstname($data->firstname);
                $patient->setLastname($data->lastname);
                $patient->setGender($data->gender);
                $patient->setEmail($data->email);
                $patient->setDoctor($doctor);

                $this->em->persist($patient);

                try {
                    $this->em->flush();
                } catch (UniqueConstraintViolationException $e) {
                    return $this->json(
                        'Nous n\'avons pas pu créer le patient, car son email est déjà utilisé par un membre.',
                        500,
                    );
                }

                return $this->processSendingPasswordCreationEmail($patient, $doctor);
            }
        }
        return $this->json(
            'Nous n\'avons pas pu créer le patient, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/add/patient", name="app_doctor_add_patient", methods={"POST"})
     */
    public function addPatient(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('add_patient' . $doctor->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $data->patient_id]);

                $doctor->addPatient($patient);

                $this->em->flush();

                $gender = $patient->getGender() ? ("male" === $patient->getGender() ? 'M.' : 'Mme') : '';

                return $this->json(
                    "<strong>{$gender} {$patient->getFirstname()} {$patient->getLastname()}</strong> 
                     a bien été ajouté à votre liste.",
                    200,
                );
            }
        }

        return $this->json(
            'Nous n\'avons pas pu ajouter le patient à votre liste, veuillez réessayer ultérieurement.',
            500,
        );
    }

    /**
     * @Route("/{id}/remove/patient", name="app_doctor_remove_patient", methods={"POST"})
     */
    public function removePatient(Request $request, Doctor $doctor): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('remove_patient' . $doctor->getId(), $data->_token)) {
                $patient = $this->patientRepository->findOneBy(['id' => $data->patient_id]);

                if ($doctor->getPatients()->contains($patient)) {
                    $doctor->removePatient($patient);

                    $this->em->flush();

                    $gender = $patient->getGender() ? ("male" === $patient->getGender() ? 'M.' : 'Mme') : '';

                    return $this->json(
                        "<strong>{$gender} {$patient->getFirstname()} {$patient->getLastname()}</strong> 
                        a bien été retiré de votre liste.",
                        200,
                    );
                }
            }
        }

        return $this->json(
            'Nous n\'avons pas pu retirer le patient de votre liste, veuillez réessayer ultérieurement.',
            500,
        );
    }

    private function processSendingPasswordCreationEmail(Patient $patient, Doctor $doctor): JsonResponse
    {
        // Le bundle 'ResetPassword' est utilisé pour la génération du token.
        try {
            $passToken = $this->generatePasswordCreationToken($patient);
        } catch (ResetPasswordExceptionInterface $e) {
            return $this->json(
                "Un problème est survenu lors de la génération du token de création de mot 
                de passe du patient {$e->getReason()}",
                500,
            );
        }

        $email = (new TemplatedEmail())
            ->from(new Address('contact@kivid.fr', '"Kivid Contact"'))
            ->to($patient->getEmail())
            ->subject("Vous avez été ajouté comme patient par {$doctor->getFirstname()} {$doctor->getLastname()}")
            ->htmlTemplate('patient/create_pass/email.html.twig')
            ->context([
                'passToken' => $passToken,
                'doctor' => $doctor,
            ])
        ;

        $this->mailer->send($email);

        return $this->json(
            ["message" => "<strong>{$patient->getFirstname()} {$patient->getLastname()}</strong> 
            a été créé et ajouté à vos patients, 
            Nous lui avons envoyé un email pour qu'il valide son inscription.", "patient" => $patient],
            200,
            [],
            ['groups' => 'patient_read']
        );
    }

    public function generatePasswordCreationToken(Patient $patient): ResetPasswordToken
    {
        $this->resetPasswordCleaner->handleGarbageCollection();

        // 604800 : 7 jours
        $expiresAt = new \DateTimeImmutable(sprintf('+%d seconds', 604800));

        $generatedAt = ($expiresAt->getTimestamp() - 604800);

        $tokenComponents = $this->tokenGenerator->createToken(
            $expiresAt,
            $this->resetPasswordRequestRepository->getUserIdentifier($patient)
        );

        // Le bundle 'ResetPassword' est utilisé pour la persistence du token.
        $passwordResetRequest = $this->resetPasswordRequestRepository->createResetPasswordRequest(
            $patient,
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
