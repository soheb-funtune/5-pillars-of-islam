import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="p-5 bg-white  min-h-[85vh] max-h-[100vh] flex relative">
      <div className=" w-[40%] h-auto ">
        <Image
          src="https://thumbs.dreamstime.com/z/d-illustration-muslim-tawheed-tawhid-arabic-means-attributing-oneness-to-allah-describing-him-as-being-one-unique-260575128.jpg?w=992"
          alt="Picture of the author"
          width={100}
          height={200}
          style={{ width: "auto" }}
          className="h-[200px] md:h-[300px]   "
        />
      </div>
      <div className="w-[70%]">
        <h1 className="text-2xl font-bold">Shahada</h1>
        <p className="text-sm mt-3 ">
          The belief that "There is no god but God, and Muhammad is the
          Messenger of God" is central to Islam. This phrase, written in Arabic,
          is often prominently featured in architecture and a range of objects,
          including the Qur'an, Islam's holy book of divine revelations. One
          becomes a Muslim by reciting this phrase with conviction.{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
