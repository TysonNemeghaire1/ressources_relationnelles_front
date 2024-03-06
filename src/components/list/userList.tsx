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
    <tr>
      <td className="w-48 text-center">{id}</td>
      <td className="w-48 text-center">{login}</td>
      <td className="w-96 text-center"></td>
      <td className="w-48 text-center"></td>
      <td className="w-48 text-center">{mail}</td>
      <td className="w-48 text-center">{inscription}</td>
    </tr>
  );
};

export default UserList;
