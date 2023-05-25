<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Entity\Commentary;
use App\Service\StripeService;
use App\Service\SubscriptionService;
use App\Repository\ExerciseRepository;
use App\Repository\WorksheetRepository;
use App\Repository\CommentaryRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\SubscriptionRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\WorksheetSessionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/patient")
 */
class WorksheetController extends AbstractController
{
    private $exerciseRepository;
    private $commentaryRepository;
    private $worksheetRepository;
    private $worksheetSessionRepository;
    private $subscriptionRepository;
    private $em;

    public function __construct(
        ExerciseRepository $exerciseRepository,
        CommentaryRepository $commentaryRepository,
        WorksheetRepository $worksheetRepository,
        WorksheetSessionRepository $worksheetSessionRepository,
        SubscriptionRepository $subscriptionRepository,
        EntityManagerInterface $em
    ) {
        $this->exerciseRepository = $exerciseRepository;
        $this->commentaryRepository = $commentaryRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->worksheetSessionRepository = $worksheetSessionRepository;
        $this->subscriptionRepository = $subscriptionRepository;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/fiche/{worksheetId}/{status}", name="app_patient_worksheet_read", methods={"GET"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function worksheetRead(
        Request $request,
        Patient $patient,
        int $worksheetId = null,
        string $status = null,
        SubscriptionService $subscriptionService,
        StripeService $stripeService
    ): Response {
        if ('success' === $status) {
            $stripeCheckoutSessionId = $request->query->get('session_id');

            $stripeCheckoutSession = $stripeService->retrieveCheckoutSession(
                $stripeCheckoutSessionId
            );

            $stripeSubscription = $stripeService->retrieveSubscription(
                $stripeCheckoutSession->subscription
            );

            $subscriptionExist = $this->subscriptionRepository->findOneBy([
                'stripeSubscriptionId' => $stripeSubscription->id
            ]);

            if (!$subscriptionExist) {
                $subscriptionService->createSubscription(
                    $patient,
                    $stripeSubscription
                );
            }
        }

        if ('success' !== $status) {
            $subscription = $this->subscriptionRepository->findCurrentSubscription($patient);

            if ($subscription) {
                $stripeSubscription = $stripeService->retrieveSubscription(
                    $subscription->getStripeSubscriptionId()
                );
            }
        }

        return $this->render('patient/read_worksheet.html.twig', [
            'patient' => $patient,
            'worksheetId' => $worksheetId,
            'status' => $status,
            'stripeSubPlans' => $subscriptionService->getPlans(),
            'stripeSubscription' => $stripeSubscription ?? null,
            'doctorView' => false,
            'doctor' => null,
        ]);
    }

    /**
     * @Route("/{id}/get/worksheet/{worksheetId}", name="app_patient_get_worksheet", methods={"GET"})
     * @isGranted("IS_OWNER_OR_OWNERDOC", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getWorksheet(Patient $patient, int $worksheetId): JsonResponse
    {
        $worksheet = $this->worksheetRepository->findOneBy(['id' => $worksheetId]);

        return $this->json(
            $worksheet,
            200,
            [],
            ['groups' => 'worksheet_read']
        );
    }

    /**
     * @Route("/{id}/get/worksheets", name="app_patient_get_worksheets", methods={"GET"})
     * @isGranted("IS_OWNER_OR_OWNERDOC", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getWorksheets(Patient $patient): JsonResponse
    {
        $worksheets = $this->worksheetRepository->findBy(['patient' => $patient]);

        return $this->json(
            $worksheets,
            200,
            [],
            ['groups' => 'dashboard_worksheet_read']
        );
    }

    /**
     * @Route("/{id}/get/exercises/{worksheetId}", name="app_patient_get_exercises", methods={"GET"})
     * @isGranted("IS_OWNER_OR_OWNERDOC", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function getExercises(Patient $patient, int $worksheetId): JsonResponse
    {
        $exercises = $this->exerciseRepository->findBy(
            ['worksheet' => $worksheetId],
            ['position' => 'ASC']
        );

        // 15/01/2023 : remove Subscription for read worksheet 15/01/2023
        // $patientHasCurrentSubscription = $this->subscriptionRepository->findCurrentSubscription($patient);

        // if (!$patient->getDoctor()->isGiveFreeAccessPrescri() && !$patientHasCurrentSubscription) {
        //     foreach ($exercises as $key => $exercise) {
        //         if ($key > 1) {
        //             $exercise->getVideo()->setYoutubeId(null)->setUrl('');
        //         }
        //     }
        // }

        return $this->json(
            $exercises,
            200,
            [],
            ['groups' => 'worksheet_read']
        );
    }

    /**
     * @Route("/{id}/complete/exercise", name="app_patient_complete_exercise", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function completeExercise(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('complete_exercise' . $patient->getId(), $data->_token)) {
                $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exerciseId]);

                $exercise->setIsCompleted(true);

                $this->em->flush();

                return $this->json(
                    [
                        'message' => 'Exercice terminé',
                    ],
                    200,
                    [],
                    ['groups' => 'score_read']
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la clôture de l'exercice",
            500
        );
    }

    /**
     * @Route("/{id}/create/commentary", name="app_patient_create_commentary", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function createCommentary(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if ($this->isCsrfTokenValid('create_commentary' . $patient->getId(), $data->_token)) {
                $commentary = $data->commentaryId
                            ? $this->commentaryRepository->findOneBy(['id' => $data->commentaryId])
                            : new Commentary();

                $commentary->setContent($data->commentaryContent);
                $commentary->setCreatedAt(new \DateTimeImmutable());

                if (!$data->commentaryId) {
                    $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exerciseId]);
                    $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);
                    $worksheetSession = $this->worksheetSessionRepository->findOneBy(
                        ['id' => $data->worksheetSessionId]
                    );

                    $commentary->setPatient($patient)
                               ->setExercise($exercise)
                               ->setWorksheet($worksheet)
                               ->setWorksheetSession($worksheetSession)
                    ;
                    $this->em->persist($commentary);
                }

                $this->em->flush();

                return $this->json(
                    ['message' => 'Commentaire créé', 'commentaryId' => $commentary->getId()],
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors de la création du commentaire",
            500
        );
    }
}
