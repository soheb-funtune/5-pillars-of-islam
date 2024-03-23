import NamazTabs from "@/components/namaz-tabs/namaz-tabs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-5 bg-white  min-h-[85vh] max-h-[100vh] relative">
      <div className=" flex ">
        <div className=" w-[40%] h-auto ">
          <Image
            src="https://thumbs.dreamstime.com/b/salah-salat-second-five-pillars-islamic-faith-as-obligatory-standardized-prayers-salah-islamic-202001929.jpg?w=400"
            alt="Picture of the author"
            width={200}
            height={300}
            style={{ width: "auto" }}
            className="h-[200px] md:h-[300px]   object-contain"
          />
        </div>
        <div className="w-[70%]">
          <h1 className="text-2xl font-bold">Namaz (Salah)</h1>
          <p className="text-sm mt-3 md:w-[80%] ">
            Muslims pray facing Mecca five times a day: at dawn, noon,
            mid-afternoon, sunset, and after dark. Prayer includes a recitation
            of the opening chapter (sura) of the Qur'an, and is sometimes
            performed on a small rug or mat used expressly for this purpose (see
            image 24). Muslims can pray individually at any location (fig. 1) or
            together in a mosque, where a leader in prayer (imam) guides the
            congregation. Men gather in the mosque for the noonday prayer on
            Friday; women are welcome but not obliged to participate. After the
            prayer, a sermon focuses on a passage from the Qur'an, followed by
            prayers by the imam and a discussion of a particular religious
            topic.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <NamazTabs />
      </div>
    </div>
  );
};

export default page;
