'use client'
import ActionRessource from "@/components/actionRessource";
import TrendyRessources from "@/components/trendyRessources";
import { useRouter } from "next/navigation";

export default function Home() {
  const username = 'Jean-Marc'
  const router = useRouter()

  const handlePublish = () => {
    router.push('/ressource/create')
  }
  
  return (
    <>
      <div className="flex justify-between gap-8 py-14">
        <TrendyRessources />
        <aside className="hidden lg:block lg:w-1/4 bg-green-300">
          <p>Bienvenue</p>
          <p>{username}</p>
          <ActionRessource action={"PUBLIER"} item={"UNE NOUVELLE RESSOURCE"} handleClick={handlePublish} />
        </aside>
      </div>
    </>
  );
}
