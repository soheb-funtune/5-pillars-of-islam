"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { singleQuran } = useParams<any>();
  const [surahList, setSurahList] = useState<any>([]);
  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const lang = localStorage.getItem("lang");
        console.log({ singleQuran });
        if (singleQuran) {
          const apiUrl = `https://api.alquran.cloud/v1/quran/hi.hindi`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error("Failed to fetch Quran data");
          }
          const data = await response.json();
          console.log(data?.data?.surahs);
          setSurahList(data?.data?.surahs);
        }
      } catch (error) {
        console.error("Error fetching Quran data:", error);
      }
    };

    fetchQuranData();
  }, [singleQuran]);

  return (
    <div className="lg:max-w-[800px] p-3 m-auto  flex flex-col">
      <h3
        className=" pb-1 mb-3 relative 
       before:absolute before:w-10 before:h-[3px] before:bg-red-500
        before:let-0  before:bottom-0 before:rounded-[40px]"
      >
        Hadees Category
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 ">
        {surahList?.map(({ number, englishName, name, ayahs }: any) => (
          <Link
            key={number + "surah"}
            href={`/quran/${number}`}
            className="link-tag flex flex-col gap-3 relative  cursor-pointer shadow-md rounded-lg px-3 pt-7 pb-5 text-[13px]"
          >
            <p>
              {name} | {englishName}
            </p>
            <div>
              {ayahs?.map(({ number, text }: any) => (
                <small key={number}>{text}</small>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
