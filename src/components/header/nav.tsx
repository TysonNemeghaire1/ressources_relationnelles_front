"use client";

import React, { useState } from "react";
import SearchBar from "@/components/header/searchBar";

function Nav() {
  const [showLabel, setShowLabel] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleLabel = () => {
    if (searchQuery) {
      return;
    }
    setShowLabel(!showLabel);
  };
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  return (
    <div className="w-screen bg-custom-blue-0">
      <nav className="mx-auto flex h-20 justify-between lg:w-4/5">
        <ul className="flex w-2/3 items-center gap-2">
          <li className="whitespace-pre-line rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
            <span className="table text-sm font-bold text-custom-blue-4">
              TOUTES LES
            </span>
            <span className="text-lg text-black">RESSOURCES</span>
          </li>
          <li className="whitespace-pre-line rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
            <span className="table text-sm font-bold text-custom-blue-4">
              MES
            </span>
            <span className="text-lg text-black">FAVORIS</span>
          </li>
          <li className="whitespace-pre-line rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
            <span className="table text-sm font-bold text-custom-blue-4">
              MES
            </span>
            <span className="text-lg text-black">RESSOURCES</span>
          </li>
        </ul>
        <div className="flex w-1/3 items-center gap-2">
          <SearchBar
            onFocus={toggleLabel}
            showLabel={showLabel}
            onChange={handleChangeSearch}
          />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
