"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import logo from "../../../public/images/logo.png";

const Navbar = ({ navbarStyles, navbarStyles2 }) => {
  const [nav, setNav] = useState(false);
  const [navBaground, setNavBackground] = useState(false);
  const [windowHeight, setWindowHeight] = useState("");
  const path = useRouter().pathname;

  useEffect(() => {
    const navColor = () => {
      windowHeight >= 80 ? setNavBackground(true) : setNavBackground(false);
    };

    window.addEventListener("scroll", () => {
      setWindowHeight(window.scrollY);
      navColor();
    });
    return () => window.removeEventListener("scroll", () => {});
  }, [windowHeight]);

  const handleClick = () => {
    setNav((prev) => !prev);
  };

  const links = [
    {
      link: "/",
      rout: "Home",
    },
    {
      link: "/about",
      rout: "About",
    },
    {
      link: "/our-approach",
      rout: "Our Approach",
    },
    {
      link: "/careers",
      rout: "Careers",
    },
  ];

  return (
    <>
      <nav>
        <div
          className={`hidden w-[80%] xl:w-[70%]  mx-auto lg:flex items-center justify-between p-5 fixed right-0 left-0 lg:top-12 z-10 duration-500 ease-in-out ${
            navBaground ? navbarStyles : navbarStyles2
          }`}
        >
          <Link href="/">
            <div className="relative w-[120px] h-[30px] md:w-[180px] md:h-[43.755px] mr-auto">
              <Image
                src={logo}
                alt="logo"
                layout="fill"
                className="object-contain object-center"
                priority
              />
            </div>
          </Link>
          <ul className="mr-5 xl:mr-10 items-center hidden lg:flex lg:text-lg xl:text-xl">
            {links.map((link) => (
              <motion.li key={link.rout} className="mx-3">
                <Link
                  href={link.link}
                  className={
                    path === link.link
                      ? "text-kiola-blue font-semibold"
                      : "hover:text-kiola-blue duration-500"
                  }
                >
                  {link.rout}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="hidden lg:inline-block font-mono">
            <Link
              href="/contact-us"
              className="bg-kiola-blue px-5 py-2 text-white text-lg lg:text-lg xl:text-xl"
            >
              Contact Us:
            </Link>
          </div>
        </div>

        {/* mobile navbar */}

        <div className={`lg:hidden w-[100%]  z-10 ease-in-out duration-500`}>
          <div className="bg-white flex justify-between items-center p-5 fixed w-full z-10 shadow-md">
            <Link href="/">
              <div className="relative w-[120px] h-[30px]">
                <Image
                  src={logo}
                  alt="logo"
                  layout="fill"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </Link>
            {nav ? (
              <AiOutlineClose
                size={30}
                onClick={handleClick}
                className="text-kiola-blue duration-500 ease-in-out  cursor-pointer"
              />
            ) : (
              <AiOutlineMenu
                size={30}
                onClick={handleClick}
                className="text-kiola-blue duration-500 ease-in-out cursor-pointer"
              />
            )}
          </div>
          <ul
            className={`bg-white flex flex-col items-center justify-evenly text-lg md:text-xl fixed top-[75px] bottom-1 z-10 ${
              nav ? "right-1 left-1" : "-left-96"
            } ease-in-out duration-500`}
          >
            {links.map((link) => (
              <motion.li key={link.rout} className="mx-3">
                <Link
                  href={link.link}
                  className={
                    path === link.link
                      ? "text-kiola-blue font-semibold"
                      : "hover:text-kiola-blue duration-500"
                  }
                >
                  {link.rout}
                </Link>
              </motion.li>
            ))}
            <li className="my-3 bg-kiola-blue px-4 py-1 rounded-md text-white">
              <Link href="/contact-us">Contact Us:</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
