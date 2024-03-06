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
    <tr>
      <td className="w-48 text-center">#{id}</td>
      <td className="w-96 text-left">{name}</td>
      <td className="w-48 text-center">{author}</td>
      <td className="w-48 text-center">{category}</td>
      <td className="w-48 text-center">{date}</td>
      <td className="w-48 text-right">99</td>
    </tr>
  );
};

export default RessourceList;
