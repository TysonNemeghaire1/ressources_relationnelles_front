'use client'

import React from 'react';
import {useSearchParams} from 'next/navigation'
import Title from '@/components/texts/titlePage';
import RessourceCard from '@/components/cards/ressourceCard';

const sharedResources = [
    {
        id: '1',
        date: '05/03/2024',
        title: 'Perceuse Électrique',
        name: 'Outils de Bricolage',
        category: 'Outils',
        author: 'Marie Dupont',
        content: 'Perceuse sans fil 18V avec plusieurs mèches. Parfait pour petits et moyens travaux. Disponible le weekend.',
    },
    {
        id: '2',
        date: '15/02/2024',
        title: 'Cours de Guitare',
        name: 'Apprendre la Musique',
        category: 'Éducation',
        author: 'Alexandre Leroy',
        content: 'Sessions hebdomadaires de 45 minutes pour débutants. Matériel non fourni. Disponible les mercredis soir.',
    },
    {
        id: '3',
        date: '20/01/2024',
        title: 'Co-voiturage Centre-ville',
        name: 'Transport Quotidien',
        category: 'Transport',
        author: 'Fatima Alami',
        content: 'Places disponibles pour co-voiturage vers le centre-ville les matins de semaine. Départ à 8h00.',
    },
    {
        id: '4',
        date: '10/03/2024',
        title: 'Prêt de Livres de Cuisine',
        name: 'Partage de Connaissance',
        category: 'Livres',
        author: 'Jean-Michel Bernard',
        content: 'Large sélection de livres de cuisine disponibles pour prêt. Végétarien, végan, cuisines du monde.',
    },
    {
        id: '5',
        date: '25/02/2024',
        title: 'Assistance Informatique',
        name: 'Aide Technologique',
        category: 'Service',
        author: 'Clara Fontaine',
        content: 'Aide avec l’installation de logiciels, suppression de virus, et conseils généraux sur l’utilisation de votre PC. Disponible en soirée.',
    },
    {
        id: '6',
        date: '02/03/2024',
        title: 'Kit de Jardinage',
        name: 'Jardin Communautaire',
        category: 'Jardinage',
        author: 'Sophie Laurent',
        content: 'Kit complet pour débutants en jardinage incluant des outils et des graines. Disponible sur demande.',
    },
    {
        id: '7',
        date: '28/02/2024',
        title: 'Atelier de Peinture',
        name: 'Créativité et Art',
        category: 'Art',
        author: 'Lucas Martel',
        content: 'Rejoignez notre atelier de peinture hebdomadaire. Tout niveau bienvenu. Matériel fourni. Les samedis après-midi.',
    },
    {
        id: '8',
        date: '13/02/2024',
        title: 'Séance de Yoga',
        name: 'Bien-être',
        category: 'Santé',
        author: 'Amélie Poulain',
        content: 'Séances de yoga en plein air pour tous les niveaux. Apportez votre tapis. Les jeudis soir au parc central.',
    },
    {
        id: '9',
        date: '07/03/2024',
        title: 'Réparation de Vélo',
        name: 'Mobilité Durable',
        category: 'Réparation',
        author: 'Étienne Girard',
        content: 'Atelier communautaire pour apprendre à réparer votre vélo. Outils fournis. Inscription nécessaire.',
    },
    {
        id: '10',
        date: '17/02/2024',
        title: 'Prêt de Matériel de Camping',
        name: 'Aventures en Plein Air',
        category: 'Loisirs',
        author: 'Nadia Benoit',
        content: 'Tentes, sacs de couchage, et plus disponibles à emprunter pour votre prochaine aventure.',
    },
    {
        id: '11',
        date: '22/01/2024',
        title: 'Cours de Photographie',
        name: 'Capturez le Moment',
        category: 'Éducation',
        author: 'Olivier Thomas',
        content: 'Apprenez les bases de la photographie. Apportez votre appareil. Cours le weekend.',
    },
    {
        id: '12',
        date: '15/03/2024',
        title: 'Garde d\'enfants Partagée',
        name: 'Soutien Familial',
        category: 'Service',
        author: 'Julie Verne',
        content: 'Service de garde d\'enfants par rotation entre parents. Créneaux flexibles selon disponibilité.',
    },
    {
        id: '13',
        date: '09/02/2024',
        title: 'Partage de Recettes Véganes',
        name: 'Cuisine Saine',
        category: 'Cuisine',
        author: 'Maxime Dupuis',
        content: 'Échange de recettes véganes et sessions de cuisine de groupe. Rejoignez-nous pour découvrir de nouveaux plats.',
    },
    {
        id: '14',
        date: '03/03/2024',
        title: 'Aide au Déménagement',
        name: 'Solidarité Communautaire',
        category: 'Service',
        author: 'François Leclerc',
        content: 'Offre d\'aide au déménagement. Camionnette disponible si nécessaire. Planification à l\'avance requise.',
    },
    {
        id: '15',
        date: '27/02/2024',
        title: 'Club de Lecture',
        name: 'Évasion Littéraire',
        category: 'Loisirs',
        author: 'Charlotte Moreau',
        content: 'Rejoignez notre club de lecture mensuel. Prochaine lecture: "Les Fables de La Fontaine".',
    }
];

function Search() {
    const searchParams = useSearchParams(); // Utilisez useSearchParams pour accéder aux paramètres de recherche
    return searchParams.get('type')
}

export default function Page() {


    return (
        <main className="flex min-h-screen flex-col justify-start py-14 px-5">
            <div className='flex flex-col w-full gap-2'>
                <Title>RESSOURCES : </Title>
                <div>
                    <div className='w-full'></div>
                </div>
                <div className='grid w-full gap-2 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        sharedResources.map((val, key) => {
                            return (
                                <div key={key}
                                     className='bg-gray-100 hover:scale-110 hover:bg-custom-blue-0 transition-transform duration-200'>
                                    <RessourceCard data={val} isTrendy={false}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
}