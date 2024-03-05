import React from 'react';
import Link from 'next/link';

export default function Register() {
  return (
    <main className="pb-20">
      <h1 className="text-4xl text-gray-700 text-center font-light mb-4 align-top pt-20">INSCRIPTION</h1>
      <div className="flex flex-col items-center justify-center p-4 white">
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-2 auto-rows-auto">
            <div className='flex items-center justify-center h-[40vh]'>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse mail</label>
                <input type="email" id="email" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700" placeholder="mail@exemple.com" required />
                <p className='h-[3vh]'>
                </p>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input type="password" id="password" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700" required />
                <p className='h-[3vh]'>
                </p>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirmez le mot de passe</label>
                <input type="password" id="confirm-password" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700" required />
                <p className='h-[3vh]'>
                </p>
                <div className="grid grid-cols-2 gap-4 items-center justify-center">
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">S&apos;inscrire</button>
                  <Link href={'/auth/login'}>
                    <div className="text-sm text-indigo-600 hover:underline">Déjà un compte ? Se connecter</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
