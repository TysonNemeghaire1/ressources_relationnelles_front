'use client';

import React, { useState } from 'react';
import Button from "@/components/lightButton/lightButton";

export default function Page() {
    
    const InfoEdit = () => {
        console.log("MODIFIER MES INFORMATIONS button clicked");
    };

    const PasswordEdit = () => {
        console.log("MODIFIER MON MOT DE PASSE button clicked");
    };

    return (
        <div className="flex justify-between">
            <h1>MON COMPTE</h1>
            <div>
                <Button
                    text={"MODIFIER MES INFORMATIONS"}
                    onClick={InfoEdit}
                    value={"na"}
                    active={"na"}
                />
                <Button
                    text={"MODIFIER MON MOT DE PASSE"}
                    onClick={PasswordEdit} 
                    value={"na"}
                    active={"na"}
                />
            </div>
        </div>
    );
}