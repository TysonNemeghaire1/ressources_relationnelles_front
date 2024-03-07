'use client'

import React, { useEffect, useState } from 'react';
import {useSearchParams} from 'next/navigation'
import Title from '@/components/texts/titlePage';
import RessourceCard from '@/components/cards/ressourceCard';
import { getRessources } from '@/api/ressources';



export default function Page() {
    const [ressources, setRessources] = useState([])
    const searchParams = useSearchParams(); 
    const param = searchParams.get('type')


    useEffect(()=>{
        getRessources().then((data)=>{
            setRessources(data['hydra:member'])
        }).catch((error)=>{
            console.log(error)
        })
    },[param])

    return (
        <main className="flex min-h-screen flex-col justify-start py-14 px-5">
            <div className='flex flex-col w-full gap-2'>
                <Title>RESSOURCES : </Title>
                <div>
                    <div className='w-full'></div>
                </div>
                <div className='grid w-full gap-2 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        ressources?.map((val, key) => {
                            return (
                                <div key={key} className='bg-gray-100 hover:scale-110 hover:bg-custom-blue-0 transition-transform duration-200'>
                                    <RessourceCard data={val} isTrendy={false}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
}