"use client";
import React, { useState } from "react";
import { FaRegShareFromSquare, FaRegStar } from "react-icons/fa6";
import Button from "@/components/trendyRessources/button";
import RessourceCard from "@/components/cards/ressourceCard";
import { useAuth } from "@/context/AuthContext";

//TODO Changer le h2 en fonction du bouton
export type filterType = "all" | "bookmarks" | "shared";

function TrendyRessources() {
  const [filter, setFilter] = useState<filterType>("all");
  const currentUser = useAuth()
  return (
    <main className="hover min-h-fit w-full lg:w-3/4 bg-trendy-ressource-gradient">
      <div className="flex items-center justify-between md:mx-5 mt-5">
        <div className="flex gap-2">
          <Button
            text={"TOUTES"}
            onClick={setFilter}
            value={"all"}
            active={filter}
          />
          {
            currentUser &&
              <>
              <Button
              icon={<FaRegStar />}
              text={"FAVORIS"}
              onClick={setFilter}
              value={"bookmarks"}
              active={filter}
              />
              <Button
              icon={<FaRegShareFromSquare />}
              text={"PARTAGÉES"}
              onClick={setFilter}
              value={"shared"}
              active={filter}
              />
            </>
        }
        </div>
        <h2 className="xl:text-2xl lg:text-lg  hidden md:inline font-bold text-white">
          RESSOURCES À LA UNE
        </h2>
      </div>
      <div className="xl:w-11/12 mx-auto my-5 h-80 overflow-y-auto flex flex-col gap-5 pr-3 scroll-bar">
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
          isTrendy={true}
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
          isTrendy={true}
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
          isTrendy={true}
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
          isTrendy={true}
        />
      </div>
    </main>
  );
}

export default TrendyRessources;
