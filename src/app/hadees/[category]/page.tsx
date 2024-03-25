"use client";
import HadeesCard from "@/components/hadees-card/hadees-card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { category } = useParams<{ category: string }>();
  const [hadees, setHadees] = useState([]);

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    // const apiUrl =  "https://hadeethenc.com/api/v1/hadeeths/list/?language=hi&category_id=2&page=1&per_page=20";
    const apiUrl = `https://hadeethenc.com/api/v1/hadeeths/list/?language=${lang}&category_id=${category}&page=1&per_page=20`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data?.data);
        setHadees(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);
  return (
    <div className="lg:max-w-[800px] p-3 m-auto flex flex-col gap-3">
      <h3
        className=" pb-1 mb-3 relative pl-3
       before:absolute before:w-10 before:h-[3px] before:bg-red-500
        before:let-0  before:bottom-0 before:rounded-[40px]"
      >
        Hadees List
      </h3>
      {hadees?.map((item: any) => (
        <HadeesCard {...item} category={true} />
      ))}
    </div>
  );
};

export default page;
