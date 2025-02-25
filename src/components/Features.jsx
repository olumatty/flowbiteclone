import React from "react";
import {
  FaDev,
  FaYCombinator,
  FaReddit,
  FaProductHunt,
  FaYoutube,
} from "react-icons/fa6";
import { motion } from 'framer-motion';

const Features = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`pt-6 mt-[30px] pb-8  ${
        darkMode ? "bg-gray-900" : "dark-white"
      }`}
    >
      <div className=" max-w-[1440px] px-4 mx-auto text-center lg:px-36">
        <div>
          <span className="text-sm md:text-[16px] font-semibold text-gray-500">
            FEATURED IN
          </span>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center mt-8 lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-5 text-gray-500 flex items-center mr-3 gap-2 transition-all duration-200 ease-linear ${
              darkMode ? "dark:hover:text-gray-300" : "hover:text-gray-900"
            }`}
          >
            <FaDev className="h-10 w-10 transition-all duration-200 ease-in-out hover:scale-50" />
            <span className="text-[16px] font-medium ">Develop</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-gray-500 flex items-center mr-3 gap-2 mb-5 transition-all duration-200 ease-linear ${
              darkMode ? "dark:hover:text-orange-500" : "hover:text-orange-500"
            }`}
          >
            <FaYCombinator className="h-10 w-10 transition-all duration-200 ease-in-out hover:scale-50" />
            <span className="text-[16px] font-medium  "> Combinator</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-gray-500 flex items-center gap-2 mr-3 mb-5 transition-all duration-200 ease-linear ${
              darkMode ? "dark:hover:text-orange-500" : "hover:text-orange-500"
            }`}
          >
            <FaReddit className="h-10 w-10 transition-all duration-200 ease-in-out hover:scale-50" />
            <span className="text-[16px] font-medium "> reddit</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-gray-500 flex items-center gap-2 mr-3 mb-5 transition-all duration-200 ease-linear ${
              darkMode ? "dark:hover:text-gray-300" : "hover:text-gray-900"
            }`}
          >
            <FaProductHunt className="h-10 w-10 transition-all duration-200 ease-in-out hover:scale-50" />
            <span className="text-[16px] "> Combinator</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-gray-500 flex items-center gap-2 mr-3 mb-5 transition-all duration-200 ease-linear ${
              darkMode ? "dark:hover:text-[#E10600]" : "hover:text-[#E10600]"
            }`}
          >
            <FaYoutube className="h-10 w-10 transition-all duration-200 ease-in-out hover:scale-50" />
            <span className="text-[md:text-[16px] "> Youtube</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
