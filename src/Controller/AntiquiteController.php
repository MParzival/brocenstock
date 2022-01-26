<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AntiquiteController extends AbstractController
{
    /**
     * @Route("/antiquite", name="antiquite")
     */
    public function index(ProductRepository $repo): Response
    {
        return $this->render('antiquite/index.html.twig', [
            'products' => $repo->findProductByDate(),
        ]);
    }
}
