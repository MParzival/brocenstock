<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AntiquiteController extends AbstractController
{
    /**
     * @Route("/antiquite", name="antiquite")
     */
    public function index(): Response
    {
        return $this->render('antiquite/index.html.twig', [
            'controller_name' => 'AntiquiteController',
        ]);
    }
}
