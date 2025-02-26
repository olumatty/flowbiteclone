import React from "react";
import { FaCheck } from "react-icons/fa6";
import RTLDARK from "../assets/rtl-dark.svg";
import RTLLIGHT from "../assets/rtlLight.svg";

const RTL = ({ darkMode }) => {
  return (
    <div
      className={`border-t border-b ${
        darkMode
          ? "dark:bg-gray-800 dark:border-gray-700"
          : "bg-gray-50 border-gray-700 "
      }`}
    >
      <div className="max-w-[1440px] px-4 py-8 mx-auto lg:py-24">
        <div className="grid items-center justify-center mx-auto grid-cols-1 lg:gap-28 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <div>
              <blockquote className="mb-8">
                <h3 className="mb-2 text-[16px] md:text-[32px] font-bold">
                  RTL (Right to left) Support
                </h3>
                <p
                  className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                    darkMode ? "dark:text-gray-400 " : "text-gray-500"
                  }`}
                >
                  The UI components from Flowbite provide full RTL support for
                  Arabic and <br />
                  Hebrew languages by using logical properties from Tailwind
                  CSS.
                </p>
              </blockquote>

              <div className="">
                <div className="flex flex-col gap-3.5 mt-4.5">
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
                    <p className="text-[14px] md:[18px]">
                      RTL support for a community of over 500 million people
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
                    <p className="text-[14px] md:[18px]">
                      Based on logical properties from Tailwind CSS
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
                    <p className="text-[14px] md:[18px]">
                      Works on a copy and paste basis
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
                    <p className="text-[14px] md:[18px]">
                      Component preview available in the documentation
                    </p>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-blue-500 bg-blue-600 text-white px-5 py-2.5 cursor gap-2 mt-6">
                <p>Learn more about RTL</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center">
            <div
              className={`relative w-full h-auto  text-center ${
                darkMode ? "block" : "hidden"
              }`}
            >
              <img
                src={RTLDARK}
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
                src={RTLLIGHT}
                alt="image"
                className="mx-auto rounded-xl max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTL;
