import React from "react";
import ImageDark from "../assets/flowbite-illustrations-dark.svg";
import ImageLight from "../assets/flowbite-illustrations-light.svg";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const FlowIllust = ({ darkMode }) => {
  return (
    <div className="pt-16 pb-16 lg:pt-24 lg:pb-28">
      <div className="px-4 mx-auto max-w-[1440px] h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28">
          <div className="flex flex-col items-center">
            <div>
              <blockquote className="mb-8">
                <h3 className="mb-2 text-[16px] md:text-[32px] font-bold">
                  Flowbite SVG Illustrations
                </h3>
                <p
                  className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                    darkMode ? "dark:text-gray-400 " : "text-gray-500"
                  }`}
                >
                  <span className="underline text-white">Flowbite Illustrations</span> is a free and open-source collection of
                  premium SVG illustrations built for the Tailwind CSS, Figma
                  and the Flowbite Ecosystem.
                  <br /> <br />
                  Get started with over 54 free and open-source SVG
                  illustrations based on 3D styles, fully compatible with
                  Flowbite and Tailwind CSS.
                </p>
              </blockquote>

              <div className="border-t border-gray-600 mt-3 h-auto">
                <div className="flex flex-col gap-3.5 mt-4.5 ">
                  <div className=" flex items-center gap-2">
                    <div
                      className={`p-1 shrink-0 rounded-full ${
                        darkMode
                          ? "dark:text-blue-600 dark:bg-gray-700 "
                          : "bg-blue-100 text-blue-700 "
                      }`}
                    >
                      <FaCheck className="h-3 w-3" />
                    </div>
                    <p className="text-[14px] md:text-[16px]">
                    Collection of over 50 SVG illustrations
                    </p>
                  </div>

                  <div className=" flex items-center gap-2">
                    <div
                      className={`p-1 shrink-0 rounded-full ${
                        darkMode
                          ? "dark:text-blue-600 dark:bg-gray-700 "
                          : "bg-blue-100 text-blue-700 "
                      }`}
                    >
                      <FaCheck className="h-3 w-3" />
                    </div>
                    <p className="text-[14px] md:text-[16px]">
                    Modern 3D style available in dark and light mode
                    </p>
                  </div>
                  <div className=" flex items-center gap-2">
                    <div
                      className={`p-1 shrink-0 rounded-full ${
                        darkMode
                          ? "dark:text-blue-600 dark:bg-gray-700 "
                          : "bg-blue-100 text-blue-700 "
                      }`}
                    >
                      <FaCheck className="h-3 w-3" />
                    </div>
                    <p className="text-[14px] md:text-[16px]">
                    Use our color picker to customize the illustrations
                    </p>
                  </div>
                  <div className=" flex items-center gap-2">
                    <div
                      className={`p-1 shrink-0 rounded-full ${
                        darkMode
                          ? "dark:text-blue-600 dark:bg-gray-700 "
                          : "bg-blue-100 text-blue-700 "
                      }`}
                    >
                      <FaCheck className="h-3 w-3" />
                    </div>
                    <p className="text-[14px] md:text-[16px]">
                    Available in Figma and SVG format
                    </p>
                  </div>
                  
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="inline-flex items-center font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-blue-500 bg-blue-600 text-white px-5 py-2.5 cursor-pointer gap-2 mt-8">
                  <p>Get Started</p>
                  <MdOutlineArrowRightAlt className="h-6 w-6 max-w-full " />
                </div>

                <div
                  className={`px-4 py-2.5 border rounded-lg cursor-pointer text-base relative btn mt-8 ${
                    darkMode
                      ? "dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-70 dark:border-gray-600 "
                      : " text-gray-900 border-gray-200  hover:text-blue-500 bg-white "
                  }`}
                >
                  Views on Github
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center">
            <div className="flex flex-row max-w-[800px] items-center justify-centr gap-8">
              <div>
                <div className="flex items-center justify-center">
                  <div
                    className={`relative w-full  text-center ${
                      darkMode ? "block" : "hidden"
                    }`}
                  >
                    <img
                      src={ImageDark}
                      alt="image"
                      className="min-h-[460px] w-[800px] mx-auto rounded-xl max-w-full"
                    />
                  </div>

                  <div
                    className={`relative w-full h-auto  text-center ${
                      darkMode ? "hidden" : "block"
                    }`}
                  >
                    <img
                      src={ImageLight}
                      alt="image"
                      className="min-h-[650px] w-[800px] mx-auto rounded-xl max-w-full"
                    />
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

export default FlowIllust;
