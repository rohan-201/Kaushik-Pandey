import Image from "next/legacy/image";

import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";

export default function Projects() {
    let gh = "";
    let [projects] = useState([
      {
        name: "Skailama",
        description:
          "Bring the will to Succeed,Get the Mentors & Opportunities",
        isLeft: true,
        link: "https://www.skailama.com/",
        
        image: {
          src: "",
          alt: "",
          width: 448,
          height: 148,
        },
      },
      {
        name: "cypherock",
        description:
          "We aim to provide web3 education & opportunities to everyone for FREE",
        isLeft: false,
        link: "https://www.cypherock.com/",
        
        image: {
          src: "",
          alt: "",
          width: 500,
          height: 250,
        },
      },
      {
        name: "ghostlii",
        description:
          "Learn from the best Whether it is comedy, cricket, gaming, or creating music - we've got your back. Master your passion by learning from the best!",
        isLeft: true,
        link: "https://ghostlii.com/ ",
        
        image: {
          src: "",
          alt: "",
          width: 448,
          height: 148,
        },
      },
      
    ]);
    return (
      <>
        {/* Projects Starts */}

        <div className="px-6">
          <Waypoints target={'toprojects'}>
            <section id="projects" className="pt-28">
              <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
                Places i have worked
              </h1>
              <div className="flex justify-center">
                <span
                  className="bg-[#6C63FF] w-[260px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                ></span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
                {projects.map(
                  ({ name, description, isLeft, link, icon, image }) => {
                    return (
                      <Fragment key={name}>
                        <div className="flex justify-center">
                          <a
                            className={`group hover:scale-110 ${
                              isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                            } transition delay-75`}
                            href={gh + link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-xl image-full"
                              data-aos="fade-up"
                            >
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">
                                  
                                  {name}
                                </h2>
                                <p>{description}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div></div>
                        <div></div>
                      </Fragment>
                    );
                  }
                )}
              </div>

             
            </section>
          </Waypoints>
        </div>

        {/* Projects Ends */}
      </>
    );
}