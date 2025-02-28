import React from 'react'
import { motion } from "framer-motion";
import Flowbite from "../assets/Logo.svg"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Figma from "../assets/figma.svg"
import Tailwind from "../assets/tailwind.svg"
import Reacts from "../assets/react.svg";
import ChatGpt from "../assets/chat-gpt.svg"

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
                <p className={` text-[14px] md:text-[18px] tracking-tight mb-2 ${darkMode ? " text-gray-400": " text-gray-500"}`}>Get access to over 450+ premium website sections built with Tailwind CSS and Flowbite to quickly build a website or application based on the <br/>Marketing, Application and E-commerce UI categories</p>
                <div className={`inline-flex items-center gap-2 ${darkMode ? "text-blue-500" : "text-blue-600" } `}>
                    <span className='font-medium text-[16px]'>Explore block sections</span>
                    <MdOutlineArrowRightAlt className='w-6 h-6'/>
                </div>
             </div>

             <div className={`flex flex-wrap p-3 flex-col  rounded-lg ${darkMode ? "hover:bg-gray-700" : " hover:bg-gray-100"}`}>
                <img src={Figma} className='h-6 w-6 md:h-8 md:w-8 mb-4'/>
                <h2 className='font-semibold text-[18px] lg:text-[24px] mb-2'>Figma design files</h2>
                <p className={`text-[14px] md:text-[18px] tracking-tight mb-2 ${darkMode ? " text-gray-400": " text-gray-500"}`}>All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project</p>
                <div className={`inline-flex items-center gap-2 ${darkMode ? "text-blue-500" : "text-blue-600" } `}>
                    <span className='font-medium text-[16px]'>Preview in Figma and learn more</span>
                    <MdOutlineArrowRightAlt className='w-6 h-6'/>
                </div>
             </div>

             <div className={`flex flex-wrap p-3 flex-col  rounded-lg ${darkMode ? "hover:bg-gray-700" : " hover:bg-gray-100"}`}>
                <img src={Tailwind} className='h-6 w-6 md:h-8 md:w-8 mb-4'/>
                <h2 className='font-semibold text-[18px] lg:text-[24px] mb-2'>Application UI coded in Tailwind CSS</h2>
                <p className={` text-[14px] md:text-[18px] tracking-tight mb-2 ${darkMode ? " text-gray-400": " text-gray-500"}`}>Get access to over 60+ page templates including a dashboard layout, charts, kanban board, calendar and more to build a web applicationt</p>
                <div className={`inline-flex items-center gap-2 ${darkMode ? "text-blue-500" : "text-blue-600" } `}>
                    <span className='font-medium text-[16px]'>View pages and components</span>
                    <MdOutlineArrowRightAlt className='w-6 h-6'/>
                </div>
             </div>

             <div className={`flex flex-wrap p-3 flex-col  rounded-lg ${darkMode ? "hover:bg-gray-700" : " hover:bg-gray-100"}`}>
                <img src={Tailwind} className='h-6 w-6 md:h-8 md:w-8 mb-4'/>
                <h2 className='font-semibold text-[18px] lg:text-[24px] mb-2'>Marketing UI coded in Tailwind CSS</h2>
                <p className={`text-[14px] md:text-[18px] tracking-tight mb-2 ${darkMode ? " text-gray-400": " text-gray-500"}`}>Get access to over 53+ page templates including landing pages, contact pages, about pages and more to build a marketing website for your businesst</p>
                <div className={`inline-flex items-center gap-2 ${darkMode ? "text-blue-500" : "text-blue-600" } `}>
                    <span className='font-medium text-[16px]'>View sections and pages</span>
                    <MdOutlineArrowRightAlt className='w-6 h-6'/>
                </div>
             </div>

             <div className={`flex flex-wrap p-3 flex-col  rounded-lg ${darkMode ? "hover:bg-gray-700" : " hover:bg-gray-100"}`}>

                <img src={Reacts} className='h-6 w-6 md:h-8 md:w-8 mb-4'/>
                <h2 className='font-semibold text-[18px] lg:text-[24px] mb-2'>React components (TypeScript)</h2>
                <p className={`text-[14px] md:text-[18px] tracking-tight mb-2 ${darkMode ? " text-gray-400": " text-gray-500"}`}>Get access to the React templates built with TypeScript based on Tailwind CSS and the Flowbite React library including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages</p>
                <div className={`inline-flex items-center gap-2 ${darkMode ? "text-blue-500" : "text-blue-600" } `}>
                    <span className='font-medium text-[16px]'>Learn more</span>
                    <MdOutlineArrowRightAlt className='w-6 h-6'/>
                </div>
             </div>
             
             <div className={`flex flex-wrap p-3 flex-col  rounded-lg ${darkMode ? "hover:bg-gray-700" : " hover:bg-gray-100"}`}>
                <img src={ChatGpt} className='h-6 w-6 md:h-8 md:w-8 mb-4'/>
                <h2 className='font-semibold text-[18px] lg:text-[24px] mb-2'>Flowbite GPT</h2>
                <p className={`text-[14px] md:text-[18px] tracking-tight mb-2 ${darkMode ? " text-gray-400": " text-gray-500"}`}>Start generating website sections and pages based on the pro version of Flowbite and Tailwind CSS using a custom trained model of ChatGPT</p>
                <div className={`inline-flex items-center gap-2 ${darkMode ? "text-green-500" : "text-green-600" } `}>
                    <span className='font-medium text-[16px]'>Use Flowbite with ChatGPT</span>
                    <MdOutlineArrowRightAlt className='w-6 h-6'/>
                </div>
             </div>
             
             

            </div>
          </div>
        </div>
  )
}

export default ProFlow
