'use client';

import { LastPublication } from '@/app/page';
import React from 'react';

import { faTrashAlt, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
const lastPublications = [{id:'10300220', date:'10/01/2024', title:'Comment changer la roue'},{date:'10/01/2024', title:"Horaires d'ouverture du"},{id:'10300220', date:'10/01/2024', title:'Comment dépeucer un chevreuil '},{id:'10300220', date:'10/01/2024', title:"Ouvrir une maison close"}, {id:'10300220', date:'10/01/2024', title:'Tuto faire du paté'}]

const reportedComments = [{id:'10300220', date:'10/01/2024', name:'Comment dépeucer un chevreuil' ,content:'Ah batard tu fumes', author:'Francis Ngannou'},{date:'10/01/2024', name:"Ouvrir une maison close : mode d'emploi", content:"Horaires d'ouverture du", author:'Francis Ngannou'},{id:'10300220', date:'10/01/2024', name:"Horaires d'ouverture du centre de natation", content:'Comment dépeucer un chevreuil ', author:'Francis Ngannou'},{id:'10300220', name:'Fermeture de la boucherie', date:'10/01/2024', content:"Ouvrir une maison close", author:'Francis Ngannou'}, {id:'10300220',name:'Tuto faire du paté de campagne rapido', date:'10/01/2024', content:'Tuto faire du paté', author:'Francis Ngannou'}]

export default function AdminPanel(){
    return (
        <div className="w-fullflex flex-col">
            <p className="text-black text-[30px]">
                Panneau de modération
            </p>
            <div className='flex'>
                <div className='flex flex-col w-1/3'>
                    <p className='text-black'>RESSOURCES EN ATTENTE DE VALIDATIONS</p>
                    {lastPublications.map((val, key)=>{
                        return(
                            <LastPublication data={val} key={key}/>
                        )
                    })}
                </div>
                <div className='flex flex-col w-2/3'>
                    <p className='text-black'>COMMENTAIRES SIGNALÉS</p>
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReportedComment = ({data}) => {

    const handleDelete = () => {
        console.log('Delete')
    }

    const handleIgnore = () => {
        console.log('Ignore')
    }

    return(
        <div className='gap-2 w-full flex mt-2'>
            <div className='cursor-pointer' onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrashAlt} color='black'/>
            </div>
            <div className='cursor-pointer' onClick={handleIgnore}>
                <FontAwesomeIcon icon={faCheckSquare} color='black'/>
            </div>
            <div className='flex flex-col'>
                <p className='text-black'>{`${data.name} - ${data.date} - ${data.author}`}</p>
                <p className='text-black'>{data.content}</p>
            </div>
        </div>
    )
}
