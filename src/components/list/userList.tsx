"use client";
import Link from "next/link";
import React from "react";

interface UserListProps {
    id: string;
    login: string;
    mail: string;
    inscription: string;
}

const UserList: React.FC<UserListProps> = ({ id, login, mail, inscription }) => {
    const truncateString = (str: string, num: number) =>
    str.length <= num ? str : str.slice(0, num) + "...";

  return (
    <div className="grid grid-cols-2 md:grid-cols-stat-account gap-1 rounded hover:bg-custom-blue-0 p-1">
      <div>{id}</div>
      <div>{login}</div>
      <div>{mail}</div>
      <div className="md:text-center">{inscription}</div>
    </div>
  );
};

export default UserList;
