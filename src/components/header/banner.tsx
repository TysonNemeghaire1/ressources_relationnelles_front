'use client'

import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

function Banner() {
  const { logout, currentUser } = useAuth()

  return (
    <header className="w-screen bg-header-gradient min-h-40">
      <div className="mx-auto flex justify-between py-5 lg:w-4/5">
        <div className="flex w-1/2 flex-col">
              <Link href='/'>
          <p className="w-16 text-4xl">(RE)SSOURCES RELATIONNELLES</p>
          </Link>
          <div className="flex items-center gap-2 pt-2">
            <Image
              width={80}
              height={34}
              src="/logo.png"
              alt="Logo du ministère"
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
              {currentUser ? 
                <>
                  <Link href="/account">
                    <li className="rounded-lg p-1 font-bold hover:bg-opacity-15 hover:bg-white cursor-pointer">
                      MON COMPTE
                    </li>
                  </Link>
                  <li onClick={logout} className="rounded-lg p-1 font-bold hover:bg-opacity-15 hover:bg-white cursor-pointer">
                    DÉCONNEXION
                  </li>
                </> 
                :
                <>
                  <Link href="/auth/login">
                    <li className="rounded-lg p-1 font-bold hover:bg-opacity-15 hover:bg-white cursor-pointer">
                      SE CONNECTER
                    </li> 
                  </Link>
                  <Link href="/auth/register">
                    <li className="rounded-lg p-1 font-bold hover:bg-opacity-15 hover:bg-white cursor-pointer">
                      CRÉER UN COMPTE
                    </li>
                  </Link>
                </>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Banner;
