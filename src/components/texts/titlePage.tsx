import React from 'react'

interface Title{
    children:any
}

const Title: React.FC<Title> = ({ children }) => {
    return (
        <h1 className="font-julius text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
            {children}
        </h1>
    );
};

export default Title;
