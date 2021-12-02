<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DebarrasController extends AbstractController
{
    /**
     * @Route("/debarras", name="debarras")
     */
    public function index(): Response
    {
        return $this->render('debarras/index.html.twig', [
            'controller_name' => 'DebarrasController',
        ]);
    }
}
