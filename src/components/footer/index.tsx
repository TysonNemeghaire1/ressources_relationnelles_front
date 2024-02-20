import React from "react";
import Banner from "@/components/footer/banner";
import LinkSection from "@/components/footer/linkSection";
import Image from "next/image";
import { FaSquareArrowUpRight } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <Banner />
      <LinkSection />
      <div className="w-full bg-white">
        <div className="mx-auto p-6 lg:w-4/5">
          <div className="flex flex-col items-center justify-between border-b border-black border-opacity-70 pb-3 md:flex-row">
            <div className="w-1/3">
              <Image
                width={190}
                height={130}
                src="/ministere.png"
                alt="Ministère du travail, de la santé et des solidarités"
              />
            </div>
            <nav className="my-3 flex w-2/3">
              <ul className="flex flex-wrap place-content-center gap-3 text-sm text-gray-500">
                <li>
                  <a
                    className="flex items-center gap-1 hover:opacity-80"
                    href="http://www.legifrance.gouv.fr/"
                  >
                    www.legifrance.gouv.fr
                    <FaSquareArrowUpRight />
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-1 hover:opacity-80"
                    href="http://www.service-public.fr/"
                  >
                    www.service public.fr
                    <FaSquareArrowUpRight />
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-1 hover:opacity-80"
                    href="http://www.gouvernement.fr/"
                  >
                    www.gouvernement.fr
                    <FaSquareArrowUpRight />
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-1 hover:opacity-80"
                    href="http://www.france.fr/"
                  >
                    www.france.fr
                    <FaSquareArrowUpRight />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <nav className="my-3">
            <ul className="flex flex-wrap text-sm text-gray-500 divide-x divide-slate-200">
              <li className="px-2">
                <a href="">Plan du site</a>
              </li>
              <li className="px-2">
                <a href="">Accessibilité : conformité partielle</a>
              </li>
              <li className="px-2">
                <a href="">Mentions légales</a>
              </li>
              <li className="px-2">
                <a href="">Données personnelles et cookies</a>
              </li>
              <li className="px-2">
                <a href="">Contacts</a>
              </li>
              <li className="px-2">
                <a href="">Archives presse</a>
              </li>
            </ul>
          </nav>
          <p className="text-black text-sm mt-10">
            Sauf mention contraire, tous les contenus de ce site sont sous
            licence etalab-2.0
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
