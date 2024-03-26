"use client";
import React, { useEffect, useState } from "react";

const Language = () => {
  const [langList, setLangList] = useState<any>([]);
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    const langFetch = async () => {
      const res = await fetch("https://hadeethenc.com/api/v1/languages").then(
        (res) => res.json()
      );
      console.log({ res });
      setLangList(res);
    };
    langFetch();
  }, []);

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    lang && setSelected(lang);
  }, []);

  return (
    <select
      onChange={(e) => {
        setSelected(e.target.value);
        localStorage.setItem("lang", e.target.value);
        window.location.reload();
      }}
      value={selected}
      className="text-[13px] w-content max-w-[65px] sm:max-w-[85px] "
    >
      <option value={"@"}>Select...</option>
      {langList?.map((item: any, i: any) => (
        <option key={i} value={item?.code}>
          {item?.native}
        </option>
      ))}
    </select>
  );
};

export default Language;
