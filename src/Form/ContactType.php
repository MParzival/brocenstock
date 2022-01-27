<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                'label' => 'Nom et prénom*',
                'attr' => [
                    'maxlength' => 16,
                ],
                'required' => true,
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email*',
                'required' => true,
            ])
            ->add('phone', TextType::class, [
                'label' => 'Téléphone*',
                'required' => true,
            ])
            ->add('sujet', TextType::class, [
                'label' => 'Sujet*',

                'required' => true,
            ])
            ->add('message', TextareaType::class, [
                'label' => 'Message*',
                'attr' => [
                    'rows' => 10
                ],
                'required' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
