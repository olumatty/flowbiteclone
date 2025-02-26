import React from 'react'
import { BsArrowRight } from "react-icons/bs";
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

const Blocks = ({darkMode}) => {
  return (
    <div>
        <div className='items-center py-24 lg:py-8 px-4 lg:px-6 max-w-[1440px] mx-auto lg:gap-16'>
            <div className='mb-10'>
                <h3 className='font-bold text-[22px] md:text-3xl'>Building with blocks</h3>
                <div className='flex flex-col lg:flex-row mb-4 lg:mb-0 mt-4 items-start lg:items-center justify-between'>
                    <div>
                    <p className={`text-[16px] font-semibold max-w-[600px] leading-[1.6] ${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>Get started with over 400+ block sections coded with Tailwind CSS and Flowbite to build high-quality website pages.</p>
                    </div>

                    <div className={`flex items-center border rounded-lg font-medium text-base px-5 py-2.5 mt-4 gap-2 transition-all duration-200 ease-linear group   ${darkMode ? "dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-600" :
                         "text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 border-gray-200 "}`}>
                            <p>View all blocks</p>
                            <BsArrowRight className='transition-all duration-300 ease-in-out group-hover:translate-x-2'/>
                            
                    </div>
                </div>
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
            </div>
            <div className='flex items-center justify-center mt-5 md:mt-12'>
                <div className={`px-5.5 py-2.5 border rounded-lg text-base relative btn ${darkMode ? "dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-70 dark:border-gray-600 ": " text-gray-900 border-gray-200  hover:text-blue-500 bg-white "}`}>
                    Views all block
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Blocks
