<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GalleryController extends AbstractController
{
    /**
     * @Route("/gallery", name="gallery")
     */
    public function index(ProductRepository $repo): Response
    {
        $products = $repo->findAll();
        return $this->render('gallery/index.html.twig', [
            'products' => $products,
        ]);
    }
}
