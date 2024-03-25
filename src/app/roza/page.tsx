import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="p-5 bg-white  min-h-[85vh] max-h-[100vh] flex relative">
      <div className=" w-[40%] h-auto ">
        <Image
          src="https://media.istockphoto.com/id/1304710913/vector/muslim-family-praying-before-having-iftar.jpg?s=612x612&w=0&k=20&c=eA-0NyRdMeWwIhHkiUqtiK_bP9W8gYsYKeBd_5n8hk0="
          alt="Picture of the author"
          width={100}
          height={200}
          style={{ width: "auto" }}
          className="h-[200px] md:h-[300px]   object-contain"
        />
      </div>
      <div className="w-[70%]">
        <h1 className="text-2xl font-bold">Roza (Fasting)</h1>

        <p className="text-sm mt-3 md:w-[80%] ">
          In Islam, fasting is the practice of abstaining, usually from food,
          drink, sexual activity and anything which substitutes food and drink.
          During the holy month of Ramadan, sawm is observed between dawn and
          sunset when the adhan of the Maghrib prayer is sounded. Ramadan is the
          ninth month of the Muslim lunar calendar and fasting is a requirement
          for Muslims as it is the fourth of the five pillars of Islam.
        </p>
      </div>
    </div>
  );
};

export default page;
