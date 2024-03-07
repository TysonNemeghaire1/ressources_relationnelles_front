"use client";
import { formatDate } from "@/hooks/date";
import Link from "next/link";
import React from "react";

interface DataProps {
  id: string;
  title: string;
  category: string;
  publish_date: any;
  author: string;
  content: string;
}

interface RessourceCardProps {
    data: DataProps;
    isTrendy: boolean;
}

const RessourceCard: React.FC<RessourceCardProps> = ({ data, isTrendy }) => {
    const truncateString = (str: string, num: number) =>
    str.length <= num ? str : str.slice(0, num) + "...";

  return (
    <Link href={`ressource/${data.id}`}>
      <div className={`${isTrendy ? "" : "flex flex-col gap-3"} w-full p-2 hover:bg-custom-blue-0`}>
        <div
          className={`${isTrendy ? "flex" : "flex flex-col gap-3"} w-full justify-between flex-nowrap`}
        >
          <p
            className={`${isTrendy ? "w-1/3 sm:w-1/2" : "w-full"} text-black font-bold text-lg`}
          >
            {data.title}
          </p>
          <div
            className={`${isTrendy ? "w-2/3 sm:w-1/2" : "w-full"} text-right italic font-light`}
          >
            <p>
              <span className="font-bold">{data.category}</span> - {formatDate(data?.publish_date?.date)} - {data.author}
            </p>
          </div>
        </div>
        <p className="text-black font-light text-justify">{truncateString(data.content, 200)}</p>
      </div>
    </Link>
  );
};

export default RessourceCard;
