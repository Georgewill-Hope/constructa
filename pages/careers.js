import { CareerCard, Contact, Layout } from "@/src/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const career = () => {
  return (
    <Layout navbarStyles="lg:bg-white shadow-md" navbarStyles2="lg:bg-white">
      <main className="w-full">
        <section className="min-h-screen w-full relative">
          <Image
            src="/images/career2.jpg"
            alt="construction"
            placeholder="blur"
            blurDataURL="/images/career2.jpg"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute h-full w-full flex items-end bg-gradient-to-r from-black to-transparent">
            <div className="w-[80%] xl:w-[70%] mx-auto py-10 flex flex-col gap-3">
              <h1 className="font-semibold text-white text-2xl md:text-4xl spaceX underline">
                CONSTRUCTA CAREERS 
              </h1>
              <Link
                href="/contact-us"
                className="bg-kiola-blue px-5 py-2 lg:py-3 rounded-sm font-bold w-fit text-sm"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full md:w-[70%] mx-auto flex flex-col lg:flex-row justify-center gap-5 px-2 lg:px-0 my-20">
          <div className="flex-1 flex flex-col gap-5">
            <div className="text-2xl font-semibold spaceX text-center lg:text-start">
              <h2>It's Your Career.</h2>
              <h2>Make it Matter.</h2>
              <div className="h-1 w-20 mx-auto lg:mx-0 bg-kiola-blue" />
            </div>
            <div className="flex flex-col gap-2 text-justify">
              <p>
                At Constructa, you build what matters—whether it’s the career
                you want, crucial work skills, strong relationships or new
                digital technologies. There are big jobs to be done
                worldwide—building critical infrastructure, bolstering local
                economies, meeting the demand for energy—and that work is
                powered by our people.
              </p>
              <p>
                Every single Constructa employee moves our company forward.
                Piece by piece, part by part, person by person. Together we
                create sustainable, world-changing solutions that impact lives
                around the globe. Join our winning team and help build a better
                world.
              </p>
            </div>
          </div>
          <div className="relative w-full lg:h-[420px] lg:flex-1">
            <Image
              src="/images/career1.jpg"
              alt="construction"
              fill
              priority
              className="object-cover object-center rounded-md "
            />
            <div className="absolute w-full h-full bg-black/50" />
          </div>
        </section>

        <section className="bg-gradient-to-r  from-yellow-100 to-transparent py-10">
          <div className="w-full px-2 lg:px-0 min-h-[70vh] md:w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-7 lg:gap-3">
            <CareerCard title="SEARCH FOR JOBS" img="/images/search.jpg" />
            <CareerCard
              title="DIVERSITY & INCLUSION"
              img="/images/helmet.jpg"
            />
            <CareerCard title="WHY CHOOSE CONSTRUCTA?" img="/images/why.jpg" />
          </div>
        </section>

        <section className="mt-20">
          <Contact />
        </section>
      </main>
    </Layout>
  );
};

export default career;
