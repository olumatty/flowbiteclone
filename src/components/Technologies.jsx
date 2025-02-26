import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const Technologies = ({ darkMode }) => {
  return (
    <div
      className={`border-t border-b ${
        darkMode
          ? "dark:bg-gray-800 dark:border-gray-700"
          : "bg-gray-50 border-gray-700 "
      }`}
    >
      <div className="max-w-full px-4 py-8 mx-auto lg:py-20">
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center tracking-tight leading-tight text-[22px] font-bold md:text-[36px] lg:text-[40px] mb-[10px]"
        >
          Flowbite in other technologies
        </motion.h1>
        <p
          className={`text-center leading-[1.4] text-[14px] md:text-[18px] lg:px-64 lg:mb-16 ${
            darkMode ? "dark:text-gray-400" : "text-gray-500"
          }`}
        >
          You can now also get started with open-source component libraries
          built for <br />
          frameworks such as React, Vue.js, Svelte and Angular.
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-0 md:space-y-4 gap-4 lg:gap- md:mt-10 cursor-pointer md:px-50 `}
        >
          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border hover:shadow-lg transition duration-300 ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600"
                : "bg-white border-gray-200"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>

          <div
            className={`px-8 py-10 text-center rounded-lg shadow-md border ${
              darkMode
                ? "dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <FaReact className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="font-semibold text-[16px] mt-3">Flowbite React</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
