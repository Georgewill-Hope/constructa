import { Layout, Contact, Wrap, AboutCard } from "@/src/components";


const About = () => {
  return (
    <Layout navbarStyles="lg:bg-white shadow-md" navbarStyles2="lg:bg-white">
      <main>
        <section className="min-h-screen bg-[url('/images/aboutbg.png')] bg-no-repeat bg-cover bg-right lg:bg-center px-4 pb-10 md:px-0 flex flex-col justify-end ">
          <Wrap wrapStyles="w-[100%] md:w-[80%] xl:w-[70%]">
            <h1 className="text-sm md:mb-3  md:text-lg lg:text-xl text-white">
              ABOUT
            </h1>
            <h2 className="text-2xl md:text-5xl lg:text-6xl text-white">
              THE WAY WE BUILD
            </h2>
          </Wrap>
        </section>

        <section className="relative py-10 lg:py-0 lg:pt-28 before:bg-sketch before:bg-cover before:opacity-10 before:absolute before:content-[' '] before:top-0 before:bottom-0 before:left-0 before:right-0">
          <div className="px-5 lg:px-0 lg:w-[80%] xl:w-[70%] ms-auto flex flex-col md:flex-row lg:justify-between lg:gap-10">
            <div className="mb-10 md:w-[600px] lg:w-full mx-auto">
              <h3 className="text-[18px] md:text-3xl mb-3 xl:text-5xl">
                <span className="font-extrabold">GREAT EXPERIENCES</span> FOR
                <br />
                EVERYONE THROUGHOUT <br /> THE PROJECT LIFECYCLE
              </h3>
              <p className="text-sm xl:text-[18px]">
                It’s the best way to the best outcomes — and we do it every day
                for clients, trade partners, craft professionals and our
                employee owners. With integrity, teamwork and commitment as the
                foundation, we can achieve anything together.
              </p>
            </div>
            <div className="w-full md:w-[300px] lg:w-[600px] mx-auto md:mx-0 rounded-xl shadow-md shadow-black lg:rounded-none lg:shadow-none py-5 lg:pb-10 px-5 lg:pt-8 bg-kiola-blue z-[9]">
              <h3 className="text-white text-sm w-full border-b-2 pb-1">
                ABOUT
              </h3>
              <ul className="text-[10px] lg:text-[8px] text-white">
                <li className="my-3">MISSION & VALUE</li>
                <li className="my-3">OUR COMMUNITY</li>
                <li className="my-3">DIVERSITY EQUITY AND INCLUSION</li>
                <li className="my-3">EMPLOYEE OWNERSHIP</li>
                <li className="my-3">CORPORATE SOCIAL RESPONSIBILITY</li>
                <li className="my-3">CORPORATE SOCIAL RESPONSIBILITY</li>
                <li className="my-3">OUR PEOPLE</li>
                <li className="my-3">OUR HISTORY</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="h-[50vh] lg:h-[60vh] flex items-center justify-center text-center  bg-[url('/images/aboutbg2.png')]  bg-cover bg-no-repeat bg-left md:bg-center md:mb-0">
          <div className="relative text-white w-[94%] h-[80%] flex flex-col items-center justify-center bg-kiola-blue bg-opacity-20 px-3">
            <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl">
              OUR PEOPLE
            </h3>
            <p className="text-sm md:text-lg xl:text-xl my-2 md:my-4">
              Africa's best builders call constructa home. Meet the people
              <br />
              Who create experience for everyone.
            </p>
            <button className="text-sm md:text-lg xl:text-xl bg-kiola-blue border-none py-1 px-3 md:py-2 md:px-5">
              Get Started
            </button>
          </div>
        </section>

        <section className="relative before:absolute before:bottom-0 before:top-0 before:right-0 before:left-0 before:bg-sketch before:bg-no-repeat before:bg-cover before:bg-bottom before:content-[' '] before:opacity-10 py-10 lg:py-32">
          <div className="w-100 md:w-[80%] xl:w-[70%] mx-auto px-5  lg:px-0 flex flex-col gap-10 lg:gap-32">
            <AboutCard
              header1="MISSION & VALUES"
              header2=""
              imgStyles="lg:rounded-s-md"
              aboutStyles="flex-row before:absolute before:bottom-0 before:top-0 before:right-0 before:left-0 before:bg-[url('/images/icon.png')] before:bg-no-repeat before:bg-contain before:h-[350px] before:md:h-full before:bg-center before:md:bg-left before:w-[95%] before:lg:w-[80%] before:mx-auto before:z-[10] before:content-[' '] before:opacity-20"
              message="Our goal is to be the best builder in Africa. Our core values of
          Genuine — We, Not I — and All In guide the way."
              ourImage="/images/aboutImg.png"
            />
            <AboutCard
              aboutStyles="flex-row-reverse"
              imgStyles="lg:rounded-e-md"
              header1="DIVERSITY, EQUITY"
              header2="& INCLUSION"
              message="The best outcomes require teams where every voice is heard and everyone
        can succeed without barriers."
              ourImage="/images/aboutImg1.png"
            />
          </div>
        </section>

        <section className="px-5 lg:px-0">
          <Contact />
        </section>
      </main>
    </Layout>
  );
};

export default About;
