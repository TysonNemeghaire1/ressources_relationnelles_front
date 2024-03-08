'use client'
import ActionRessource from "@/components/actionRessource";
import TrendyRessources from "@/components/trendyRessources";
import Title from "@/components/texts/titlePage";
import RessourceCard from "@/components/cards/ressourceCard";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LastestPublications from "@/components/lastestPublications";
import Link from "next/link";
import {getContent } from "@/api/fetch";

export default function Home() {
  const {currentUser} = useAuth()
  const router = useRouter()
  const [articles, setArticles] = useState([])

  const handlePublish = () => {
    router.push('/ressource/create')
  }


  useEffect(()=>{
    getContent('resources').then((response)=>{
      setArticles(response['hydra:member'])
    })
  },[])
  
  return (
    <>
    {
      currentUser && 
      <div className="flex justify-between gap-8 py-14">
        <TrendyRessources />
        <aside className="hidden lg:block lg:w-1/4">
          <p>Bienvenue</p>
          <p>{`${currentUser?.firstName} ${currentUser?.lastName}`}</p>
          <ActionRessource action={"PUBLIER"} item={"UNE NOUVELLE RESSOURCE"} handleClick={handlePublish} />
          <LastestPublications/>
        </aside>
      </div>
      }
      <section className="pb-14 py-10">
        <Title>LES DERNIÈRES RESSOURCES PUBLIÉES</Title>
        <div className="mt-5 grid grid-cols-1 gap-2 lg:odd-2:border-x-custom-blue-2 md:grid-cols-2 lg:odd-2:border-x-2 lg:odd-2:px-1 lg:grid-cols-3">
          {
            articles?.map((val, key)=>{
              return(
                <RessourceCard data={val} key={key} isTrendy={false}/>
              )
            })
          }
        </div>
      </section>
      {
        !currentUser?.id &&
        <section className="flex w-full flex-col items-center py-8 bg-custom-blue-0">
        <Title>UNE RESSOURCE À PARTAGER ?</Title>
        <div className="mt-2 flex flex-col items-center justify-center gap-1 md:flex-row lg:gap-5">
          
        <Link href={'/auth/login'} className=" uppercase rounded bg-white p-2 font-bold hover:opacity-70">
          Connexion
          </Link>
          <p>OU</p>
        <Link href={'/auth/register'} className=" uppercase rounded bg-white p-2 font-bold hover:opacity-70">
          Créer votre compte
          </Link>
        </div>
      </section>
      }
    </>
  );
}
