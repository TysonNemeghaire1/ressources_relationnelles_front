'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation'
import Title from '@/components/texts/titlePage';


export default function Page() {
    const searchParams = useSearchParams(); // Utilisez useSearchParams pour accéder aux paramètres de recherche
    const type = searchParams.get('type');


    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
            RESSOURCES <Title>{type}</Title>
        </main>
    );
}