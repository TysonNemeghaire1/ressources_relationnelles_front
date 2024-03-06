"use client";
import Link from "next/link";
import React from "react";

interface RessourceListProps {
    id: string; 
    name: string;
    category: string;
    date: string;
    author: string;
}

const RessourceList: React.FC<RessourceListProps> = ({ id, name, category, date, author }) => {
    const truncateString = (str: string, num: number) =>
    str.length <= num ? str : str.slice(0, num) + "...";

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-stat-ressources gap-1 rounded hover:bg-custom-blue-0 p-1">
      <div>#{id}</div>
      <div>{name}</div>
      <div>{author}</div>
      <div>{category}</div>
      <div className="md:text-center">{date}</div>
      <div className="md:text-center">999</div>
    </div>
  );
};

export default RessourceList;
