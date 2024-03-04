import React from "react";
import Image from "next/image";
import Link from 'next/link';

function Banner() {
  return (
    <header className="w-screen bg-header-gradient min-h-40">
      <div className="mx-auto flex justify-between py-5 lg:w-4/5">
        <div className="flex w-1/2 flex-col">
          <p className="w-16 text-4xl">(RE)SSOURCES RELATIONNELLES</p>
          <div className="flex items-center gap-2 pt-2">
            <Image
              width={80}
              height={34}
              src="/logo.png"
              alt="Logo du ministère"
              className="size-fit"
            />
            <p className="max-w-lg">
              <span className="font-bold">
                « Plateforme citoyenne de sources, ressources et échanges »
                &nbsp;
              </span>
              <span className="italic">
                Projet du Ministère de la Solidarité et des Familles
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          <nav>
            <ul className="flex gap-3">
              <Link href='/'>
              <li className="rounded-lg p-1 font-bold hover:bg-opacity-15 hover:bg-white">
                ACCUEIL
              </li>
              </Link>
              <Link href="/account" className="rounded-lg p-1 font-bold hover:bg-opacity-15 hover:bg-white">MON COMTE</Link>
              <li className="rounded-lg p-1 font-bold hover:bg-opacity-15 hover:bg-white">
                DÉCONNEXION
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Banner;
