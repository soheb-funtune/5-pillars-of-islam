"use client";
import HadeesCard from "@/components/hadees-card/hadees-card";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [hadees, setHadees] = useState([]);

  useEffect(() => {
    // const apiUrl = "https://hadeethenc.com/api/v1/categories/list/?language=hi";
    const apiUrl =
      "https://hadeethenc.com/api/v1/hadeeths/list/?language=hi&category_id=1&page=1&per_page=20";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data?.data);
        setHadees(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-3 flex flex-col gap-3">
      Hadees
      {hadees?.map((item: any) => (
        <HadeesCard {...item} />
      ))}
    </div>
  );
};

export default page;
