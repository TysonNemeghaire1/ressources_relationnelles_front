import Link from 'next/link';
import React from 'react';
import Image from "next/image";

export default function Login() {

  return (
    <main>
      <h1 className="text-4xl text-gray-700 text-center font-light mb-4 align-top pt-[5vh]">CONNEXION</h1>
      <div className="flex flex-col items-center justify-center p-4 white">
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-2 auto-rows-auto">
            <div className='flex items-center justify-center h-[30vh]  md:h-[40vh] w-[40vh]'>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse mail</label>
                <input type="email" id="email" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700" placeholder="mail@exemple.com" required />
                <p className='h-[3vh]'>
                </p>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input type="password" id="password" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700" required />
                <p className='h-[3vh]'>
                </p>
                <div className="grid grid-cols-2 gap-4 items-center justify-center">
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Connexion</button>
                  <Link href={'/auth/register'}>
                    <div className="text-sm text-indigo-600 hover:underline">Pas de compte ? S'inscrire</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center h-[10vh] w-[40vh]  md:h-[40vh] w-[20vh]'>
              <div className='bg-blue-500 flex justify-center items-center md:h-full w-px  max-sm:w-full h-px'>
                <div className='bg-white z-10 text-2xl text-center max-sm:w-2/12'>
                  OU
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center h-[10vh] w-full  md:h-[40vh] w-[40vh]'>
              <div>
              <Image
                width={240}
                height={68}
                src="/FranceConnect.png"
                alt="France Connect"
              />
              <a href='https://franceconnect.gouv.fr/'>Qu'est-ce que FranceConnect ?</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
