'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from "next/navigation";
import { login as apiLogin } from '@/api/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, currentUser, setCurrentUser } = useAuth()
  const router = useRouter()

  useEffect(()=>{
    if(currentUser){
      router.push('/')
    }
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { token } = await apiLogin(email, password);

      const user = {
        name:'Jean Marco De la Vega',
        email:'zadzad.dzefe@sza.fez',
        id:'020022'
      }
      
      setCurrentUser(user)
      login(token, user);
      router.push('/');
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
    }
  };
    
  return (
    <main>
      <h1 className="text-4xl text-gray-700 text-center font-light mb-4 align-top pt-[5vh]">CONNEXION</h1>
      <div className="flex flex-col items-center justify-center p-4 white">
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex flex-col md:flex-row gap-2 auto-rows-auto">

            <div className='flex items-center justify-center h-[30vh]  md:h-[40vh] w-2/5'>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse mail</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700" placeholder="mail@exemple.com" required />
                <p className='h-[3vh]'>
                </p>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700" required />
                <p className='h-[3vh]'>
                </p>
                <div className="grid grid-cols-2 gap-4 items-center justify-center">
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Connexion</button>
                  <Link href={'/auth/register'}>
                    <div className="text-sm text-indigo-600 hover:underline">Pas de compte ? S&apos;inscrire</div>
                  </Link>
                </div>
              </div>

            </div>

            <div className='flex items-center justify-center py-10 w-1/5  md:py-10 px-10'>
              <div className='bg-blue-500 flex justify-center items-center md:h-full w-px  max-sm:w-full h-px'>
                <div className='bg-white z-10 text-2xl text-center max-sm:w-2/12'>
                  OU
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center h-1/3 md:py-24 w-2/5'>
              <div>
                <Image
                  width={240}
                  height={68}
                  src="/FranceConnect.png"
                  alt="France Connect"
                />
                <a href='https://franceconnect.gouv.fr/'>Qu&apos;est-ce que FranceConnect ?</a>
              </div>
            </div>
            
          </div>
        </form>
      </div>
    </main>
  );
}
