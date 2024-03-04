"use client";
import React, { useState } from "react";
import Link from "next/link";


function LastestPublications() {
  return (
    <main className="mt-5">
        <div className="uppercase font-bold text-right mb-2">Mes dernières publications</div>

        <div className="max-h-60 overflow-auto">

            {/*début de la liste*/}

            <div className="border-b-custom-blue-2 border-0 border-b-2 m-2 pb-2">
                <Link href={'/ressources'} className="block font-bold hover:text-custom-blue-4">Nom de la ressource</Link>
                <span>01/01/2024</span>
            </div>

            <div className="border-b-custom-blue-2 border-0 border-b-2 m-2 pb-2">
                <Link href={'/ressources'} className="block font-bold hover:text-custom-blue-4">Nom de la ressource, un nom de ressource un peu long</Link>
                <span>01/01/2024</span>
            </div>

            <div className="border-b-custom-blue-2 border-0 border-b-2 m-2 pb-2">
                <Link href={'/ressources'} className="block font-bold hover:text-custom-blue-4">Nom de la ressource</Link>
                <span>01/01/2024</span>
            </div>

            <div className="border-b-custom-blue-2 border-0 border-b-2 m-2 pb-2">
                <Link href={'/ressources'} className="block font-bold hover:text-custom-blue-4">Nom de la ressource</Link>
                <span>01/01/2024</span>
            </div>

            <div className="border-b-custom-blue-2 border-0 border-b-2 m-2 pb-2">
                <Link href={'/ressources'} className="block font-bold hover:text-custom-blue-4">Nom de la ressource</Link>
                <span>01/01/2024</span>
            </div>

            <div className="border-b-custom-blue-2 border-0 border-b-2 m-2 pb-2">
                <Link href={'/ressources'} className="block font-bold hover:text-custom-blue-4">Nom de la ressource</Link>
                <span>01/01/2024</span>
            </div>

        </div>
    </main>
  );
}

export default LastestPublications;
