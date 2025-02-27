import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const BlockSection = ({ darkMode }) => {
  return (
    <div className="pb-8 lg:pb-26">
      <div className="px-6 max-w-[1440px] mx-auto lg:text-center">
        <div className="w-full mb-6">
          <div
            className={`flex flex-col lg:flex-row items-center justify-between rounded-lg p-4 border ${
              darkMode
                ? "dark:bg-gray-800 dark:border-gray-700"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <div className="flex shrink-0 w-full sm:w-auto">
              <div className="relative shrink-0 w-full mb-4 sm:mb-0 sm:mr-4 sm:w-64 lg:w-96">
                {/* Search Icon */}
                <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none">
                  <RiSearch2Line
                    className={`w-4 h-4 ${
                      darkMode ? "dark:text-gray-400" : "text-gray-500"
                    }`}
                  />
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Search block sections"
                  className={`w-full text-sm px-4 py-2 pl-10 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 block
          ${
            darkMode
              ? "dark:bg-gray-700 dark:placeholder-gray-400 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              : "bg-white border-gray-300 text-gray-700"
          }`}
                />
              </div>
              <div className={`w-full flex justify-between text-sm mr-6 px-4 py-2 pl-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 
          ${
            darkMode
              ? "dark:bg-gray-700  dark:border-gray-600 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              : "bg-white border-gray-300 text-gray-700"
          }`}>
            <p>All Categories</p>
          </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockSection;
