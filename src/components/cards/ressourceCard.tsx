'use client';
import Link from 'next/link';
import React from 'react';

interface DataProps {
    id: string,
    name: string;
    category: string;
    date: string;
    author: string;
    content: string;
}

interface RessourceCardProps {
    data: DataProps;
    isTrendy: boolean;
}

const RessourceCard: React.FC<RessourceCardProps> = ({ data, isTrendy }) => {
    return (
        <Link href={`ressource/${data.id}`}>
            <div className={`${isTrendy ? '' : 'flex flex-col gap-3'} w-full`}>
                <div className={`${isTrendy ? 'flex' : 'flex flex-col gap-3'} justify-between`}>
                    <p className={`${isTrendy ? 'w-1/2' : 'w-full'} text-black font-bold text-[20px]`}>{data.name}</p>
                    <div className={`${isTrendy ? 'w-1/2' : 'w-full'} justify-end`}>
                        <p className='text-black font-italic text-[15px]'>{`${data.category} - ${data.date} - ${data.author}`}</p>
                    </div>
                </div>
                <p className='text-black font-light text-[15px] text-justify'>{data.content}</p>
            </div>
        </Link>
    );
}

export default RessourceCard;