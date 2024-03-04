import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importez les styles CSS de react-quill
import Button from '../trendyRessources/button';

// Importez react-quill dynamiquement pour éviter les problèmes de rendu côté serveur
const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' },{ indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
};

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

const MyWysiwygEditor = () => {
    const [value, setValue] = useState('');

    return (
        <div style={{height:300, justifyContent:'space-between'}} className='gap-10'>
            <QuillNoSSRWrapper 
                theme="snow" 
                value={value} 
                onChange={setValue} 
                modules={modules} 
                formats={formats}
            />
            <div className="bg-blue-100  w-full flex items-center p-2 justify-end mt-2">
                <button className='bg-white p-1 px-10 text-blue-700 rounded' onClick={()=>undefined}>Ajouter un fichier</button>
            </div>
        </div>
    );
};

export default MyWysiwygEditor;
