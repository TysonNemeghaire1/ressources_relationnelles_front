'use client';

import React from 'react';
import Title from '@/components/texts/titlePage';
import Button from "@/components/lightButton/lightButton";
import AdminPanel from '@/components/admin/adminPanel';
import RessourceList from '@/components/list/ressourceList';
import UserList from '@/components/list/userList';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { SetStateAction, useState } from "react";

const sharedResources = [
    {
      id: '201001',
      date: '05/03/2024',
      title: 'Perceuse Électrique',
      name: 'Outils de Bricolage',
      category: 'Outils',
      author: 'Marie Dupont',
      content: 'Perceuse sans fil 18V avec plusieurs mèches. Parfait pour petits et moyens travaux. Disponible le weekend.',
    },
    {
      id: '202002',
      date: '15/02/2024',
      title: 'Cours de Guitare',
      name: 'Apprendre la Musique',
      category: 'Éducation',
      author: 'Alexandre Leroy',
      content: 'Sessions hebdomadaires de 45 minutes pour débutants. Matériel non fourni. Disponible les mercredis soir.',
    },
    {
      id: '203003',
      date: '20/01/2024',
      title: 'Co-voiturage Centre-ville',
      name: 'Transport Quotidien',
      category: 'Transport',
      author: 'Fatima Alami',
      content: 'Places disponibles pour co-voiturage vers le centre-ville les matins de semaine. Départ à 8h00.',
    },
    {
      id: '204004',
      date: '10/03/2024',
      title: 'Prêt de Livres de Cuisine',
      name: 'Partage de Connaissance',
      category: 'Livres',
      author: 'Jean-Michel Bernard',
      content: 'Large sélection de livres de cuisine disponibles pour prêt. Végétarien, végan, cuisines du monde.',
    },
    {
      id: '205005',
      date: '25/02/2024',
      title: 'Assistance Informatique',
      name: 'Aide Technologique',
      category: 'Service',
      author: 'Clara Fontaine',
      content: 'Aide avec l’installation de logiciels, suppression de virus, et conseils généraux sur l’utilisation de votre PC. Disponible en soirée.',
    },
    {
        id: '206006',
        date: '02/03/2024',
        title: 'Kit de Jardinage',
        name: 'Jardin Communautaire',
        category: 'Jardinage',
        author: 'Sophie Laurent',
        content: 'Kit complet pour débutants en jardinage incluant des outils et des graines. Disponible sur demande.',
      },
      {
        id: '207007',
        date: '28/02/2024',
        title: 'Atelier de Peinture',
        name: 'Créativité et Art',
        category: 'Art',
        author: 'Lucas Martel',
        content: 'Rejoignez notre atelier de peinture hebdomadaire. Tout niveau bienvenu. Matériel fourni. Les samedis après-midi.',
      },
      {
        id: '208008',
        date: '13/02/2024',
        title: 'Séance de Yoga',
        name: 'Bien-être',
        category: 'Santé',
        author: 'Amélie Poulain',
        content: 'Séances de yoga en plein air pour tous les niveaux. Apportez votre tapis. Les jeudis soir au parc central.',
      },
      {
        id: '209009',
        date: '07/03/2024',
        title: 'Réparation de Vélo',
        name: 'Mobilité Durable',
        category: 'Réparation',
        author: 'Étienne Girard',
        content: 'Atelier communautaire pour apprendre à réparer votre vélo. Outils fournis. Inscription nécessaire.',
      },
      {
        id: '210010',
        date: '17/02/2024',
        title: 'Prêt de Matériel de Camping',
        name: 'Aventures en Plein Air',
        category: 'Loisirs',
        author: 'Nadia Benoit',
        content: 'Tentes, sacs de couchage, et plus disponibles à emprunter pour votre prochaine aventure.',
      },
      {
        id: '211011',
        date: '22/01/2024',
        title: 'Cours de Photographie',
        name: 'Capturez le Moment',
        category: 'Éducation',
        author: 'Olivier Thomas',
        content: 'Apprenez les bases de la photographie. Apportez votre appareil. Cours le weekend.',
      },
      {
        id: '212012',
        date: '15/03/2024',
        title: 'Garde d\'enfants Partagée',
        name: 'Soutien Familial',
        category: 'Service',
        author: 'Julie Verne',
        content: 'Service de garde d\'enfants par rotation entre parents. Créneaux flexibles selon disponibilité.',
      },
      {
        id: '213013',
        date: '09/02/2024',
        title: 'Partage de Recettes Véganes',
        name: 'Cuisine Saine',
        category: 'Cuisine',
        author: 'Maxime Dupuis',
        content: 'Échange de recettes véganes et sessions de cuisine de groupe. Rejoignez-nous pour découvrir de nouveaux plats.',
      },
      {
        id: '214014',
        date: '03/03/2024',
        title: 'Aide au Déménagement',
        name: 'Solidarité Communautaire',
        category: 'Service',
        author: 'François Leclerc',
        content: 'Offre d\'aide au déménagement. Camionnette disponible si nécessaire. Planification à l\'avance requise.',
      },
      {
        id: '215015',
        date: '27/02/2024',
        title: 'Club de Lecture',
        name: 'Évasion Littéraire',
        category: 'Loisirs',
        author: 'Charlotte Moreau',
        content: 'Rejoignez notre club de lecture mensuel. Prochaine lecture: "Les Fables de La Fontaine".',
      }
  ];

  const connectedCitizens = [
    {
      id: '001',
      login: 'Un login',
      mail: 'a@a.fr',
      inscription: '05/03/2024',
    },
    {
      id: '002',
      login: 'Un login',
      mail: 'b@b.fr',
      inscription: '05/03/2024',
    },
    {
      id: '003',
      login: 'Un login',
      mail: 'c@c.fr',
      inscription: '05/03/2024',
    },
    {
      id: '004',
      login: 'Un login',
      mail: 'd@d.fr',
      inscription: '05/03/2024',
    },
    {
      id: '005',
      login: 'Un login',
      mail: 'e@e.fr',
      inscription: '05/03/2024',
    },
    {
      id: '006',
      login: 'Un login',
      mail: 'f@f.fr',
      inscription: '05/03/2024',
    },
    {
      id: '007',
      login: 'Un login',
      mail: 'g@g.fr',
      inscription: '05/03/2024',
    },
    {
      id: '008',
      login: 'Un login',
      mail: 'h@h.fr',
      inscription: '05/03/2024',
    },
  ];

export default function Page() {
  
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
      setSelectedValue(event.target.value);
  }; 
  
  const exportStatResources = () => {
    console.log("ClickBtnResources");
  };
  const exportStatAccount = () => {
    console.log("ClickBtnAccount");
  };


    return (
        <main className="py-10">
            <h1 className="text-4xl text-gray-700 text-center font-light mb-4 align-top ">PANNEAU D'ADMINISTRATION</h1>
            <AdminPanel />
            
            <div className="flex md:justify-between justify-center items-end flex-wrap">
              <h2 className="pt-10 text-4xl text-gray-700 font-light mb-4 align-top py-2">LISTE DES RESSOURCES</h2>
              <Button
                text={"Exporter les statistiques des ressources"}
                onClick={exportStatResources}
                value={"na"}
                active={"na"}
              />
            </div>

            <div className="flex flex-wrap gap-5 justify-center md:justify-start items-center mb-5 font-bold uppercase">
              <div>
                <span>Catégorie</span>
                <select value={selectedValue} onChange={handleChange} className="ml-5 border border-gray-300 rounded p-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none">
                  <option value="">Sélectionnez une option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className='flex gap-5 flex-wrap'>
                <span>Date du</span>
                <input type="date" />
                <span>au</span>
                <input type="date" />
              </div>
            </div>

            <div className="rounded p-2 mb-2 border border-custom-blue-0 border-2 flex flex-col">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-stat-ressources gap-1 rounded pb-2">
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  ID
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  Nom de la ressource
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  Auteur
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  Catégorie
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  Date
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  Com.
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
              </div>

              {
                sharedResources.map((val, key) => {
                  return (
                    <RessourceList id={val.id} name={val.title} category={val.category} date={val.date} author={val.author} />
                  )
                })
              }
            
            </div>
              
            <div className="mt-10 flex md:justify-between justify-center items-end flex-wrap">
              <h2 className="pt-10 text-4xl text-gray-700 font-light mb-4 align-top py-2">LISTE DES CITOYENS</h2>
              <Button
                text={"Exporter les statistiques des citoyens"}
                onClick={exportStatAccount}
                value={"na"}
                active={"na"}
              />
            </div>

            
            <div className="rounded p-2 mb-2 border border-custom-blue-0 border-2 flex flex-col">
              <div className="grid grid-cols-2 md:grid-cols-stat-account gap-1 rounded pb-2">
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  ID
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  Identifiant
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  Email
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
                <div className="uppercase text-sm font-bold text-custom-blue-4 rounded p-2 text-center bg-custom-blue-0 flex justify-center items-center gap-2">
                  Inscription
                    <FaAngleUp className="text-xl text-custom-blue-2 hover:text-custom-blue-3" /> <FaAngleDown  className="text-xl text-custom-blue-2 hover:text-custom-blue-3" />
                </div>
              </div>

              {
                connectedCitizens.map((val, key) => {
                    return (
                      <UserList id={val.id} login={val.login} mail={val.mail} inscription={val.inscription} />
                    )
                })
              }
            
            </div>
              
        </main>
    );
}