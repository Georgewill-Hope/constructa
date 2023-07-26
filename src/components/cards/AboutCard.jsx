import React from "react";
import Image from "next/image"

const AboutCard = ({
  aboutStyles,
  header1,
  header2,
  message,
  imgStyles,
  ourImage,
}) => {
  return (
    <div
      className={`relative md:flex items-center justify-between lg:gap-5 z-[9] ${aboutStyles} py-5 shadow-lg md:shadow-none`}
    >
      <div
        className={`relative h-[300px] xl:h-[400px]  md:w-[800px] rounded-t-md lg:rounded-t-none ${imgStyles}`}
      >
        <Image
          src={ourImage}
          alt="pic"
          sizes={500}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="px-2 md:px-0">
        <h3 className="font-bold text-lg md:text-xl my-2 md:mb-2 xl:text-3xl">
          {header1}
          <br />
          {header2}
        </h3>
        <p className="mb-4 xl:text-lg">{message}</p>
        <button className="bg-kiola-blue px-3 py-1 xl:text-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
