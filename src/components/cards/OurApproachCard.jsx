import Image from "next/legacy/image";
import React from "react";

const OurApproachCard = ({
  containerStyles,
  contentStyles,
  Header1,
  Header2,
  Header3,
  message,
  ourImages
}) => {
  return (
    <section
      className={`w-[100%] md:w-[80%] lg:w-[85%] md:flex ${containerStyles} mb-10 md:mb-20 md:items-center md:mx-auto lg:mx-0`}
    >
      <div className="relative h-[45vh] lg:h-[60vh] w-[100%] lg:w-[100%]">
        <Image
          src={ourImages}
          alt="pic"
          placeholder="blur"
          blurDataURL={ourImages}
          sizes={500}
          objectFit="cover"
          layout="fill"
          className="object-center rounded-t-xl lg:rounded-none"
        />
      </div>
      <div
        className={`bg-kiola-blue p-3 md:p-7 md:w-[550px] lg:w-[80%] md:h-[35vh] lg:h-[50vh] md:flex md:flex-col md:items-start md:justify-center relative ${contentStyles} lg:p-10 rounded-b-xl lg:rounded-xl pb-10`}
      >
        <h3 className="font-semibold text-white text-xl mb-1 lg:mb-2 lg:text-2xl xl:text-3xl ">
          {Header1} <br />
          {Header2}
          {Header3}
        </h3>
        <p className="text-white text-[14px] mb-3 lg:mb-5 lg:text-[16px] xl:text-[20px]">
          {message}
        </p>
        <button className="bg-white font-medium text-kiola-blue px-4 py-2 rounded-md text-xs lg:text-sm xl:text-lg">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default OurApproachCard;
