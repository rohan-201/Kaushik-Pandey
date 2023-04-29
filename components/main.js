import Image from "next/image";
import Typed from "react-typed";
import { FaUserAlt } from "react-icons/fa";
import { MdCode } from 'react-icons/md'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import About from "./section/about";
import Projects from "./section/projects";
import Contact from "./section/contact";
import { Toaster } from "react-hot-toast";
import Social from "./dust/social";
import Waypoints from "./dust/waypoints";

export default function Main() {
    return (
      <>
        <Toaster />
        {/* Header Starts */}
        <Waypoints target={'tohome'}>
          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 px-4">
              <div className="pt-52">
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-left text-base-900 sm:leading-none md:text-3xl lg:text-4xl">
                  <span
                    className="inline md:block"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    Hi <span className="animate-wave inline-block">👋🏼</span>,
                    I&apos;m Kaushik Pandey.
                  </span>
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block md:mt-0 mt-2"
                >
                  {`Someone who likes to do `}
                  <Typed
                    strings={["Content writing", "Copywriting", " Growth" , "Marketing"]}
                    typeSpeed={70}
                    backSpeed={50}
                    backDelay={40}
                    loop
                  />
                </p>
                <Social type={"hero"} />

               
              </div>

              <div className="flex justify-center md:pt-44 pt-5 md:mx-0 mx-5">
                <Image
                  src="/img/peep.svg"
                  alt="hero image"
                  className="md:mt-0 z-50"
                  width={250}
                  height={200}
                  data-aos="fade-up-left"
                />
                <div className="absolute mt-16 mr-5 md:mx-0 mx-5">
                  <Image
                    src="/img/blob/1.svg"
                    alt="blob"
                    width={350}
                    height={350}
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
                  />
                </div>
              </div>
            </div>

            <div className="animate-sb pt-36 flex justify-center">
              <a href="#about">
                <IoIosArrowDropdownCircle className="scale-[120%] hover:scale-[150%] transition delay-150" />
              </a>
            </div>
          </div>
        </Waypoints>
        {/* Header Ends */}

        <About />
        <Projects />
        <Contact />
      </>
    );
}