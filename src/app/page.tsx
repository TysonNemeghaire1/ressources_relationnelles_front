'use client'
import ActionRessource from "@/components/actionRessource";
import TrendyRessources from "@/components/trendyRessources";
import Title from "@/components/texts/titlePage";
import RessourceCard from "@/components/cards/ressourceCard";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LastestPublications from "@/components/lastestPublications";
import Link from "next/link";

export default function Home() {
  const {currentUser} = useAuth()
  const router = useRouter()

  const handlePublish = () => {
    router.push('/ressource/create')
  }
  
  return (
    <>
    {
      currentUser && 
      <div className="flex justify-between gap-8 py-14">
        <TrendyRessources />
        <aside className="hidden lg:block lg:w-1/4">
          <p>Bienvenue</p>
          <p>{currentUser?.name}</p>
          <ActionRessource action={"PUBLIER"} item={"UNE NOUVELLE RESSOURCE"} handleClick={handlePublish} />
          <LastestPublications/>
        </aside>
      </div>
      }
      <section className="pb-14 py-10">
        <Title>LES DERNIÈRES RESSOURCES PUBLIÉES</Title>
        <div className="mt-5 grid grid-cols-1 gap-2 lg:odd-2:border-x-custom-blue-2 md:grid-cols-2 lg:odd-2:border-x-2 lg:odd-2:px-1 lg:grid-cols-3">
          <RessourceCard
            data={{
              id: "12",
              name: "toto",
              author: "cards",
              category: "1a2e05",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              date: "12/09/2012",
            }}
            isTrendy={false}
          />
          <RessourceCard
            data={{
              id: "12",
              name: "toto",
              author: "cards",
              category: "1a2e05",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              date: "12/09/2012",
            }}
            isTrendy={false}
          />
          <RessourceCard
            data={{
              id: "12",
              name: "toto",
              author: "cards",
              category: "1a2e05",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              date: "12/09/2012",
            }}
            isTrendy={false}
          />
          <RessourceCard
            data={{
              id: "12",
              name: "toto",
              author: "cards",
              category: "1a2e05",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              date: "12/09/2012",
            }}
            isTrendy={false}
          />
          <RessourceCard
            data={{
              id: "12",
              name: "toto",
              author: "cards",
              category: "1a2e05",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              date: "12/09/2012",
            }}
            isTrendy={false}
          />
          <RessourceCard
            data={{
              id: "12",
              name: "toto",
              author: "cards",
              category: "1a2e05",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              date: "12/09/2012",
            }}
            isTrendy={false}
          />
          <RessourceCard
            data={{
              id: "12",
              name: "toto",
              author: "cards",
              category: "1a2e05",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              date: "12/09/2012",
            }}
            isTrendy={false}
          />
          <RessourceCard
            data={{
              id: "12",
              name: "toto",
              author: "cards",
              category: "1a2e05",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              date: "12/09/2012",
            }}
            isTrendy={false}
          />
          <RessourceCard
            data={{
              id: "12",
              name: "toto",
              author: "cards",
              category: "1a2e05",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              date: "12/09/2012",
            }}
            isTrendy={false}
          />
        </div>
      </section>
      {
        !currentUser &&
        <section className="flex w-full flex-col items-center py-8 bg-custom-blue-0 lg:-ml-[12.5%]">
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
