"use client";
import React, { useState } from "react";
import { FaRegShareFromSquare, FaRegStar } from "react-icons/fa6";
import Button from "@/components/trendyRessources/button";

//TODO Changer le h2 en fonction du bouton

export type filterType = "all" | "bookmarks" | "shared";
function TrendyRessources() {
  const [filter, setFilter] = useState<filterType>("all");
  return (
    <main className="hover min-h-fit w-full lg:w-3/4 bg-trendy-ressource-gradient">
      <div className="flex items-center justify-between mr-5 mt-5">
        <div className="flex gap-2">
          <Button
            text={"TOUTES"}
            onClick={setFilter}
            value={"all"}
            active={filter}
          />
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
        </div>
        <h2 className="xl:text-2xl lg:text-lg  hidden md:inline font-bold text-white">RESSOURCES À LA UNE</h2>
      </div>
      <div className="xl:w-11/12 mx-auto my-5 h-80 overflow-y-auto">
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>     <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    </main>
  );
}

export default TrendyRessources;
