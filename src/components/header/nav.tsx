"use client";

import React, { useState } from "react";
import SearchBar from "@/components/header/searchBar";
import Link from "next/link";

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
    <div className="w-full bg-custom-blue-0">
      <nav className="mx-auto flex h-20 justify-between lg:w-4/5">
        <ul className="flex w-2/3 items-center gap-2">
          <Link href={'/ressources?type=toutes'}>
            <li className="whitespace-pre-line rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
              <span className="table text-sm font-bold text-custom-blue-4">
                TOUTES LES
              </span>
              <span className="text-lg text-black">RESSOURCES</span>
            </li>
          </Link>
          <Link href={'/ressources?type=favorites'}>
            <li className="whitespace-pre-line rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
              <span className="table text-sm font-bold text-custom-blue-4">
              MES
              </span>
            <span className="text-lg text-black">FAVORIS</span>
            </li>
          </Link>
          <Link href={'/ressources?type=myressources'}>
            <li className="whitespace-pre-line rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
              <span className="table text-sm font-bold text-custom-blue-4">
              MES
            </span>
              <span className="text-lg text-black">RESSOURCES</span>
            </li>         
          </Link>
        </ul>
        <div className="flex w-1/3 items-center justify-end gap-2">
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
