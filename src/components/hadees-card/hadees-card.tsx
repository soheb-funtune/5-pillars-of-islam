"use client";
import Link from "next/link";
import React from "react";

const HadeesCard = ({
  title,
  hadeeths_count,
  id,
  category,
}: {
  title: any;
  hadeeths_count: any;
  id: any;
  category?: any;
}) => {
  return (
    <div className="link-tag relative shadow-md rounded-lg px-5 pt-5 pb-6 text-[13px]">
      <p>{hadeeths_count}</p>
      <p>{title}</p>
      <Link
        href={`/hadees/category/${id}`}
        className="absolute right-3 bottom-2 text-red-500 underline"
      >
        In Detail
      </Link>
    </div>
  );
};

export default HadeesCard;
