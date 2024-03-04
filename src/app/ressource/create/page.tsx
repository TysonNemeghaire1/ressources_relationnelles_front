'use client'

import ActionRessource from "@/components/actionRessource";
import MyWysiwygEditor from "@/components/editor/editor";
import Title from "@/components/texts/titlePage";
import { SetStateAction, useState } from "react";

export default function Page({}) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    }; 

    return (
        <div style={{backgroundColor:'white'}} className="flex flex-col p-10 ">
            <div className="flex gap-5 h-full flex-col sm:flex-row">
                <div className="w-full sm:w-4/5 flex flex-col h-full">
                    <Title>PUBLIER UNE RESSOURCE</Title>
                    <div className="flex flex-col">
                        <div className="w-full h-auto h-1000">
                            <MyWysiwygEditor />
                        </div>
                    </div>
                </div>
                <aside className="flex flex-col lg:block lg:w-1/4 justify-between">
                    <div className="mb-5">
                        <p>CATÉGORIE</p>
                        <select value={selectedValue} onChange={handleChange} className="border border-gray-300 rounded p-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none">
                            <option value="">Sélectionnez une option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <ActionRessource action={"PUBLIER"} item={"LA RESSOURCE"} handleClick={undefined} />
                    <div className="w-full mt-2">
                        <button className="bg-blue-100 w-full p-1 px-10 text-blue-700 rounded">
                            POSTER EN PRIVÉ
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    )
}