<?php

namespace App\Controller\Patient;

use App\Entity\Patient;
use App\Entity\CalendlyEvent;
use App\Repository\DoctorRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\CalendlyEventRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\RedirectFromIsGrantedTrait;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/patient")
 */
class CalendlyController extends AbstractController
{
    use RedirectFromIsGrantedTrait;

    private $doctorRepository;
    private $calendlyEventRepository;
    private $em;

    public function __construct(
        DoctorRepository $doctorRepository,
        CalendlyEventRepository $calendlyEventRepository,
        EntityManagerInterface $em
    ) {
        $this->doctorRepository = $doctorRepository;
        $this->calendlyEventRepository = $calendlyEventRepository;
        $this->em = $em;
    }

    /**
     * @Route("/{id}/calendly/event", name="app_patient_calendly_event", methods={"POST"})
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function calendlyEvent(Request $request, Patient $patient): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            if($data->eventUrl)
            {
                $calendlyEvent = $this->calendlyEventRepository->findOneBy([
                    'eventUrl' => $data->eventUrl
                ]);
    
                if(!$calendlyEvent)
                {
                    $calendlyEvent = new CalendlyEvent();
                    $calendlyEvent
                        ->setEventUrl($data->eventUrl)
                    ;
                }
    
                $calendlyEvent
                    ->setPatient($patient)
                ;
    
                $this->em->persist($calendlyEvent);
    
                $doctor = $this->doctorRepository->findOneBy(['id' => 1]);
                $patient->setAddRequestDoctor(true);
                $patient->setDoctor($doctor);

                $this->em->flush();

                return $this->json(
                    'Calendly Event create',
                    200
                );
            }
        }

        return $this->json(
            "Une erreur s'est produite lors du Calendly Event",
            500
        );
    }
}
