import React from "react";
import Image from "next/image";
import { Layout, Contact, Wrap } from "@/src/components";
import classes from "@/styles/home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <Layout
      navbarStyles="lg:bg-white shadow-md"
      navbarStyles2="lg:bg-none shadow-none"
    >
      <main>
        <section
          className={`flex items-end bg-[url('/images/bg1.jpg')] bg-no-repeat bg-cover bg-bottom pt-40 pb-28 md:pb-0 md:pt-12 lg:pt-24 xl:pt-32 ${classes.hero_section}`}
          id={classes.hero_section}
        >
          <Wrap wrapStyles="flex flex-row items-center w-[100%] md:w-[80%] xl:w-[70%] justify-center md:justify-between mx-auto px-5 md:px-0 lg:px-0 text-center md:text-start">
            <div className="w-[100%] md:-mr-32 xl:-mr-60">
              <h1 className="text-3xl  md:text-5xl lg:text-6xl xl:text-7xl">
                Building Dreams,
                <br /> Shaping Futures.
              </h1>
              <p className="text-xs my-2 md:my-5 xl:text-lg">
                Welcome to Constructa - Your Trusted Partner in Construction.
                <br />
                Transform your vision into reality with Constructa, where
                <br />
                exceptional design meets expert craftsmanship.
              </p>
              <div className="mt-2">
                <button className="bg-kiola-blue  text-white text-sm px-5 xl:px-10 py-2 xl:py-4 xl:text-lg">
                  Request a Consultation
                </button>
              </div>
            </div>
            <div className="hidden md:grid relative h-[500px] w-[500px] lg:h-[550px] lg:w-[700px] xl:h-[600px]">
              <Image
                src="/images/man4.png"
                alt="man"
                fill
                sizes={500}
                priority
                className="hidden md:grid object-fit object-contain object-center"
              />
            </div>
          </Wrap>
        </section>

        <section className="relative py-20 md:py-40 xl:py-60 before:absolute before:bottom-0 before:top-0 before:right-0 before:left-0 before:bg-sketch before:bg-no-repeat before:bg-cover before:bg-bottom before:content-[' '] before:opacity-30 px-5 md:px-0">
          <Wrap wrapStyles="flex flex-col w-[100%] md:w-[80%] xl:w-[70%] md:gap-16">
            <div className="z-[9]">
              <h2 className="font-bold text-xl md:text-3xl">
                WE LOVE TO BUILD.
              </h2>
              <h3 className="text-xl md:text-3xl mb-1 md:my-2">
                IT'S WHO WE ARE AND <br /> WHAT WE DO.
              </h3>
              <p className="text-gray-800 mb-3 md:mb-6 md:text-lg ">
                Together, we conquer challenges and achieve exceptional
                outcomes. At
                <br />
                Constructa, collaboration is key.
              </p>
              <Link href="/about">
                <button className="bg-kiola-blue text-white px-3 py-2">
                  About Constructa
                </button>
              </Link>
            </div>

            <div className="md:self-end mt-10 z-[9]">
              <h2 className="text-xl md:text-3xl">
                A TRUSTED, <br /> COLLABORATIVE PARTNER
              </h2>
              <h3 className="font-bold text-xl md:text-3xl mb-1 md:my-2">
                FOCUSED ON YOUR GOALS
              </h3>
              <p className="text-gray-800 mb-3 md:mb-6 md:text-lg">
                From industry-leading safety and quality practices to a
                relentless focus on progressive
                <br /> delivery, innovation, and technology, we ensure your
                peace of mind.
              </p>
              <button className="bg-kiola-blue text-white px-3 py-2 ">
                Learn More
              </button>
            </div>
          </Wrap>
        </section>
        <section className="px-5 md:px-0">
          <Contact />
        </section>
      </main>
    </Layout>
  );
}
