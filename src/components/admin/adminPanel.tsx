'use client';

import React from 'react';
import Link from "next/link";
import { FaRegTrashCan, FaSquareCheck } from "react-icons/fa6";

const lastPublications = [{id:'10300220', date:'10/01/2024', title:'Comment changer la roue'},{date:'10/01/2024', title:"Horaires d'ouverture du"},{id:'10300220', date:'10/01/2024', title:'Comment dépeucer un chevreuil '},{id:'10300220', date:'10/01/2024', title:"Ouvrir une maison close"}, {id:'10300220', date:'10/01/2024', title:'Tuto faire du paté'}]

const reportedComments = [{id:'10300220', date:'10/01/2024', name:'Comment dépeucer un chevreuil' ,content:'Ah batard tu fumes', author:'Francis Ngannou'},{date:'10/01/2024', name:"Ouvrir une maison close : mode d'emploi", content:"Horaires d'ouverture du", author:'Francis Ngannou'},{id:'10300220', date:'10/01/2024', name:"Horaires d'ouverture du centre de natation", content:'Comment dépeucer un chevreuil ', author:'Francis Ngannou'},{id:'10300220', name:'Fermeture de la boucherie', date:'10/01/2024', content:"Ouvrir une maison close", author:'Francis Ngannou'}, {id:'10300220',name:'Tuto faire du paté de campagne rapido', date:'10/01/2024', content:'Tuto faire du paté', author:'Francis Ngannou'}]

export default function AdminPanel(){
    return (
            <div className='flex justiffy-center p-5 flex-wrap'>
                <div>
                    <div className="uppercase font-bold text-center mb-2">Mes dernières publications</div>
                    <div className="max-h-60 overflow-auto">
                        {
                            lastPublications.map((val, key)=>{
                                return(
                                    <LastPublication data={val} key={key}/>
                                )
                            })
                        }   
                    </div>
                </div>
                <div>
                    <div className="uppercase font-bold text-center mb-2">Mes dernières publications</div>
                    <div className="max-h-60 overflow-auto p-2">
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

const ReportedComment = ({data}) => {

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
