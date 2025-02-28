import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Figma from "../assets/figma.svg";
import Tailwind from "../assets/tailwind.svg";
import Figdark from "../assets/figma-mockup-dark.svg";
import figLight from "../assets/figma-mockup-light.svg";
import ReactDark from "../assets/react-dark.svg";
import ReactLight from "../assets/reactLight.svg";
import Reacts from "../assets/react.svg";
import Webpack from "../assets/webpack.svg";
import WebDark from "../assets//webpack-dark.svg";
import WebLight from "../assets/webpack Light.svg";
import HugoDark from "../assets/hugo-dark.svg";
import HugoLight from "../assets/hugo Light.svg";
import Hugo from "../assets/hugo-letters.svg";
import { motion } from "framer-motion";

const ProHero = ({ darkMode }) => {
  return (
    <div
      className={`border-t border-b ${
        darkMode
          ? "dark:bg-gray-800 dark:border-gray-700"
          : "bg-gray-50 border-gray-700 "
      }`}
    >
      <div className="max-w-[1440px] px-4 py-8 mx-auto lg:py-24">
        <div className="">
          <div className="grid items-center mb-32 justify-center mx-auto grid-cols-1 lg:gap-28 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="flex flex-row  mb-8 gap-4 items-center">
                <img src={Figma} alt="Logo" className="h-10 w-10" />
                <FaPlus
                  className={`h-5 w-5 font-bold ${
                    darkMode ? "text-gray-400" : " text-gray-500"
                  } `}
                />
                <img src={Tailwind} alt="Logo" className="h-10 w-10" />
              </div>
              <div>
                <blockquote className="mb-8">
                  <h3 className="mb-2 text-[16px] md:text-[32px] font-bold">
                    Figma design kit built for integration with Tailwind CSS
                  </h3>
                  <p
                    className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                      darkMode ? "dark:text-gray-400 " : "text-gray-500"
                    }`}
                  >
                    The Figma file is built using the utility classes from
                    Tailwind CSS meaning that you won't have to write any extra
                    classes.
                  </p>
                </blockquote>
                <div className="flex flex-col md:flex-row gap-6">
                  <div
                    className={`${
                      darkMode
                        ? "text-gray-400 hover:bg-gray-700"
                        : "text-gray-500 hover:bg-gray-800 "
                    } border inline-flex items-center cursor-pointer font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200 text-white px-5 py-2.5 cursor gap-2 `}
                  >
                    <p>Open with ChatGPT</p>
                    <MdOutlineArrowRightAlt className="w-6 h-6" />
                  </div>

                  <div className="inline-flex items-center cursor-pointer font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-purple-800 bg-purple-600 text-white px-5 py-2.5 cursor gap-2 ">
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center">
            {darkMode ? (
                  <motion.img
                    key="darkImage"
                    src={Figdark}
                    alt="image"
                    className="mx-auto rounded-xl max-w-full"
                    initial={{ opacity: 0, y: 20 }} // Start from slightly below & invisible
                    animate={{ opacity: 1, y: 0 }} // Fade in & slide up
                    exit={{ opacity: 0, y: -20 }} // Fade out & slide up
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                ) : (
                  <motion.img
                    key="lightImage"
                    src={figLight}
                    alt="image"
                    className="mx-auto rounded-xl max-w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                )}
            </div>
          </div>

          <div className="grid items-center mb-26 justify-center mx-auto grid-cols-1 lg:gap-28 md:grid-cols-2">
            <div className="hidden lg:flex flex-col items-center justify-center">
            {darkMode ? (
                  <motion.img
                    key="darkImage"
                    src={ReactDark}
                    alt="image"
                    className="mx-auto rounded-xl max-w-full"
                    initial={{ opacity: 0, y: 20 }} // Start from slightly below & invisible
                    animate={{ opacity: 1, y: 0 }} // Fade in & slide up
                    exit={{ opacity: 0, y: -20 }} // Fade out & slide up
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                ) : (
                  <motion.img
                    key="lightImage"
                    src={ReactLight}
                    alt="image"
                    className="mx-auto rounded-xl max-w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                )}
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row  mb-8 gap-4 items-center">
                <img src={Reacts} alt="Logo" className="h10 w-10" />
                <FaPlus
                  className={`h-5 w-5 font-bold ${
                    darkMode ? "text-gray-400" : " text-gray-500"
                  } `}
                />
                <img src={Tailwind} alt="Logo" className="h-10 w-10" />
              </div>
              <div>
                <blockquote className="mb-8">
                  <h3 className="mb-2 text-[16px] md:text-[32px] font-bold">
                    React components built with Tailwind CSS and TypeScript
                  </h3>
                  <p
                    className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                      darkMode ? "dark:text-gray-400 " : "text-gray-500"
                    }`}
                  >
                    Get access to all the React components from the pro package
                    coded in TypeScript and based on the Flowbite React and
                    Tailwind CSS framework.
                  </p>
                </blockquote>

                <div className="inline-flex items-center cursor-pointer font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-blue-500 bg-sky-400 text-white px-5 py-2.5 cursor gap-2 ">
                  <p>Preview dashboard</p>
                  <MdOutlineArrowRightAlt className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-center mb-26 justify-center mx-auto grid-cols-1 lg:gap-28 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="flex flex-row mb-8 gap-1 items-center">
                <img src={Webpack} alt="Logo" className="h-10 w-10" />
                <span className="text-[16px] font-semibold md:text-[18px]">
                  Webpack
                </span>
              </div>
              <div>
                <blockquote className="mb-8">
                  <h3 className="mb-2 text-[16px] md:text-[32px] font-bold">
                    All your JavaScript, styles, and assets bundled with Webpack
                  </h3>
                  <p
                    className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                      darkMode ? "dark:text-gray-400 " : "text-gray-500"
                    }`}
                  >
                    Power up your Tailwind CSS development workflow with a
                    Webpack configuration using Post CSS, code minification, and
                    even class encryption.
                  </p>
                </blockquote>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="inline-flex items-center cursor-pointer font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-blue-400 bg-blue-500 text-white px-5 py-2.5 cursor gap-2 ">
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center">
            {darkMode ? (
                  <motion.img
                    key="darkImage"
                    src={WebDark}
                    alt="image"
                    className="mx-auto rounded-xl max-w-full"
                    initial={{ opacity: 0, y: 20 }} // Start from slightly below & invisible
                    animate={{ opacity: 1, y: 0 }} // Fade in & slide up
                    exit={{ opacity: 0, y: -20 }} // Fade out & slide up
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                ) : (
                  <motion.img
                    key="lightImage"
                    src={WebLight}
                    alt="image"
                    className="mx-auto rounded-xl max-w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                )}
            </div>
          </div>

          <div className="grid items-center justify-center mx-auto grid-cols-1 lg:gap-28 md:grid-cols-2">
            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="relative w-full h-auto text-center">
                {darkMode ? (
                  <motion.img
                    key="darkImage"
                    src={HugoDark}
                    alt="image"
                    className="mx-auto rounded-xl max-w-full"
                    initial={{ opacity: 0, y: 20 }} // Start from slightly below & invisible
                    animate={{ opacity: 1, y: 0 }} // Fade in & slide up
                    exit={{ opacity: 0, y: -20 }} // Fade out & slide up
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                ) : (
                  <motion.img
                    key="lightImage"
                    src={HugoLight}
                    alt="image"
                    className="mx-auto rounded-xl max-w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row mb-4 items-center">
                <img src={Hugo} alt="Logo" className="h-16 w-16" />
              </div>
              <div>
                <blockquote className="mb-8">
                  <h3 className="mb-2 text-[16px] md:text-[32px] font-bold">
                    The world's fastest framework for building websites
                  </h3>
                  <p
                    className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                      darkMode ? "dark:text-gray-400 " : "text-gray-500"
                    }`}
                  >
                    Get started with HUGO templates and YAML data sources to
                    build lightning fast statically generated websites available
                    for the admin dashboard and landing pages template
                    collections.
                  </p>
                </blockquote>

                <div className="inline-flex items-center cursor-pointer font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-pink-800 bg-pink-600 text-white px-5 py-2.5 cursor gap-2 ">
                  <p>Learn more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProHero;
