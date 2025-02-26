import React from "react";
import ImageDark1 from "../assets/Imagedark 1.svg";
import ImageLight1 from "../assets/ImageLight1.svg";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md"

const DarkMode = ({ darkMode }) => {
  return (
    <div className="pt-16 pb-16 lg:pt-24 lg:pb-28">
      <div className="px-4 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28">
          <div className="hidden lg:flex flex-col items-center">
            <div className="flex flex-row max-w-[800px] items-center justify-centr gap-8">
              <div>
                <div className="flex items-center justify-center">
                  <div
                    className={`relative w-full h-auto  text-center ${
                      darkMode ? "block" : "hidden"
                    }`}
                  >
                    <img
                      src={ImageDark1}
                      alt="image"
                      className=" mx-auto rounded-xl max-w-full"
                    />
                  </div>

                  <div
                    className={`relative w-full h-auto  text-center ${
                      darkMode ? "hidden" : "block"
                    }`}
                  >
                    <img
                      src={ImageLight1}
                      alt="image"
                      className="mx-auto rounded-xl max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <blockquote className="mb-8">
                <h3 className="mb-2 text-[16px] md:text-[32px] font-semibold">
                  Dark mode integration
                </h3>
                <p
                  className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                    darkMode ? "dark:text-gray-400 " : "text-gray-500"
                  }`}
                >
                  Flowbite has native built-in support for dark mode by using
                  the variants from Tailwind CSS and the Flowbite Design System.
                  <br />
                  <br />
                  All of the UI components and templates from Flowbite will
                  automatically switch to dark mode based on your browser
                  settings or custom project configuration.
                </p>
              </blockquote>

              <div className="border-t border-gray-600">
                <div className="flex flex-col gap-3.5 mt-4.5">
                    <div className=" flex items-center gap-2">
                        <div className= {`p-1 shrink-0 rounded-full ${darkMode ? "dark:text-blue-600 dark:bg-gray-700 " : "bg-blue-100 text-blue-700 "}`}>
                        <FaCheck className="h-3 w-3" />
                        </div> 
                        <p className="text-[14px] md:[18px]">Increased accessibility based on room brightness</p>
                    </div>
                    <div className=" flex items-center gap-2">
                        <div className= {`p-1 shrink-0 rounded-full ${darkMode ? "dark:text-blue-600 dark:bg-gray-700 " : "bg-blue-100 text-blue-700 "}`}>
                        <FaCheck className="h-3 w-3" />
                        </div> 
                        <p className="text-[14px] md:[18px]" >Better visibility for users with low vision</p>
                    </div>
                    <div className=" flex items-center gap-2">
                        <div className= {`p-1 shrink-0 rounded-full ${darkMode ? "dark:text-blue-600 dark:bg-gray-700 " : "bg-blue-100 text-blue-700 "}`}>
                        <FaCheck className="h-3 w-3" />
                        </div> 
                        <p className="text-[14px] md:[18px]">Improved readability for users with light sensitivity</p>
                    </div>
                    <div className=" flex items-center gap-2">
                        <div className= {`p-1 shrink-0 rounded-full ${darkMode ? "dark:text-blue-600 dark:bg-gray-700 " : "bg-blue-100 text-blue-700 "}`}>
                        <FaCheck className="h-3 w-3" />
                        </div> 
                        <p className="text-[14px] md:[18px]">High quality UI/UX design for modern applications</p>
                    </div> 
                </div>
              </div>
              <div className='inline-flex items-center font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-blue-500 bg-blue-600 text-white px-5 py-2.5 cursor gap-2 mt-6'>
                <p>Learn how to integrate dark mode</p>
                <MdOutlineArrowRightAlt className="h-6 w-6 max-w-full "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
