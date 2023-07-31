import React from "react";
import Link from "next/link";
import Wrap from "../wrap/Wrap";

const Contact = () => {
  return (
    <Wrap wrapStyles="flex h-[50vh] md:h-[60vh] items-center justify-center w-[100%] md:w-[80%] xl:w-[70%]">
      <div className="flex items-end shadow-md shadow-black ps-5 h-full w-[100%] relative -mr-36 md:-mr-20 lg:-mr-24 p-2 md:p-5 before:bg-[url('/images/bg3.jpg')] before:bg-cover before:bg-bottom before:mix-blend-overlay before:absolute before:content-[' '] before:top-0 before:bottom-0 before:left-0 before:right-0">
        <h3 className="text-white text-lg md:text-3xl lg:text-5xl xl:text-6xl font-semibold [text-shadow:_0_6px_15px_rgb(_0_0_0.38)]">
          LET'S BUILD
          <br /> TOGETHER
        </h3>
      </div>

      <div
        className="h-52 md:h-[80%] w-72 md:w-72 lg:w-[400px]
       bg-[url('/images/chat-icon.svg')] bg-no-repeat bg-cover bg-bottom flex flex-col justify-center items-center relative -mb-10 md:-mb-5 -ml-12 md:-ml-20 lg:-ml-28 text-center"
      >
        <div>
          <p className="text-white text-xs md:text-lg xl:text-xl">LET'S TALK</p>
          <h4 className="text-white text-xs md:text-lg xl:text-xl font-semibold mb-8">
            NEED TO REACH US?
          </h4>
          <Link
            href="/contact-us"
            className="bg-white py-2 px-5 text-xs md:text-sm xl:text-lg rounded-md"
          >
            Contact US
          </Link>
        </div>
      </div>
    </Wrap>
  );
};

export default Contact;
