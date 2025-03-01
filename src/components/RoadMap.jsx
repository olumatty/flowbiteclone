import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { PiNotepadLight } from "react-icons/pi";

const RoadMap = ({ darkMode }) => {
  return (
    <div className="">
      <div className="max-w-[1440px] px-4 py-8 mx-auto lg:py-20">
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center tracking-tight leading-tight text-[22px] font-bold md:text-[36px] lg:text-[40px] mb-[10px]"
        >
          Roadmap
        </motion.h1>
        <p
          className={`text-center leading-[1.4] text-[14px] md:text-[px] lg:px-64 lg:mb-16 ${
            darkMode ? "dark:text-gray-400" : "text-gray-500"
          }`}
        >
          Flowbite is a project that will be maintained over the long term, that
          is why we have laid out the following roadmap for new features and
          additions. Ultimately, all Figma design files will be coded in
          Tailwind CSS.
        </p>

        <div className="grid lg:grid-cols-3">
          <div
            className={`relative py-12 px-6 mb-8 lg:border-r rounded-l-lg lg:py-16 lg:px-8 ${
              darkMode
                ? "dark:bg-gray-800 lg:border-gray-700"
                : "bg-gray-50 lg:border-gray-200"
            } lg:mb-0`}
          >
            <span
              className={`absolute -top-4 left-1/2 py-2 px-3 text-sm rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-white "
                  : "bg-blue-100 text-gray-800 "
              }`}
            >
              <FaCheck
                className={`inline text-sm mr-2 mb-1 w-3 h-3 ${
                  darkMode ? " text-blue-500" : " text-blue-600 "
                }`}
              />
              <span>Completed</span>
            </span>

            <div className="flex items-center gap-3 ">
              <div className="rounded-full p-2.5 text-blue-800 bg-blue-200 ">
                <FaCheck className="w-3 h-3" />
              </div>
              <span
                className={`text-[16px] md:text-[18px] font-semibold ${
                  darkMode ? " text-blue-500" : "text-blue-600"
                } `}
              >
                Figma base project
              </span>
            </div>
            <ul className="pl-10 mb-8 mt-3 list-disc lg:pl-16">
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Style guideline
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Auto layout setup
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                UI components and variants
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Application UI pages
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Responsive interface for mobile and tablet devices
              </li>
            </ul>

            <div className="flex items-center gap-3 ">
              <div className="rounded-full p-2.5 text-blue-800 bg-blue-200 ">
                <FaCheck className="w-3 h-3" />
              </div>
              <span
                className={`text-[16px] md:text-[18px] font-semibold ${
                  darkMode ? " text-blue-500" : "text-blue-600"
                } `}
              >
                Application UI code in Tailwind
              </span>
            </div>
            <ul className="pl-10 mb-8 mt-3 list-disc lg:pl-16">
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Tailwind CSS base project
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Setup style guidelines
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Code the UI elements
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Code the Application UI pages
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Responsive interface
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Build documentation
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Test for production mode and browsers
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Optimize speed
              </li>
            </ul>

            <div className="flex items-center gap-3 ">
              <div className="rounded-full p-2.5 text-blue-800 bg-blue-200 ">
                <FaCheck className="w-3 h-3" />
              </div>
              <span
                className={`text-[16px] md:text-[18px] font-semibold ${
                  darkMode ? " text-blue-500" : "text-blue-600"
                } `}
              >
                Dark version
              </span>
            </div>
            <ul className="pl-10 mb-8 mt-3 list-disc lg:pl-16">
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Build a dark version in Figma
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Use Figma constraints and adaptive layout
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Integrate the dark version in Tailwind CSS
              </li>
            </ul>
          </div>

          <div
            className={`relative py-12 px-6 mb-8 lg:border-r rounded-l-lg lg:py-16 lg:px-8 ${
              darkMode
                ? "dark:bg-gray-800 lg:border-gray-700"
                : "bg-gray-50 lg:border-gray-200"
            } lg:mb-0`}
          >
            <span
              className={`absolute -top-4 left-1/2 py-2 px-3 text-sm rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-white "
                  : "bg-blue-100 text-gray-800 "
              }`}
            >
              <FaCheck
                className={`inline text-sm mr-2 mb-1 w-3 h-3 ${
                  darkMode ? " text-blue-500" : " text-blue-600 "
                }`}
              />
              <span>Completed</span>
            </span>

            <div className="flex items-center gap-3 ">
              <div className="rounded-full p-2.5 text-blue-800 bg-blue-200 ">
                <FaCheck className="w-3 h-3" />
              </div>
              <span
                className={`text-[16px] md:text-[18px] font-semibold ${
                  darkMode ? " text-blue-500" : "text-blue-600"
                } `}
              >
                Marketing UI design in Figma
              </span>
            </div>
            <ul className="pl-10 mb-8 mt-3 list-disc lg:pl-16">
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Research and conceptualize sections and pages for marketing
                purposes (ie. landing pages, hero sections, pricing sections)
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Build special UI components and variants
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Create modular sections that can be later used to build the
                final pages
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Build marketing UI example pages
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Responsive interface for mobile and tablet devices
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Launch Figma Marketing UI
              </li>
            </ul>

            <div className="flex items-center gap-3 ">
              <div className="rounded-full p-2.5 text-blue-800 bg-blue-200 ">
                <FaCheck className="w-3 h-3" />
              </div>
              <span
                className={`text-[16px] md:text-[18px] font-semibold ${
                  darkMode ? " text-blue-500" : "text-blue-600"
                } `}
              >
                Marketing UI code in Tailwind
              </span>
            </div>
            <ul className="pl-10 mb-8 mt-3 list-disc lg:pl-16">
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Code the new UI elements
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Code the new marketing UI sections
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Code the example pages{" "}
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Responsive design based on Figma
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Responsive interface
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Incorporate new UI elements and sections into the documentationn
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Test for production mode and browsers
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Optimize speed
              </li>
            </ul>
          </div>

          <div
            className={`relative py-12 px-6 mb-8 lg:border-r rounded-l-lg lg:py-16 lg:px-8 ${
              darkMode
                ? "dark:bg-gray-800 lg:border-gray-700"
                : "bg-gray-50 lg:border-gray-200"
            } lg:mb-0`}
          >
            <span
              className={`absolute -top-4 left-1/2 py-2 px-3 text-sm rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-white "
                  : "bg-blue-100 text-gray-800 "
              }`}
            >
              <PiNotepadLight
                className={`inline text-sm mr-2 mb-1 w-3 h-3 ${
                  darkMode ? " text-gray-200" : " text-gray-900 "
                }`}
              />
              <span>Phase 3</span>
            </span>

            <div className="flex items-center gap-3 ">
              <div className="rounded-full p-2.5 text-blue-800 bg-blue-200 ">
                <FaCheck className="w-3 h-3" />
              </div>
              <span
                className={`text-[16px] md:text-[18px] font-semibold ${
                  darkMode ? " text-blue-500" : "text-blue-600"
                } `}
              >
                E-Commerce UI design in Figma
              </span>
            </div>
            <ul className="pl-10 mb-8 mt-3 list-disc lg:pl-16">
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Research for high converting UI/UX e-commerce pages
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Auto layout setup
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                UI components and variants
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Application UI pages
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Responsive interface for mobile and tablet devices
              </li>
            </ul>

            <div className="flex items-center gap-3 ">
              <div className="rounded-full p-2.5 text-blue-800 bg-blue-200 ">
                <FaCheck className="w-3 h-3" />
              </div>
              <span
                className={`text-[16px] md:text-[18px] font-semibold ${
                  darkMode ? " text-blue-500" : "text-blue-600"
                } `}
              >
                Application UI code in Tailwind
              </span>
            </div>
            <ul className="pl-10 mb-8 mt-3 list-disc lg:pl-16">
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Tailwind CSS base project
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Setup style guidelines
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Code the UI elements
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Code the Application UI pages
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Responsive interface
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Build documentation
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Test for production mode and browsers
              </li>
              <li
                className={`${darkMode ? " text-blue-500" : "text-blue-600 "}`}
              >
                Optimize speed
              </li>
            </ul>

            <div className="flex items-center gap-3 ">
              <div className="rounded-full p-2.5 text-blue-800 bg-blue-200 ">
                <FaCheck className="w-3 h-3" />
              </div>
              <span
                className={`text-[16px] md:text-[18px] font-semibold ${
                  darkMode ? " text-blue-500" : "text-blue-600"
                } `}
              >
                Dark version
              </span>
            </div>
          </div>
        </div>

        <div
          className={`text-[13px] italic mx-auto text-center max-w-2xl mt-6 ${
            darkMode ? " text-gray-400" : " text-gray-500"
          }`}
        >
          <span>
            * The blue highlighted area with the "check" sign means that the
            features have been finished and deployed, the "cog" sign means that
            we are actively working on it, and the "calendar" sign means that it
            has been scheduled.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
