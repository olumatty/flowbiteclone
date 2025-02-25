import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`pt-25 md:pt-30 lg:pb-16 py-4 ${
        darkMode ? "bg-gray-900" : "dark-white"
      }`}
    >
      <div className="px-4 mx-auto max-w-[1440px] lg:px-4 text-center">
        <div
          className={`inline-flex items-center justify-between px-1 py-1 pr-4 mb-5 text-sm ${
            darkMode
              ? "dark:bg-gray-800 dark:text-white"
              : "text-gray-700 bg-gray-100"
          }  rounded-full `}
        >
          <span className="text-[12px] bg-blue-700 text-white py-2 px-4 rounded-full">
            New
          </span>
          <p className="hidden md:block ml-2 self-center text-[14px] tracking-tight">
            We have launched over 100+ blocks in E-commerce UI! See what's new
          </p>
          <p className="block md:hidden ml-1 self-center text-[12px] tracking-tight">
            We have launched over 100+ blocks
          </p>
          <MdArrowForwardIos className="ml-2" />
        </div>
      </div>
      <div
        className={`${
          darkMode ? "text-gray-200" : "text-gray-900"
        } inline-flex mb-4 tracking-tight text-3xl md:text-4xl lg:text-6xl lg:font-extrabold xl:px-36 font-bold  mx-auto text-center tems-center justify-center`}
      >
        <h1>
          Build websites even faster with components on top of Tailwind CSS
        </h1>
      </div>
      <p
        className={`mb-10 text-[14px] font-normal text-center lg:text-xl lg:px-70 ${
          darkMode ? " dark:text-gray-400" : "text-gray-500 "
        }`}
      >
        Start developing with an open-source library of over 600+ UI components,
        sections, and pages <br />
        built with the utility classes from Tailwind CSS and designed in Figma.
      </p>

      <div className="flex gap-8 items-center justify-center flex-col md:flex-row mb-30">
        <div className="py-3 px-6 bg-blue-600 hover:bg-blue-700 transition-all duration-200 rounded-[10px]">
            <button className="cursor-pointer text-[16px] font-medium">Get Started</button>
        </div>

        <div className={`py-3 px-6 border rounded-[10px] border-gray-200 ${darkMode ? "dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-600 dark:bg-gray-800" 
            : "text-gray-900 bg-white-100 hover:bg-gray-100 hover:text-blue-700 "} inline-flex items-center justify-center`}>
            
            <button>Explore Components</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
