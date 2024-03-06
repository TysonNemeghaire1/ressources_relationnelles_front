'use client';

import React from 'react';
import Link from "next/link";
import { FaRegTrashCan, FaSquareCheck } from "react-icons/fa6";

const lastPublications = [{id:'10300220', date:'10/01/2024', title:'Comment changer la roue'},{date:'10/01/2024', title:"Horaires d'ouverture du"},{id:'10300220', date:'10/01/2024', title:'Comment dépecer un chevreuil '},{id:'10300220', date:'10/01/2024', title:"Ouvrir une maison close"}, {id:'10300220', date:'10/01/2024', title:'Tuto faire du paté'}]

const reportedComments = [{id:'10300220', date:'10/01/2024', name:'Comment dépecer un chevreuil' ,content:'Ah batard tu fumes', author:'Francis Ngannou'},{date:'10/01/2024', name:"Ouvrir une maison close : mode d'emploi", content:"Horaires d'ouverture du", author:'Francis Ngannou'},{id:'10300220', date:'10/01/2024', name:"Horaires d'ouverture du centre de natation", content:'Comment dépecer un chevreuil ', author:'Francis Ngannou'},{id:'10300220', name:'Fermeture de la boucherie', date:'10/01/2024', content:"Ouvrir une maison close", author:'Francis Ngannou'}, {id:'10300220',name:'Tuto faire du paté de campagne rapido', date:'10/01/2024', content:'Tuto faire du paté', author:'Francis Ngannou'}]

export default function AdminPanel(){
    return (
            <div className='flex justify-between items-start p-5 flex-wrap'>
                <div className="md:w-1/4 w-full">
                    <div className="uppercase font-bold text-center mb-2">Ressources à valider</div>
                    <div className="overflow-auto">
                        {
                            lastPublications.map((val, key)=>{
                                return(
                                    <LastPublication data={val} key={key}/>
                                )
                            })
                        }   
                    </div>
                </div>
                <div className="md:w-3/4 p-5 bg-custom-blue-0 rounded">
                    <div className="uppercase font-bold text-center mb-2">Commentaires signalés</div>
                    <div className="overflow-auto p-2">
                    {
                        reportedComments.map((val,key)=>{
                            return(
                                <ReportedComment data={val} key={key}/>
                            )
                        })
                    }
                    </div>

                </div>
            </div>
    );
};

// @ts-ignore
const ReportedComment = ({data}) => {

    const handleDelete = () => {
        console.log('Delete')
    }

    const handleIgnore = () => {
        console.log('Ignore')
    }

    return(
        <div className='gap-2 w-full flex mt-2'>
            <div className='cursor-pointer text-custom-blue-4 text-2xl' onClick={handleDelete}>
                <FaRegTrashCan />
            </div>
            <div className='cursor-pointer text-custom-blue-2 text-2xl' onClick={handleIgnore}>
                <FaSquareCheck />
            </div>
            <div className='flex flex-col'>
                <div className='text-black'>
                    <span className="font-bold">{data.name}</span>
                    <span className="italic"> - {data.date}</span>
                    <span className="font-bold italic"> - {data.author}</span></div>
                <p className='text-sm'>{data.content}</p>
            </div>
        </div>
    )
}


// @ts-ignore
const LastPublication = ({data}) => {

    const handleDelete = () => {
        console.log('Delete')
    }

    const handleIgnore = () => {
        console.log('Ignore')
    }

    return(
            <div className="border-b-custom-blue-2 border-0 border-b-2 m-2 pb-2">
                <Link href={'/ressources'} className="block font-bold hover:text-custom-blue-4">{data.title}</Link>
                <span>{data.date}</span>
            </div>
    )
}
