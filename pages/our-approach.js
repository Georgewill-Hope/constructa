import React from "react";
import { Contact, Layout, OurApproachCard } from "@/src/components";
import Image from "next/image";

const OurApproach = () => {
  return (
    <Layout navbarStyles="lg:bg-white shadow-md" navbarStyles2="lg:bg-white">
      <main>
        <section className="min-h-screen w-full relative flex items-end">
          <Image
            src="/images/approachbg.png"
            alt="construction"
            placeholder="blur"
            blurDataURL="/images/approachbg.png"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute w-full h-full bg-black/30" />
          <div className="absolute w-full bg-kiola-blue/30 lg:bg-transparent">
            <div className="p-2 lg:bg-kiola-blue/30 w-full md:w-[70%] mx-auto">
              <h1 className="text-white font-semibold">OUR APPROACH</h1>
              <h2 className="text-lg font-semibold text-white md:text-2xl lg:text-5xl xl:text-6xl">
                THE BEST WAY TO THE BEST
              </h2>
              <h2 className="text-lg font-semibold text-white md:text-2xl lg:text-5xl xl:text-6xl">
                OUTCOMES
              </h2>
            </div>
          </div>
        </section>

        <section className=" py-10 lg:py-24 relative before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-sketch before:bg-no-repeat before:bg-cover before:bg-center before:opacity-10 px-2 md:px-0 before:mix-blend-overlay bg-black/50">
          <div className="w-[100%] md:w-[80%] xl:w-[70%] h-[100%] mx-auto text-start md:text-start">
            <h3 className="font-bold text-xl mb-5 md:text-4xl text-center lg:text-start">
              YOU’VE ENVISIONED YOUR
              <br /> NEXT CONSTRUCTION
              <br /> PROJECT.
            </h3>
            <p className="md:text-lg mb-3 lg:mb-5 xl:text-xl text-justify">
              It's distinct and exciting. It's also a difficulty. How do you
              know you'll do it on time and on budget?. This is where we step
              in.
            </p>
            <p className="md:text-lg mb-3 lg:mb-5 xl:text-xl text-justify">
              When the proper people, enthusiasm, and resources come together,
              you get exactly what you want:{" "}
              <span className="font-bold">
                a fantastic experience. You'll have a partner that listens
                carefully, values your viewpoint, and devises the best solution
                to your problem
              </span>
              . We'll work as a team throughout the project life cycle to
              provide the finest possible conclusion.
            </p>
            <p className="md:text-lg mb-3 lg:mb-5 xl:text-xl text-justify">
              Strong communication is essential throughout. Costs are reduced
              when stakeholders collaborate. Risk is controlled. And user
              happiness skyrockets. That is the importance of adopting a
              comprehensive project life cycle perspective, from initial
              planning to move-in and operations.
            </p>
            <p className="md:text-lg mb-3 lg:mb-5 xl:text-xl text-justify">
              We think and act holistically regardless of when we join. As a
              result, your vision is in good hands.
            </p>
            <p className="md:text-lg mb-3 lg:mb-5 xl:text-xl text-justify">
              We believe that every project, regardless of size, deserves the
              finest thinking in the business. You can rely on such dedication
              on every assignment, every day.
            </p>
            <p className="md:text-lg font-semibold xl:text-xl">
              It's to be expected - and the only way we build.
            </p>
          </div>
          
        </section>
        <section className=" pt-10 pb-2 lg:pt-20 relative before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-sketch before:bg-contain before:bg-center before:opacity-10 px-2 md:px-0 before:mix-blend-overlay">
          <OurApproachCard
            containerStyles="flex-row"
            contentStyles="md:-ms-40 lg:-ms-80"
            Header1="CREAING GREAT"
            Header2="EXPERIENCES"
            Header3=""
            message="How do we ensure exceptional experience for everyone? Collaborate with clients, designers and trade partners as early as possible in the project lifecycle."
            ourImages="/images/civil-engineer.png"
          />
          <OurApproachCard
            containerStyles="flex-row-reverse lg:ms-auto"
            contentStyles="md:-me-40 lg:-me-80"
            Header1="SAFETY IS THE MOST"
            Header2="IMPORTANT THING"
            Header3="WE DO, EVERYDAY"
            message="We take safety personally,our vigilance helps keep workers on schedule-and safeky heading home for dinner night after night."
            ourImages="/images/engineer.png"
          />
          <OurApproachCard
            containerStyles="flex-row"
            contentStyles="md:-ms-40 lg:-ms-80 lg:"
            Header1="BEGIN WITH THE  "
            Header2="END IN MIND"
            Header3=""
            message="To achieve the certainty you want, we build quality throughout our process-from beginning to end. So we can build right the fast time"
            ourImages="/images/african-engineer.png"
          />
          <OurApproachCard
            containerStyles="flex-row-reverse lg:ms-auto"
            contentStyles="md:-me-40 lg:-me-80"
            Header1="USING TECHNOLOGY "
            Header2="AS A TOOL FOR "
            Header3="BETTER OUTCOME"
            message="This isn't tech for tech's sake: this is leveraging proven innovation to achieve your vision. From the latest in emerging technologies to sophiscated in-the-field solutions. Our integrated approach will accelerate your success."
            ourImages="/images/projector.png"
          />
        </section>

        <Contact />
      </main>
    </Layout>
  );
};

export default OurApproach;
