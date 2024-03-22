"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
  addons: any; // Change type to string[]
};

const AddonsCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <h4> AddonsCard</h4>
        <div className="flex flex-col gap-2">
          {["CPA", "llpaid"]?.map(
            (
              item,
              i // Removed unnecessary typing
            ) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <input
                  id={item}
                  value={item}
                  type="checkbox"
                  {...register(`addons.${i}`)}
                />
                <label className="" htmlFor={item}>
                  {" "}
                  {item}
                </label>
              </div>
            )
          )}
        </div>
        <button type="submit" className="bg-green-300 px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddonsCard;
