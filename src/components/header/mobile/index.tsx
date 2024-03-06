"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "@/components/header/searchBar";
import Link from "next/link";

function MobileHeader() {
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

  const [showList, setShowList] = useState(false);

  return (
    <>
      <header className="w-full bg-header-gradient p-2 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image
            width={64}
            height={24}
            src="/logo.png"
            alt="Logo du ministère"
          />
          <p className="text-lg font-bold">Ressources</p>
        </div>
        <div className="flex items-center gap-5">
          <SearchBar
            onFocus={toggleLabel}
            showLabel={showLabel}
            onChange={handleChangeSearch}
            dark={false}
          />
          <button
            onClick={() => setShowList(!showList)}
            className="rounded-lg p-1 font-bold hover:bg-opacity-15 hover:bg-white"
          >
            <RxHamburgerMenu className="text-lg" />
          </button>
        </div>
      </header>
      <div
        className={`overflow-y-scroll no-scrollbar transition-all ease-in-out duration-300 bg-header-gradient ${
          showList ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`transition duration-500 text-blue-800 ${
            !showList ? "-translate-y-full" : null
          }`}
        >
          <ul className="text-right">
            <Link href="/">
              <li className="font-bold text-white rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
                ACCUEIL
              </li>
            </Link>
            <Link href="/account">
              <li className="font-bold text-white rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
                MON COMPTE
              </li>
            </Link>
            <li className="font-bold text-white rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
              DÉCONNEXION
            </li>
            <Link href={"/ressources?type=toutes"}>
              <li className="font-bold text-white rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
                TOUTES LES RESSOURCES
              </li>
            </Link>
            <Link href={"/ressources?type=favorites"}>
              <li className="font-bold text-white rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
                MES FAVORIS
              </li>
            </Link>
            <Link href={"/ressources?type=myressources"}>
              <li className="font-bold text-white rounded-lg p-3 hover:bg-custom-blue-4 hover:bg-opacity-15">
                MES RESSOURCES
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
