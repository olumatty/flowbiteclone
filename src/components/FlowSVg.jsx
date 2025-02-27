import React from "react";
import ImageDark from "../assets/flowbite-icons-dark.svg";
import ImageLight from "../assets/flowbite-icons.svg";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const FlowSVg = ({ darkMode }) => {
  return (
    <div className="pt-16 pb-16 lg:pt-24 lg:pb-28">
      <div className="px-4 mx-auto max-w-[1440px] h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28">
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
                      className="min-h-[650px] w-[800px] mx-auto rounded-xl max-w-full"
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

          <div className="flex flex-col items-center">
            <div>
              <blockquote className="mb-8">
                <h3 className="mb-2 text-[16px] md:text-[32px] font-bold">
                  Flowbite SVG Icons
                </h3>
                <p
                  className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                    darkMode ? "dark:text-gray-400 " : "text-gray-500"
                  }`}
                >
                  Flowbite Icons is a free and open-source collection of premium
                  SVG icons built for the Tailwind CSS, Figma and the Flowbite
                  Ecosystem. 
                  <br/>
                  <br/>
                  There are more than 400+ icons available in the
                  collection and they come in two main styles: solid and
                  outline.
                  <br/>
                  <br/>
                  You can configure the size, color, and stroke width
                  via Tailwind CSS and our configurator tool and you can also
                  import them in Figma via our community file.
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
                    Huge collection of over 400+ SVG icons
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
                    Free and open-source under the MIT License
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
                    Solid and outline styles included
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
                    Supports dark mode out of the box
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
                    Figma file available for designers
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
                    Compatible with Tailwind CSS and Flowbite
                    </p>
                  </div>
                </div>
              </div>
            
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-blue-500 bg-blue-600 text-white px-5 py-2.5 cursor-pointer gap-2 mt-8">
                <p>Get Started</p>
                <MdOutlineArrowRightAlt className="h-6 w-6 max-w-full " />
              </div>

              <div className={`px-4 py-2.5 border rounded-lg cursor-pointer text-base relative btn mt-8 ${darkMode ? "dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-70 dark:border-gray-600 ": " text-gray-900 border-gray-200  hover:text-blue-500 bg-white "}`}>
                    Views on Github
                </div>
              <div>

              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowSVg;
