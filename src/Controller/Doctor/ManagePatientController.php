<?php

namespace App\Controller\Doctor;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Form\CreatePatientFormType;
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
use Symfony\Component\HttpFoundation\RedirectResponse;
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
     * @Route("/{id}/patients", name="app_doctor_patients", methods={"GET"})
     */
    public function patientList(Doctor $doctor): Response
    {
        $patients = $this->patientRepository->findBy([], ['isVerified' => 'DESC']);

        $createPatientForm = $this->createForm(CreatePatientFormType::class);

        $createPatientFormView = $this->renderView('doctor/_form_create_patient.html.twig', [
            'form' => $createPatientForm->createView(),
            'doctor' => $doctor,
        ]);

        $addPatientFormView = $this->renderView('doctor/_form_add_remove_common.html.twig', [
            'actionRoute' => 'app_doctor_add_patient',
            'tokenName' => 'add_patient',
            'classBtnColor' => 'vs-button--primary',
            'doctor' => $doctor,
        ]);

        $removePatientFormView = $this->renderView('doctor/_form_add_remove_common.html.twig', [
            'actionRoute' => 'app_doctor_remove_patient',
            'tokenName' => 'remove_patient',
            'classBtnColor' => 'vs-button--danger',
            'doctor' => $doctor,
        ]);

        return $this->render('doctor/patient_list.html.twig', [
            'doctor' => $doctor,
            'createPatientForm' => $createPatientFormView,
            'addPatientForm' => $addPatientFormView,
            'removePatientForm' => $removePatientFormView,
            'allPatients' => $patients,
        ]);
    }

    /**
     * @Route("/{id}/create/patient", name="app_doctor_create_patient", methods={"POST"})
     */
    public function createPatient(Request $request, Doctor $doctor): RedirectResponse
    {
        $form = $this->createForm(CreatePatientFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $patient = new Patient();
            $patient->setFirstname($data['firstname']);
            $patient->setLastname($data['lastname']);
            $patient->setEmail($data['email']);
            $patient->setDoctor($doctor);

            $this->em->persist($patient);

            try {
                $this->em->flush();
            } catch (UniqueConstraintViolationException $e) {
                $this->addFlash(
                    'danger',
                    'Nous n\'avons pas pu créer le patient car son email est déjà utilisé par un membre.'
                );

                return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
            }

            return $this->processSendingPasswordCreationEmail($patient, $doctor);
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu créer le patient, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/add/patient", name="app_doctor_add_patient", methods={"POST"})
     */
    public function addPatient(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('add_patient' . $doctor->getId(), $request->request->get('_token'))) {
            $patient = $this->patientRepository->findOneBy(['id' => $request->request->get('_id')]);

            $doctor->addPatient($patient);

            $this->em->flush();

            $this->addFlash(
                'success',
                "<strong>{$patient->getFirstname()} {$patient->getLastname()}</strong> 
                a bien été ajouté à votre liste."
            );

            return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu ajouter le patient à votre liste, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
    }

    /**
     * @Route("/{id}/remove/patient", name="app_doctor_remove_patient", methods={"POST"})
     */
    public function removePatient(Request $request, Doctor $doctor): RedirectResponse
    {
        if ($this->isCsrfTokenValid('remove_patient' . $doctor->getId(), $request->request->get('_token'))) {
            $patient = $this->patientRepository->findOneBy(['id' => $request->request->get('_id')]);

            if ($doctor->getPatients()->contains($patient)) {
                $doctor->removePatient($patient);

                $this->em->flush();

                $this->addFlash(
                    'success',
                    "<strong>{$patient->getFirstname()} {$patient->getLastname()}</strong> 
                    a bien été retiré de votre liste."
                );

                return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
            }
        }

        $this->addFlash(
            'danger',
            'Erreur : Nous n\'avons pas pu retirer le patient de votre liste, veuillez réessayer ultérieurement.'
        );

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
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
            ['groups' => 'doctor_read']
        );
    }

    private function processSendingPasswordCreationEmail(Patient $patient, Doctor $doctor): RedirectResponse
    {
        // Le bundle 'ResetPassword' est utilisé pour la génération du token.
        try {
            $passToken = $this->generatePasswordCreationToken($patient);
        } catch (ResetPasswordExceptionInterface $e) {
            $this->addFlash('danger', sprintf(
                'Un problème est survenu lors de la génération du token de création de mot de passe du patient - %s',
                $e->getReason()
            ));

            return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
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

        $this->addFlash(
            'success',
            "<strong>{$patient->getFirstname()} {$patient->getLastname()}</strong> 
            a été créé et ajouté à vos patients, 
            Nous lui avons envoyé un email pour qu'il valide son inscription."
        );

        return $this->redirectToRoute('app_doctor_patients', ['id' => $doctor->getId()]);
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
