'use client';

import React, { useState } from 'react';
import Button from "@/components/lightButton/lightButton";
import TrendyRessources from '@/components/trendyRessources';
import LastestPublications from '@/components/lastestPublications';

export default function Page() {
    const [showPwdPopup, pwdPopup] = useState(false);
    const [showInfoPopup, infoPopup] = useState(false);

    /* informations */
    const id = "Mon identifiant";
    const email = "email@monemail.com";
    const resources = 8;
    const share = 13;
    const favorite = 28;
    const comment = 158;
    
    const InfoEdit = () => {
        console.log("MODIFIER MES INFORMATIONS button clicked");
        infoPopup(!showInfoPopup);
    };

    const PwdEdit = () => {
        console.log("MODIFIER MON MOT DE PASSE button clicked");
        pwdPopup(!showPwdPopup);
    };

    return (
        <main className="p-3">
            
            <div className="flex pt-10 flex-wrap justify-center md:justify-between">
                <h1 className="text-4xl">MON COMPTE</h1>
                <div className="flex justify-center flex-wrap">
                    <Button
                        text={"MODIFIER MES INFORMATIONS"}
                        onClick={InfoEdit}
                        value={"na"}
                        active={"na"}
                    />
                    <Button
                        text={"MODIFIER MON MOT DE PASSE"}
                        onClick={PwdEdit} 
                        value={"na"}
                        active={"na"}
                    />
                </div>
            </div>
            <div className="flex mt-5">
                <span className="uppercase block w-40 text-custom-blue-3 font-bold">Identifiant</span>
                <span className="font-bold">{id}</span>
            </div>
            <div className="italic mb-5">Ce nom sera affiché avec vos ressources et commentaires</div>
            <div className="flex mt-5">
                <span className="uppercase block w-40 text-custom-blue-3 font-bold">Email</span>
                <span className="font-bold">{email}</span>
            </div>
             
            {showInfoPopup && (
                <form className="border-custom-blue-0 border-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-white p-5 z-10">
                    <label htmlFor="id" className="text-center block uppercase text-custom-blue-3 font-bold">Identifiant</label>
                    <input type="text" className="text-center m-auto block" value={id} />
                    <label htmlFor="id" className="mt-3 text-center block uppercase text-custom-blue-3 font-bold">Email</label>
                    <input type="text" className="text-center m-auto block" value={email} />
                    <div className="flex flex-col justify-center items-center mt-2">
                        <Button
                            text={"VALIDER"}
                            onClick={InfoEdit}
                            value={"na"}
                            active={"na"}
                        />
                        <span onClick={InfoEdit} className="uppercase text-sm text-custom-blue-2 hover:opacity-70">Annuler</span>
                    </div>

                </form>
            )}

             
            {showPwdPopup && (
                <form className="border-custom-blue-0 border-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-white p-5 z-10">
                    <label htmlFor="id" className="text-center block uppercase text-custom-blue-3 font-bold">Ancien mot de passe</label>
                    <input type="password" className="text-center m-auto block" placeholder='Mon ancien mot de passe'/>
                    <label htmlFor="id" className="mt-3 text-center block uppercase text-custom-blue-3 font-bold">Nouveau mot de passe</label>
                    <input type="password" className="text-center m-auto block" placeholder='Mon nouveau mot de passe' />
                    <label htmlFor="id" className="mt-3 text-center block uppercase text-custom-blue-3 font-bold">Confirmation du mot de passe</label>
                    <input type="password" className="text-center m-auto block" placeholder='Confirmation du mot de passe' />
                    <div className="flex flex-col justify-center items-center mt-2">
                        <Button
                            text={"VALIDER"}
                            onClick={PwdEdit}
                            value={"na"}
                            active={"na"}
                        />
                        <span onClick={PwdEdit} className="uppercase text-sm text-custom-blue-2 hover:opacity-70">Annuler</span>
                    </div>

                </form>
            )}
 
            <div className="w-4/5 h-0.5 bg-custom-blue-2 m-auto mt-5"></div>
            
            <div className="flex justify-between gap-8 py-8 flex-wrap lg:flex-nowrap">
                <TrendyRessources />
                <div className="min-h-fit w-full lg:w-1/4 lg:block flex flex-wrap justify-center gap-8 ">
                    <div className="bg-custom-blue-0 p-4">
                        <div className="uppercase py-1"><span className="font-bold pr-2">{resources}</span> Ressources publiées</div>
                        <div className="uppercase py-1"><span className="font-bold pr-2">{comment}</span> Commentaires postés</div>
                        <div className="uppercase py-1"><span className="font-bold pr-2">{favorite}</span> Ressources favorites</div>
                        <div className="uppercase py-1"><span className="font-bold pr-2">{share}</span> Rssources partagées</div>
                    </div>
                    <LastestPublications />
                </div>
            </div>

           

        </main>
    );
}