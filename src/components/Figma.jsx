import React from "react";
import FigmaImg from "../assets/figma.svg";
import ArrowRight from "../assets/arrow-right.svg";
import Flowbite from "../assets/Logo.svg"

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
                  className={`flex items-center mb-4 justify-between w-[400px] px-5 py-3.5 border rounded-lg text-base relative  ${
                    darkMode
                      ? "dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-70 dark:border-gray-600 "
                      : " text-gray-900 border-gray-200  hover:text-blue-500 bg-white "
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
                    <img src={ArrowRight} alt="arrow" className="h-6 w-6" />
                  </div>
                </div>

                <div
                  className={`flex items-center justify-between w-[400px] px-5 py-3.5 border rounded-lg text-base relative  ${
                    darkMode
                      ? "dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-70 dark:border-gray-600 "
                      : " text-gray-900 border-gray-200  hover:text-blue-500 bg-white "
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
                    <img src={ArrowRight} alt="arrow" className="h-6 w-6" />
                  </div>
                </div>


               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figma;
