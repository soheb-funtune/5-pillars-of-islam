"use client";
/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams<{ id: string }>();
  const [hadees, setHadees] = useState<any>();

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    const apiUrl = `https://hadeethenc.com/api/v1/hadeeths/one/?language=${lang}&id=${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHadees(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSpeech = (text: string) => {
    const msg = new SpeechSynthesisUtterance();
    console.log("called !");
    let lang = localStorage.getItem("lang");
    msg.text = text || "Good Morning";
    msg.lang = "en-US";
    // msg.lang = `${lang}-${lang?.toUpperCase()}` || "en-US";
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="p-5 lg:m-auto lg:max-w-[800px] cursor-pointer text-black">
      {/* Single Hadees */}
      <div className="flex flex-col gap-3 text-[13px] ">
        <p className="relative">
          {hadees?.hadeeth}{" "}
          <button
            className="absolute right-0 -top-5"
            onClick={() => handleSpeech(hadees?.hadeeth)}
          >
            🔊
          </button>
        </p>
        <p className="relative">
          <span className="bg-green-300 px-2 py-1 text-white underline">
            Explaination :
          </span>{" "}
          {hadees?.explanation}
          <button
            className="absolute right-0 -top-5"
            onClick={() => handleSpeech(hadees?.explanation)}
          >
            🔊
          </button>
        </p>
        <p className="flex justify-between">
          <span className="underline">{hadees?.grade}</span>
          <span className="underline">{hadees?.attribution}</span>
        </p>
        <div className="flex flex-col gap-1 ml-3">
          <ul style={{ listStyle: "circle" }}>
            {hadees?.hints?.map((item: any, i: any) => (
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
