"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams<{ id: string }>();
  const [hadees, setHadees] = useState<any>();

  useEffect(() => {
    const apiUrl = `https://hadeethenc.com/api/v1/hadeeths/one/?language=hi&id=${id}`;
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
    <div className="p-5 lg:m-auto lg:max-w-[800px]">
      {/* Single Hadees */}
      <div className="flex flex-col gap-3 text-[13px] ">
        <p>{hadees?.hadeeth}</p>
        <p>Explaination : {hadees?.explanation}</p>
        <p className="flex justify-between">
          <span>{hadees?.grade}</span>
          <span>{hadees?.attribution}</span>
        </p>
        <div className="flex flex-col gap-1 ml-3">
          <ul style={{ listStyle: "circle" }}>
            {hadees?.hints?.map((item, i) => (
              <li key={i}>
                {" "}
                <small className="text-[90%]">{item}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
