import React from 'react'
import { motion } from "framer-motion";
import Flowbite from "../assets/Logo.svg"

const ProFlow = ({darkMode}) => {
  return (
    <div
          className={`border-t border-b ${
            darkMode
              ? "dark:bg-gray-800 dark:border-gray-700"
              : "bg-gray-50 border-gray-700 "
          }`}
        >
          <div className="max-w-[1440px] px-4 py-8 mx-auto lg:py-20">
            <motion.h1
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-center tracking-tight leading-tight text-[22px] font-bold md:text-[36px] lg:text-[40px] mb-[10px]"
            >
             Explore what's inside Flowbite Pro
            </motion.h1>
            <p
              className={`text-center leading-[1.4] text-[14px] md:text-[18px] lg:px-64 lg:mb-16 ${
                darkMode ? "dark:text-gray-400" : "text-gray-500"
              }`}
            >
              You'll get access to hundreds of pages and components built with Tailwind CSS for application, marketing, and e-commerce user interfaces including the Figma design files based on the Flowbite component library.
            </p>
    
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer`}
            >
             <div className={`flex flex-wrap p-3 flex-col  rounded-lg ${darkMode ? "hover:bg-gray-700" : " hover:bg-gray-100"}`}>
                <img src={Flowbite} className='h-6 w-6 md:h-8 md:w-8 mb-4'/>
                <h2 className='font-semibold text-[18px] lg:text-[24px] mb-2'>Flowbite Blocks</h2>
                <p className={` text-sm font-medium tracking-tight ${darkMode ? " text-gray-400": " text-gray-500"}`}>Get access to over 450+ premium website sections built with Tailwind CSS and Flowbite to quickly build a website or application based on the Marketing, Application and E-commerce UI categories</p>
                <div className={`inline-flex items-center gap-2 `}>
                    <span></span>
                </div>

             </div>
            </div>
          </div>
        </div>
  )
}

export default ProFlow
