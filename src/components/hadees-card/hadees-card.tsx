"use client";
import Link from "next/link";
import React from "react";

const HadeesCard = ({
  title,
  hadeeths_count,
  id,
}: {
  title: any;
  hadeeths_count: any;
  id: any;
}) => {
  return (
    <Link
      href={`/hadees/${id}`}
      className="shadow-sm rounded-lg px-3 py-2 text-[13px]"
    >
      <p>{hadeeths_count}</p>
      <p>{title}</p>
    </Link>
  );
};

export default HadeesCard;
