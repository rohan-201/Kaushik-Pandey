import { FaInstagram, FaTwitter,  FaLinkedin,  } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";

export default function Social({ type }) {
    let [social] = useState([
      {
        href: "https://twitter.com/SaaSMarketing__?t=Z8DOMSaIhnyRj_v1_c7aSw&s=08",
        icon: {
          icon: FaTwitter,
          fill: clsx('hover:fill-black')
        },
      },
      {
        href: "https://www.linkedin.com/in/kaushik-pandey-66a4931a4 ",
        icon: {
          icon: FaLinkedin,
          fill: clsx('hover:fill-brand-fb')
        },
      },
     
      {
        href: "https://instagram.com/__kaushik18?igshid=ZDdkNTZiNTM= ",
        icon: {
          icon: FaInstagram,
          fill: clsx("hover:fill-[url(#instagram-gradient)]"),
        },
      },
      
    ]);

    return (
      <>
        <div
          className={`flex text-2xl text-gray-500 ${
            type === "footer"
              ? "space-x-4 ml-2 md:space-x-6"
              : "space-x-7 mt-2 text-center md:text-left"
          }`}
        >
          {social.map(({ href, icon }) => {
            return (
              <Fragment key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <icon.icon
                    className={`${icon.fill} transition delay-150`}
                  />
                </a>
              </Fragment>
            );
          })}
        </div>
      </>
    );
}