<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/account")
 */
class AccountController extends AbstractController
{
    /**
     * @Route("/setting/{id}", name="app_patient_account_setting")
     * @Security("is_granted('ROLE_PATIENT') or is_granted('ROLE_ADMIN')",
     *  message="Vous n'avez pas le droit d'accéder à cette zone")
     * @isGranted("IS_OWNER", subject="id", message="Vous n'êtes pas le propriétaire de cette ressource")
     */
    public function accountSetting(int $id): Response
    {
        return $this->render('common/account-setting.html.twig');
    }
}
