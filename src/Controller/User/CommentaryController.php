<?php

namespace App\Controller\User;

use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Commentary;
use App\Entity\Worksheet;
use App\Repository\CommentaryRepository;
use App\Repository\DoctorRepository;
use App\Repository\PatientRepository;
use App\Repository\ExerciseRepository;
use App\Repository\WorksheetRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CommentaryController extends AbstractController
{
    private $patientRepository;
    private $doctorRepository;
    private $exerciseRepository;
    private $worksheetRepository;
    private $commentaryRepository;
    private $em;

    public function __construct(
        PatientRepository $patientRepository,
        DoctorRepository $doctorRepository,
        ExerciseRepository $exerciseRepository,
        WorksheetRepository $worksheetRepository,
        CommentaryRepository $commentaryRepository,
        EntityManagerInterface $entityManagerInterface
    ) {
        $this->patientRepository = $patientRepository;
        $this->doctorRepository = $doctorRepository;
        $this->exerciseRepository = $exerciseRepository;
        $this->worksheetRepository = $worksheetRepository;
        $this->commentaryRepository = $commentaryRepository;
        $this->em = $entityManagerInterface;
    }

    /**
     * @Route("/{userType}/{userId}/create/commentary", name="app_user_create_commentary", methods={"POST"})
     */
    // public function createCommentary(
    //     Request $request,
    //     string $userType,
    //     int $userId
    // ): JsonResponse {
    //     if ($request->isMethod('post')) {
    //         $data = json_decode($request->getContent());

    //         if ($this->isCsrfTokenValid('create_commentary' . $userId, $data->_token)) {
    //             $exercise = $this->exerciseRepository->findOneBy(['id' => $data->exerciseId]);
    //             $worksheet = $this->worksheetRepository->findOneBy(['id' => $data->worksheetId]);

    //             $repository = $this->patientRepository;

    //             if ('doctor' === $userType) {
    //                 $repository = $this->doctorRepository;
    //             }

    //             $user = $repository->findOneById($userId);

    //             $commentary = new Commentary();

    //             $commentary->setContent($data->content)
    //                        ->setExercise($exercise)
    //                        ->setWorksheet($worksheet)
    //             ;

    //             if ($user instanceof Patient) {
    //                 $commentary->setPatient($user);
    //             }

    //             if ($user instanceof Doctor) {
    //                 $commentary->setDoctor($user);
    //             }

    //             $this->em->persist($commentary);

    //             $this->em->flush();

    //             return $this->json(
    //                 'Le commentaire a été enregistré',
    //                 200,
    //             );
    //         }
    //     }

    //     return $this->json(
    //         'Nous n\'avons pas pu créer le commentaire, veuillez réessayer ultérieurement.',
    //         500,
    //     );
    // }

    /**
     * @Route("/worksheet/{id}/get/commentaries-count", name="app_patient_get_commentaries_count", methods={"GET"})
     */
    // public function getExerciseStats(Worksheet $worksheet): JsonResponse
    // {
    //     return $this->json(
    //         $this->commentaryRepository->countCommentariesByWorksheet($worksheet),
    //         200,
    //     );
    // }
}
