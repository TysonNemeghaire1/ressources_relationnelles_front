"use client";
import React, { useState } from "react";
import { FaRegShareFromSquare, FaRegStar } from "react-icons/fa6";
import Button from "@/components/trendyRessources/button";

export type filterType = "all" | "bookmarks" | "shared";
function TrendyRessources() {
  const [filter, setFilter] = useState<filterType>("all");
  return (
    <main className="h-96 w-3/4 overflow-y-scroll bg-trendy-ressource-gradient">
      <div>
        <div className="mt-5 flex gap-2 ms-5">
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
        <h2></h2>
      </div>
      <div></div>
    </main>
  );
}

export default TrendyRessources;
