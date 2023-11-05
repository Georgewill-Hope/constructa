import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between md:w-[80%] xl:w-[70%] mx-auto py-16 text-sm md:text-lg px-5 md:px-0">
      <Link
        href="/"
        className="relative w-[120px] h-[30px] md:w-[180px] md:h-[43.755px]
        "
      >
        <Image
          src={logo}
          alt="logo"
          fill
          sizes={500}
          priority
          className="object-contain object-center"
        />
      </Link>
      <small className="mt-2 md:my-0">Copyright © 2023 Constructa Inc </small>
      <small>All rights reserved</small>
    </footer>
  );
};

export default Footer;
