import Image from "next/image";
import React from "react";

const CareerCard = ({ title,img }) => {
  return (
    <div className="w-full lg:flex-1 rounded-xl cursor-pointer shadow-black/20 shadow-md group">
      <div className="relative w-full h-[400px]">
        <Image
          src={img}
          alt="construction"
          fill
          priority
          className="object-cover object-center rounded-t-xl"
        />
        <div className="absolute w-full h-full bg-black/40 rounded-t-xl" />
      </div>
      <div className="bg-white py-5 text-center border-t-4 border-black rounded-b-xl group-hover:bg-kiola-blue/80 group-hover:text-white duration-700">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default CareerCard;
