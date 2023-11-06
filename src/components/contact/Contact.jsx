import React from "react";
import Link from "next/link";
import Wrap from "../wrap/Wrap";
import Image from "next/image";

const Contact = () => {
  return (
    <article className="w-full md:w-[70%] mx-auto px-2 md:px-0">
      <div className="flex h-[50vh] md:h-[60vh] items-center justify-center w-full ">
        <div className="flex items-end ps-5 h-full w-[500px] md:w-full relative -mr-10 md:-mr-20 lg:-mr-24 p-2 md:p-5 rounded-lg shadow-md shadow-gray-950/50">
          <Image
            src="/images/bg3.jpg"
            alt="chat-icon"
            fill
            sizes="(max-width: 768px)100vw,1000px"
            priority
            className="object-cover object-center rounded-lg"
          />
          <div className="absolute h-full w-full bg-black/50 top-0 left-0 rounded-lg" />
          <h3 className="absolute text-white text-3xl md:text-5xl xl:text-6xl font-semibold [text-shadow:_0_5px_20px_#000000]">
            LET'S BUILD
            <br /> TOGETHER
          </h3>
        </div>

        <div
          className="h-52 md:h-96 w-72 lg:w-[400px]
       flex flex-col justify-center items-center relative -mb-10 md:-mb-5 -ml-10 md:-ml-20 lg:-ml-28 text-center"
        >
          <Image
            src="/images/chat-icon.svg"
            alt="chat-icon"
            fill
            priority
            className="object-contain"
          />
          <div className="absolute">
            <h4 className="text-white text-xs md:text-lg xl:text-xl font-semibold mb-8">
              NEED TO REACH US?
            </h4>
            <Link
              href="/contact-us"
              className="bg-white py-2 px-5 text-xs md:text-sm xl:text-lg rounded-md font-bold"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
