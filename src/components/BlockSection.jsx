import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import DarkHero from "../assets/hero-dark.svg";
import LightHero from "../assets/hero.svg"
import DarkHeader from "../assets/table-headers-dark.svg";
import LightHeader from "../assets/table-headers.svg"
import DarkNavbar from "../assets/sidebars-dark.svg";
import LightNavbar from "../assets/sidebars.svg";
import DarkFeatures from "../assets/features-dark.svg";
import LightFeatures from "../assets/features.svg"
import DarkCTA from "../assets/cta-dark.svg";
import LightCTA from "../assets/cta.svg"
import DarkContent from "../assets/content-dark.svg";
import LightContent from "../assets/content.svg"

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
              <div className={`w-full flex justify-between items-center text-sm gap-4 px-4 py-2 pl-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 
          ${
            darkMode
              ? "dark:bg-gray-700  dark:border-gray-600 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              : "bg-white border-gray-300 text-gray-700"
          }`}>
            <p>All Categories</p>
            <RiArrowDropDownLine className="h-6 w-6" />
          </div>
            </div>
            <p className={`hidden lg:block text-sm ${darkMode ? " dark:text-gray-400" : "text-gray-600 "}`}>Showing 78 results.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Hero Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>18 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-400" : "bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkHero} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightHero} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
          
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Table Headers</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>13 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-blue-200 dark:text-blue-400":"bg-blue-100 text-blue-800" } inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Application UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkHeader} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightHeader} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
          
          
          
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Side Navigations</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>12 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-blue-200 dark:text-blue-800":"bg-blue-100 text-blue-800" } inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Application UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkNavbar} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightNavbar} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
          
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Feature Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>10 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-800":"bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkFeatures} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightFeatures} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
          
          
          
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>CTA Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>10 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-800":"bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkCTA} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightCTA} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
          
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Content Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>18 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-800":"bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Content Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>18 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-800":"bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Content Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>18 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-800":"bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Content Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>18 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-800":"bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Content Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>18 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-800":"bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Content Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>18 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-800":"bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>
                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Content Sections</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>18 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-green-200 dark:text-green-800":"bg-green-100 text-green-800" }inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Marketing UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightContent} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>

                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Side Navigations</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>12 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-blue-200 dark:text-blue-800":"bg-blue-100 text-blue-800" } inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Application UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkNavbar} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightNavbar} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>

                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Side Navigations</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>12 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-blue-200 dark:text-blue-800":"bg-blue-100 text-blue-800" } inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Application UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkNavbar} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightNavbar} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>

                          <div className={`h-64 md:h-80 cursor-pointer rounded-lg border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                              <div className={` rounded-t-md py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                  <div className='flex items-start flex-col'>
                                      <h3 className='text-[14px] md:text-[16px] font-semibold'>Side Navigations</h3>
                                      <p className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>12 components</p>
                                  </div>
                                  <div className={`rounded ${ darkMode ? "dark:bg-blue-200 dark:text-blue-800":"bg-blue-100 text-blue-800" } inline-flex `}>
                                      <span className='text-[11px] font-medium px-2.5 py-0.5 text-center'>Application UI</span>
                                  </div>
                              </div>
          
                              <div className='relative flex items-center justify-center h-[calc(100%-4rem)]'>
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                      <img src={DarkNavbar} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
          
                                  <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                      <img src={LightNavbar} alt='image' className='h-44 md:h-52 mx-auto max-w-full'/>
                                  </div>
                              </div>
                          </div>


                          
                      </div>
        </div>
      </div>
    </div>
  );
};

export default BlockSection;
