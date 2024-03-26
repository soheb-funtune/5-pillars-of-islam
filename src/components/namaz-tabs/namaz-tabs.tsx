"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Sunnat, Farz, Nafeel } from "./sunnat-link";
import Image from "next/image";

export default function NamazTabs() {
  const [value, setValue] = React.useState<string>("farz");

  const handleChange = (
    event: React.FormEvent<HTMLInputElement>,
    newValue: string
  ) => {
    setValue(newValue);
    console.log({ newValue });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="farz" label="Farz" />
        <Tab value="other" label="Other" />
      </Tabs>
      <div className=" p-3">
        {value === "farz" ? (
          <div>
            <p className="text-sm mt-3 md:w-[80%] ">
              Muslims are obligated to follow the Holy Qur’an’s commands and the
              Noble Prophet’s teaching. Praying five times was made mandatory
              following the Night Ascension when the Noble Prophet set on the
              night journey from Mecca to Jerusalem and then past the Seven
              Skies.{" "}
            </p>
            <h1 className="text-lg my-2 font-bold">
              Name and Timing of the Five Prayers{" "}
            </h1>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="relative pl-3 before:absolute before:w-1 before:h-full before:bg-red-500 before:top-0 before:bottom-0 before:left-0 before:rounded-[40px]">
                <span className="font-semibold ">Jumma Prayer : </span>
                <p>
                  {" "}
                  Juum'ah prayer consists of two rak'ats prayers, as with
                  morning prayer (fajr), offered immediately after Khutbah (the
                  sermon). It is a replacement of Zuhr prayer.
                </p>

                <span className="font-semibold">
                  Rakats : 4 <Sunnat /> + 2 <Farz /> + 4 <Sunnat /> + 2{" "}
                  <Sunnat /> + 2 <Nafeel /> = 4 Total{" "}
                </span>
              </li>
              <li className="relative pl-3 before:absolute before:w-1 before:h-full before:bg-red-500 before:top-0 before:bottom-0 before:left-0 before:rounded-[40px]">
                <span className="font-semibold ">1st Prayer - Fajr : </span>
                <p>
                  {" "}
                  The time for the Fajr salah begins at dawn and ends at
                  sunrise.
                </p>

                <span className="font-semibold">
                  Rakats : 2 <Sunnat /> + 2 <Farz /> = 4 Total{" "}
                </span>
              </li>
              <li className="relative pl-3 before:absolute before:w-1 before:h-full before:bg-red-500 before:top-0 before:bottom-0 before:left-0 before:rounded-[40px]">
                <span className="font-semibold">2nd Prayer - Zuhr : </span>
                <p>
                  The time for the Zuhr salah starts post-noon and ends at the
                  beginning of the last part of the afternoon.
                </p>
                <span className="font-semibold">
                  Rakats : 4 <Sunnat /> + 4 <Farz /> + 2 <Sunnat /> + 2{" "}
                  <Nafeel /> = 12 Total{" "}
                </span>
              </li>
              <li className="relative pl-3 before:absolute before:w-1 before:h-full before:bg-red-500 before:top-0 before:bottom-0 before:left-0 before:rounded-[40px]">
                <span className="font-semibold">3rd Prayer - Asr : </span>
                <p>
                  The time for the Asr salah begins during the later part of the
                  afternoon and ends just before sunset.
                </p>
                <span className="font-semibold">
                  Rakats : 4 <Sunnat /> + 4 <Farz /> = 8 Total{" "}
                </span>
              </li>
              <li className="relative pl-3 before:absolute before:w-1 before:h-full before:bg-red-500 before:top-0 before:bottom-0 before:left-0 before:rounded-[40px]">
                <span className="font-semibold">4th Prayer - Maghrib : </span>
                <p>
                  {" "}
                  The time of the Maghrib salah begins at sunset and ends when
                  the night begins.
                </p>
                <span className="font-semibold">
                  Rakats : 3 <Farz /> + 2 <Sunnat /> + 2 <Nafeel /> = 7 Total{" "}
                </span>
              </li>
              <li className="relative pl-3 before:absolute before:w-1 before:h-full before:bg-red-500 before:top-0 before:bottom-0 before:left-0 before:rounded-[40px]">
                <span className="font-semibold">5th Prayer - Isha : </span>
                <p>
                  {" "}
                  The Isha salah begins at night and ends just before dawn.
                </p>
                <span className="font-semibold">
                  Rakats : 4 <Sunnat /> + 4 <Farz /> + 2 <Sunnat /> + 3 wajib +
                  2 <Sunnat /> + 2 <Nafeel /> = 7 Total{" "}
                </span>
              </li>
            </ul>
            <div className="mt-5">
              <h1 className="text-lg my-2 font-bold">
                Five Prayers in chart form{" "}
              </h1>
              <Image
                src={
                  "https://photo-cdn.urdupoint.com/show_img_new/content/2021/800x400/pic_e8ba7_1621502162.jpg._2"
                }
                width={500}
                height={300}
              />
            </div>
          </div>
        ) : (
          <div>other</div>
        )}
      </div>
    </Box>
  );
}
