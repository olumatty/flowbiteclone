import React from "react";
import { FaCheck } from "react-icons/fa6";
import FigIcon from "../assets/figma.svg"
import Flowbite from "../assets/Logo.svg"


const FlowPro = ({darkMode}) => {
  return (
    <div className="pt-16 pb-16 lg:pt-24 lg:pb-28">
      <div className="px-4 mx-auto max-w-[1440px] h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28">
          <div className="flex flex-col items-center">
            <div>
              <blockquote className="mb-8">
                <h3 className="mb-2 text-[16px] md:text-[32px] font-bold">
                  Upgrade to Flowbite Pro
                </h3>
                <p
                  className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                    darkMode ? "dark:text-gray-400 " : "text-gray-500"
                  }`}
                >
                You get access to hundreds of UI advanced components and templates built with Tailwind CSS for Application, Marketing, Publisher, and E-commerce UI categories with Figma support included.
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
                    Support for React and TypeScript components (on-going development)
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
                    Templates and components available in Figma
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
                    Pre-order for Vue, Svelte, and Angular pro components
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
                    Access to over 430+ custom SVG icons in outline and solid styles
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="inline-flex items-center font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-blue-500 bg-blue-600 text-white px-5 py-2.5 cursor-pointer gap-2 mt-8">
                  <p>Explore Flowbite Pro</p>
                </div>

                <div
                  className={`px-4 py-2.5 border rounded-lg cursor-pointer text-base relative mt-8 ${
                    darkMode
                      ? "dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-70 dark:border-gray-600 "
                      : " text-gray-900 border-gray-200  hover:text-blue-500 bg-white "
                  }`}
                >
                  Pricing & FAQ
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className= 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:mt-0'>
            <div className={`rounded-lg px-4 py-3.5 border text-base font-medium  focus:outline-none placeholder:py-3.5 focus:ring-4
             ${darkMode ? "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-700 " : 
             "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 focus:ring-gray-200 "}`}>
                <div className='flex items-center justify-between mb-4'>
                    <img src={FigIcon} alt='icon' className="h-8 w-8 rounded-lg"/>
                    <span className={`text-xs mr-2  px-2 py-0.5 hidden sm:flex ${darkMode ? "dark:bg-gray-700 dark:text-gray-400" : "bg-gray-100 text-gray-500 "}`}>v2.10.0</span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "dark:text-white": " text-gray-900"}  `}>Flowbite Design System</h3>
                <span>One of the most advanced Figma design systems on the market featuring variants, auto-layout, responsive components, dark mode, and more.</span>
             </div>

             <div className={`rounded-lg px-4 py-3.5 border text-base font-medium  focus:outline-none placeholder:py-3.5 focus:ring-4
             ${darkMode ? "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-700 " : 
             "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 focus:ring-gray-200 "}`}>
                <div className='flex items-center justify-between mb-4'>
                    <img src={Flowbite} alt='icon' className="h-8 w-8 rounded-lg"/>
                    <span className={`text-xs mr-2  px-2 py-0.5 hidden sm:flex ${darkMode ? "dark:bg-gray-700 dark:text-gray-400" : "bg-gray-100 text-gray-500 "}`}>Tailwind CSS & React</span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "dark:text-white": " text-gray-900"}  `}>Flowbite Blocks</h3>
                <span>Get access to over 400+ advanced UI components and website sections to build website and applications faster.</span>
             </div>

             <div className={`rounded-lg px-4 py-3.5 border text-base font-medium  focus:outline-none placeholder:py-3.5 focus:ring-4
             ${darkMode ? "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-700 " : 
             "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 focus:ring-gray-200 "}`}>
                <div className='flex items-center justify-between mb-4'>
                    <img src={FigIcon} alt='icon' className="h-8 w-8 rounded-lg"/>
                    <span className={`text-xs mr-2  px-2 py-0.5 hidden sm:flex ${darkMode ? "dark:bg-gray-700 dark:text-gray-400" : "bg-gray-100 text-gray-500 "}`}>v1.0.0</span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "dark:text-white": " text-gray-900"}  `}>React Admin Dashboard</h3>
                <span>Over 20+ pages built with React and TypeScript components with support for Tailwind CSS classes to build web applications.</span>
             </div>

             <div className={`rounded-lg px-4 py-3.5 border text-base font-medium  focus:outline-none placeholder:py-3.5 focus:ring-4
             ${darkMode ? "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-700 " : 
             "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 focus:ring-gray-200 "}`}>
                <div className='flex items-center justify-between mb-4'>
                    <img src={FigIcon} alt='icon' className="h-8 w-8 rounded-lg"/>
                    <span className={`text-xs mr-2  px-2 py-0.5 hidden sm:flex ${darkMode ? "dark:bg-gray-700 dark:text-gray-400" : "bg-gray-100 text-gray-500 "}`}>v2.10.0</span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "dark:text-white": " text-gray-900"}  `}>Flowbite Icons</h3>
                <span>Get access to over 430+ custom designe SVG icons in outline and solid styles with support for Flowbite, React, and Figma.</span>
             </div>

          </div>

          
             
       </div> 
      </div>
    </div>
  );
};

export default FlowPro;
