"use client";
import HadeesCard from "@/components/hadees-card/hadees-card";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [hadees, setHadees] = useState<any>([]);

  useEffect(() => {
    const lang = localStorage.getItem("lang");

    // const apiUrl =  "https://hadeethenc.com/api/v1/hadeeths/list/?language=hi&category_id=2&page=1&per_page=20";
    const apiUrl = `https://hadeethenc.com/api/v1/categories/roots/?language=${lang}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHadees(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
        {hadees?.map(({ id, hadeeths_count, title }: any) => (
          <Link
            href={`/hadees/${id}`}
            className="link-tag flex flex-col gap-3 relative  cursor-pointer shadow-md rounded-lg px-3 pt-7 pb-5 text-[13px]"
          >
            <small className="absolute right-3 top-2">
              {hadeeths_count} hadees Available
            </small>
            <p>{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
