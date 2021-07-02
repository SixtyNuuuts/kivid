<?php

namespace App\Form;

use App\Entity\Doctor;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class DoctorFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('firstname', TextType::class, [
            'label' => 'Prénom',
            'required' => false,
            'attr' => [
                'placeholder' => "Prénom",
            ],
        ])
        ->add('lastname', TextType::class, [
            'label' => 'Nom',
            'required' => false,
            'attr' => [
                'placeholder' => "Nom",
            ],
        ])
        ->add('avatarFile', FileType::class, [
            'required' => false,
            'label' => 'Avatar',
            'mapped' => false
        ])
        ->add('description', TextareaType::class, [
            'required' => false,
        ])
        ->add('city', TextType::class, [
            'label' => 'Ville',
            'required' => false,
            'attr' => [
                'placeholder' => "Ville",
            ],
        ])
        ->add('street', TextType::class, [
            'label' => 'Rue',
            'required' => false,
            'attr' => [
                'placeholder' => "Rue",
            ],
        ])
        ->add('entityName', TextType::class, [
            'label' => 'Nom de la structure',
            'required' => false,
            'attr' => [
                'placeholder' => "Nom de la structure",
            ],
        ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Doctor::class,
        ]);
    }
}
