'use client'
import React from 'react'
import { getRessourcesById } from "@/api/ressources";
import ActionRessource from "@/components/actionRessource";
import { formatDate } from "@/hooks/date";
import { useEffect, useState } from "react";
import { FaRegStar,FaCheck,FaLink,FaCircleArrowRight,FaTriangleExclamation,FaCommentDots    } from "react-icons/fa6";

const discussion = [
    {
        id:'1',
        datetime: '05/03/2024 12:00',
        author: 'Marie Dupont',
        content: 'Perceuse sans fil 18V avec plusieurs mèches. Parfait pour petits et moyens travaux. Disponible le weekend.',
    },
    {
        id: '2',
        datetime: '05/03/2024 12:45',
        author: 'Alexandre Leroy',
        content: 'Sessions hebdomadaires de 45 minutes pour débutants. Matériel non fourni. Disponible les mercredis soir.',
    },
    {
        id: '3',
        datetime: '05/03/2024 13:50',
        author: 'Fatima Alami',
        content: 'Places disponibles pour co-voiturage vers le centre-ville les matins de semaine. Départ à 8h00.',
    },
    {
        id: '4',
        datetime: '05/03/2024 13:50',
        author: 'Fatima Alami',
        content: 'Places disponibles !',
    },
]

interface Article {
    title: string;
    content: string;
    author:string,
    publish_date:any,
    category:string,
}

interface Params {
    id: string;
  }

  export function ClientPage({ params }: { params: Params }) {
    const [article, setArticle] = useState<Article | null>(null);
    const addFavorite = () => {
        console.log("addFavorite");
    };

    const getData = async () =>{
        console.log(params)
        await getRessourcesById(params?.id).then((response)=>{
            setArticle(response)
        })
    }

    useEffect(()=>{
        if(!params.id) return
        getData()
    },[])
            return (
        <div className="h-full px-5 py-5 flex flex-col">
        <h1 className="flex gap-5 items-center text-black text-[40px] w-full">
            <FaRegStar />
            <span>{article?.title}</span>
        </h1>
        <div className="flex gap-5 flex-col lg:flex-row">
            <div className="w-full lg:w-4/5 flex flex-col items-center">
                <p className="text-black text-justify">{article?.content}</p>
            </div>
            <aside className="lg:w-1/4 lg:block md:flex items-start md:gap-5">
                <div className="md:w-2/4 lg:w-full">
                    <ActionRessource action={"PARTAGER"} item={"LA RESSOURCE"} handleClick={'handleShare'}/>
                    
                    <div className="cursor-pointer flex uppercase items-center px-4 my-2 gap-1 rounded p-2 hover:opacity-70 bg-custom-blue-0 text-custom-blue-3">
                        <FaRegStar className="text-3xl mr-2"/> Ajouter aux favoris
                    </div>
                    <div className="cursor-pointer flex uppercase items-center px-4 my-2 gap-1 rounded p-2 hover:opacity-70 bg-custom-blue-0 text-custom-blue-3">
                        <FaCheck className="text-3xl mr-2"/>   Valider la ressource
                    </div>
                    <div className="flex flex-col my-2 justify-center items-center my-10">
                        <h2 className="font-bold uppercase">Informations</h2>
                        <div className="flex flex-col my-2 justify-center items-center"><span className="text-custom-blue-4 font-bold">Auteur</span><span>{article?.author}</span></div>
                        <div className="flex flex-col my-2 justify-center items-center"><span className="text-custom-blue-4 font-bold">Date de publication</span><span>{formatDate(article?.publish_date?.date)}</span></div>
                        <div className="flex flex-col my-2 justify-center items-center"><span className="text-custom-blue-4 font-bold">Catégorie</span><span>{article?.category}</span></div>
                    </div>
                    <div className="cursor-pointer flex-wrap flex uppercase items-center px-4 my-2 gap-1 rounded p-2 hover:opacity-70 bg-custom-blue-0 text-custom-blue-3">
                        <FaLink className="text-3xl mr-2"/> Fichier 
                        <span className="text-black normal-case w-full ml-10 -mt-3">adopte-un-corgi.docx</span>
                    </div>
                </div>
                <div className="md:border-l-4 md:border-b-0 pb-10 border-b-4 border-custom-blue-1 p-4 lg:my-10 my-5 md:my-2">
                    <h2 className="font-bold uppercase">Discussion</h2>
                    <div className="max-h-96 overflow-auto pr-2">
                        {discussion.map((data, key) => (
                            <div key={key} className="my-3">
                                <div className="text-sm font-bold text-custom-blue-4">
                                    <span>{data.author}</span>
                                    <span> - {data.datetime}</span>
                                </div>
                                <div className="text-sm text-justify">{data.content}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between">
                        <input type="text" className="border-slate-100 border-2 rounded w-full mr-5 px-3" />
                        <button><FaCircleArrowRight className="text-custom-blue-2 text-3xl hover:text-custom-blue-4" /></button>
                    </div>
                </div>
            </aside>
        </div>
        <div className="my-10">
            <h1 className="text-black text-[30px] uppercase">Commentaires</h1>

            <div className="max-h-96 overflow-auto my-5 pr-5">
                {discussion.map((data, key) => (
                    <div key={key} className="my-3 border-b-2 border-custom-blue-0 py-2">
                        <div className="flex justify-between">
                            <div className="font-bold text-custom-blue-4">
                                <span>{data.author}</span>
                                <span> - {data.datetime}</span>
                            </div>
                            <div className="flex gap-3 text-2xl text-custom-blue-1">
                                <FaCommentDots  className="text-custom-blue-1 hover:text-custom-blue-4" />
                                <FaTriangleExclamation  className="text-custom-blue-2 hover:text-custom-blue-4"/>
                            </div>
                        </div>
                        <div>{data.content}</div>
                    </div>
                ))}
                
                <div className="my-3 border-b-2 ml-20 border-custom-blue-0 py-2">
                    <div className="flex justify-between">
                        <div className="font-bold text-custom-blue-4">
                            <span>Nom</span>
                            <span> - 03/02/2024 13:00</span>
                        </div>
                        <div className="flex gap-3 text-2xl text-custom-blue-1">
                            <FaCommentDots  className="text-custom-blue-1 hover:text-custom-blue-4" />
                            <FaTriangleExclamation  className="text-custom-blue-2 hover:text-custom-blue-4"/>
                        </div>
                    </div>
                    <div>Ceci est un commentaire du commentaire !</div>
                </div>
                <div className="my-3 border-b-2 border-custom-blue-0 py-2">
                    <div className="flex justify-between">
                        <div className="font-bold text-custom-blue-4">
                            <span>Nom</span>
                            <span> - 03/02/2024 13:00</span>
                        </div>
                        <div className="flex gap-3 text-2xl text-custom-blue-1">
                            <FaCommentDots  className="text-custom-blue-1 hover:text-custom-blue-4" />
                            <FaTriangleExclamation  className="text-custom-blue-2 hover:text-custom-blue-4"/>
                        </div>
                    </div>
                    <div>Ceci est un commentaire !</div>
                </div>
                
            </div>

            
            <div className="flex justify-between gap-5 md:flex-row flex-col">
                <div className="flex flex-col justify-center items-center md:items-end md:w-1/5">
                    <span className="uppercase font-bold text-right">Commenter</span>
                    <span className="text-sm text-right">Commentaire N°15</span>
                    <span className="text-sm text-right italic">Auteur - 02/02/2024 10:00</span>
                </div>
                
                <textarea className="border-slate-100 border-2 rounded w-full mr-5 p-3" />
                <button className="flex justify-end gap-5 items-center text-custom-blue-2 hover:text-custom-blue-4"><FaCircleArrowRight className="text-3xl" />POSTER LE COMMENTAIRE</button>
            </div>
        </div>
    </div>
    )
}

export default ClientPage