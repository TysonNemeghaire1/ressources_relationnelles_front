import Link from 'next/link';
import React from 'react';

export default function Login() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
        <form className="space-y-4">
          <h1 className="text-2xl text-gray-700 font-bold text-center mb-4">Se connecter</h1>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse mail</label>
            <input type="email" id="email" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700" placeholder="mail@exemple.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input type="password" id="password" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700" required />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Connexion</button>
            <a href="/auth/register" className="text-sm text-indigo-600 hover:underline">Pas de compte ? S'inscrire</a>
          </div>
          <div>
            <Link href={'/'}>
              <button type="button" className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Continuer sans se connecter</button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
