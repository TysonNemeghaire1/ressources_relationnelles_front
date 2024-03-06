import ActionRessource from "@/components/actionRessource";
import Image from "next/image";
import { FaRegStar,FaCheck,FaLink,FaCircleArrowRight,FaTriangleExclamation,FaCommentDots    } from "react-icons/fa6";

export async function generateStaticParams() {
    //const resource = await fetch('https://.../resource').then((res) => res.json())
    //TODO: faire un vrais appel
    let resource = [{id: '1'}]
    for (let i = 1; i < 20; ++i) {
        resource.push({id: i.toString()})
    }
    return resource.map((resource: { id: string; }) => ({
        id: resource.id,
    }))
}

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
        author: 'Fatima Salami',
        content: 'Places disponibles !',
    },
]

export default function Page({params}: { params: { id: string } }) {
    
  const addFavorite = () => {
    console.log("addFavorite");
  };

    return (
        <div className="h-full px-5 py-5 flex flex-col">
            <h1 className="flex gap-5 items-center text-black text-[40px] w-full">
                <FaRegStar />
                <span>Nom de la ressource <span className="text-sm">(post:{params.id})</span></span>
                
            </h1>
            <div className="flex gap-5 flex-col lg:flex-row">
                <div className="w-full lg:w-4/5 flex flex-col items-center">
                    <Image className="object-cover my-5" width={1000} height={300} src='/corgi.jpeg' alt={"Animal"}/>
                    <p className="text-black text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer gravida tellus a dolor fermentum fermentum. Vestibulum a neque eu ex accumsan dictum.
                        Curabitur nunc felis, cursus et commodo non, eleifend non mi. Pellentesque suscipit posuere
                        varius. Etiam porttitor molestie ipsum, <strong>in pellentesque felis ultrices eu. Ut sed ex nunc.
                        Vestibulum viverra ipsum vel sem malesuada maximus tincidunt ut est.</strong> In hac habitasse platea
                        dictumst. Maecenas hendrerit pretium massa ut sodales. Aliquam eleifend maximus congue.
                        Pellentesque lacinia malesuada erat. Fusce eu risus molestie, mollis orci eget, porta purus.
                        Donec ex leo, malesuada vitae mollis quis, venenatis vel ligula. Aliquam placerat et ex quis
                        accumsan. Pellentesque eu lobortis urna, sed dictum leo. <br />
                        Duis blandit ultricies metus in luctus. <br />Suspendisse vitae erat ultrices, consequat augue nec,
                        accumsan eros. Duis venenatis quis neque in commodo. Sed non urna eleifend, feugiat nisi ac,
                        sodales diam. <u>Maecenas nec hendrerit justo, nec efficitur quam. </u>Integer velit elit, varius et
                        sagittis ut, consectetur eget ex. In ac semper est, eu molestie neque. Proin ornare, urna sed
                        tincidunt feugiat, nisi urna molestie neque, elementum rutrum ante tellus ac risus. Praesent
                        vitae pretium tellus, vitae commodo urna. <br /><br />
                        Proin et turpis sed augue pellentesque iaculis. Suspendisse potenti. In sodales est at
                        pellentesque dignissim. Aliquam eu est a arcu imperdiet sollicitudin. Sed hendrerit, odio
                        viverra convallis condimentum, lorem est finibus lorem, id varius ligula neque at purus. Nullam
                        tempus purus eros, vel sodales lorem aliquam eu. Proin dictum, libero mollis condimentum
                        aliquet, tellus ipsum porta <em>purus, non sagittis arcu lacus ac nisi. Nunc ac porttitor</em> ligula.
                        Vivamus sapien nisl, sodales eu lectus elementum, rutrum consequat libero. Suspendisse potenti.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Donec dolor justo, tincidunt sed lorem non, eleifend pulvinar enim. Phasellus aliquet fringilla
                        facilisis. Nulla facilisi. Sed pharetra leo vel accumsan pretium. Nulla mattis vel diam a
                        vehicula. Vestibulum ut dolor pellentesque, dignissim sem eget, convallis nisl. <br /><br />
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque congue nec odio in suscipit. Morbi
                        rhoncus ut nisl vel interdum. Pellentesque id quam iaculis, ornare neque cursus, vehicula nibh.
                        Donec hendrerit nec lectus ut ultrices. Proin hendrerit consequat aliquam. Cras molestie
                        imperdiet scelerisque. Cras lobortis lobortis sapien viverra ullamcorper. Nunc luctus enim eget
                        placerat ornare. Sed placerat, sapien ac suscipit efficitur, enim velit euismod arcu, eget
                        volutpat metus erat pulvinar arcu. Maecenas tincidunt luctus justo, eget rhoncus velit mollis
                        et. Donec rhoncus ligula id convallis gravida. Sed sollicitudin vulputate enim, ultrices
                        facilisis lectus egestas at. Mauris feugiat erat id mauris euismod, vel rutrum augue feugiat.
                        Duis ut sem eget quam semper aliquam. Nulla egestas mollis lacus, tincidunt faucibus augue
                        blandit ut. Pellentesque bibendum diam nec facilisis dignissim. Nullam ut tempor purus, quis
                        bibendum lacus. Nam finibus leo vel tristique vehicula.</p>
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
                            <div className="flex flex-col my-2 justify-center items-center"><span className="text-custom-blue-4 font-bold">Auteur</span><span>FanDoggo</span></div>
                            <div className="flex flex-col my-2 justify-center items-center"><span className="text-custom-blue-4 font-bold">Date de publication</span><span>06/03/2024</span></div>
                            <div className="flex flex-col my-2 justify-center items-center"><span className="text-custom-blue-4 font-bold">Catégorie</span><span>Animaux</span></div>
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