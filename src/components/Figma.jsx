import React from "react";
import FigmaImg from "../assets/figma.svg";
import Flowbite from "../assets/Logo.svg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import DarkFigma from "../assets/figma-mockup-dark.svg";
import LightFigma from "../assets/figma-mockup-light.svg"

const Figma = ({ darkMode }) => {
  return (
    <div
      className={`border-t border-b ${
        darkMode
          ? "dark:bg-gray-800 dark:border-gray-700"
          : "bg-gray-50 border-gray-700 "
      }`}
    >
      <div className="max-w-[1440px] px-4 py-8 mx-auto lg:py-20">
        <div className="grid items-center justify-center mx-auto grid-cols-1 lg:gap-28 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <div>
              <blockquote className="mb-8">
                <h3 className="mb-4 text-[16px] md:text-[32px] font-semibold">
                  Design with Figma
                </h3>
                <p
                  className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                    darkMode ? "dark:text-gray-400 " : "text-gray-500"
                  }`}
                >
                  Get started with the definitive design system for building web
                  applications with Tailwind CSS and Flowbite with Figma by
                  leveraging hundreds of UI components, sections, and pages
                  based on variants, properties, auto-layout, dark mode,
                  responsive support, and more.
                </p>
              </blockquote>

              <div className="">
                <div
                  className={`flex items-center mb-4 justify-between self-stretch md:max-w-[400px] px-5 py-3.5 border focus:outline-none focus:ring-4 rounded-lg text-base relative  ${
                    darkMode
                      ? "dark:bg-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-600 "
                      : " text-gray-900 border-gray-300 hover:bg-gray-100 hover:text-blue-500 focus:ring-gray-200 bg-white "
                  } `}
                >
                  <div className="flex items-center gap-4">
                    <img src={FigmaImg} alt=" logo" className="h-8 w-8" />
                    <p
                      className={`${
                        darkMode ? "dark:text-white" : "text-gray-900"
                      }`}
                    >
                      Preview in Figma{" "}
                    </p>
                  </div>
                  <div>
                  <MdOutlineArrowRightAlt className={`h-6 w-6 ${darkMode ? "dark:text-white": "text-gray-900"}`} />
                  </div>
                </div>

                <div
                  className={`flex items-center mb-4 justify-between self-stretch md:max-w-[400px] px-5 py-3.5 border focus:outline-none focus:ring-4 rounded-lg text-base relative  ${
                    darkMode
                      ? "dark:bg-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-600 "
                      : " text-gray-900 border-gray-300 hover:bg-gray-100 hover:text-blue-500 focus:ring-gray-200 bg-white "
                  } `}
                >
                  <div className="flex items-center gap-4">
                    <img src={Flowbite} alt=" logo" className="h-8 w-8" />
                    <p
                      className={`${
                        darkMode ? "dark:text-white" : "text-gray-900"
                      }`}
                    >
                     Learn more
                    </p>
                  </div>
                  <div>
                    <MdOutlineArrowRightAlt className={`h-6 w-6 ${darkMode ? "dark:text-white": "text-gray-900"}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className='hidden lg:flex flex-col items-center justify-center'>
                <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                    <img src={DarkFigma} alt='image' className=' mx-auto rounded-xl max-w-full'/>
                </div>
                
                <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                    <img src={LightFigma} alt='image' className='mx-auto rounded-xl max-w-full'/>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Figma;
