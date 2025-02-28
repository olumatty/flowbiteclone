import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import DarkAgency from "../assets/agency-dark.svg";
import LightAgency from "../assets/agencyLight.svg";
import MobileDark from "../assets/mobile-dark.svg";
import MobileLight from "../assets/mobileLight.svg";
import DigitalDark from "../assets/digital-product-dark.svg";
import DigitalLight from "../assets/digital-productLight.svg";
import SaasDark from "../assets/saas-dark.svg";
import SaasLight from"../assets/saasLight.svg";
import OpenDark from "../assets/open-source-dark.svg";
import OpenLight from "../assets/open-sourceLight.svg";
import PreDark from "../assets/pre-launch-dark.svg";
import PreLight from "../assets/pre-launchLight.svg";

const ProMarket = ({darkMode}) => {
  return (
    <div className={`border-t mt-14 ${darkMode ? "border-gray-700" : "border-gray-800 "}`}>
                <div className='items-center lg:mt-12 py-24 lg:py-8 px-4 lg:px-6 max-w-[1440px] mx-auto lg:gap-16'>
                    <div className='mb-10'>
                        <h3 className='font-bold text-[22px] md:text-3xl'>Marketing UI pages and components</h3>
                        <div className='flex flex-col lg:flex-row mb-4 lg:mb-0 mt-4 items-start lg:items-center justify-between'>
                            <div>
                            <p className={`text-[16px] font-semibold max-w-[800px]  ${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>Get access to 53 template pages coded with Tailwind CSS and Flowbite that you can use to build a marketing website for your business including landing pages, about pages, contact pages, and more.</p>
                            </div>
        
                            <div className={`flex items-center border rounded-lg font-medium text-base px-5 py-2.5 mt-4 gap-2 transition-all duration-200 ease-linear group   ${darkMode ? "dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-600" :
                                 "text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 border-gray-200 "}`}>
                                    <FaRegEye className='transition-all duration-300 ease-in-out group-hover:translate-x-2'/>
                                    <p>Preview Dashboard</p>
                                    
                                    
                            </div>
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-10'>
        
                        <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                            <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                <div className='flex items-start flex-col'>
                                    <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Agency Landing</h3>
                                </div>
                                <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                    <FaArrowUpRightFromSquare className='h-3 w-3'/>
                                </div>
                            </div>
        
                            <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 w-fit h-fit lg:h-72'>
                                <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                    <img src={DarkAgency} alt='image' className=' border-b-lg max-w-full'/>
                                </div>
        
                                <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                    <img src={LightAgency} alt='image' className='max-w-full'/>
                                </div>
                            </div>
                        </div>
    
                        <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                            <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                <div className='flex items-start flex-col'>
                                    <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Mobile App Landing</h3>
                                </div>
                                <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                    <FaArrowUpRightFromSquare className='h-3 w-3'/>
                                </div>
                            </div>
        
                            <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-72'>
                                <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                    <img src={MobileDark} alt='image' className=' border-b-lg max-w-full'/>
                                </div>
        
                                <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                    <img src={MobileLight} alt='image' className='max-w-full'/>
                                </div>
                            </div>
                        </div>
    
                        <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                            <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                <div className='flex items-start flex-col'>
                                    <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Digital Product Landing</h3>
                                </div>
                                <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                    <FaArrowUpRightFromSquare className='h-3 w-3'/>
                                </div>
                            </div>
        
                            <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-72'>
                                <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                    <img src={DigitalDark} alt='image' className=' border-b-lg max-w-full'/>
                                </div>
        
                                <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                    <img src={DigitalLight} alt='image' className='max-w-full'/>
                                </div>
                            </div>
                        </div>
    
                        <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                            <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                <div className='flex items-start flex-col'>
                                    <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Saas Product Landing</h3>
                                </div>
                                <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                    <FaArrowUpRightFromSquare className='h-3 w-3'/>
                                </div>
                            </div>
        
                            <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-72'>
                                <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                    <img src={SaasDark} alt='image' className=' border-b-lg max-w-full'/>
                                </div>
        
                                <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                    <img src={SaasLight} alt='image' className='max-w-full'/>
                                </div>
                            </div>
                        </div>
    
                        <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                            <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                <div className='flex items-start flex-col'>
                                    <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Open-source project Landing</h3>
                                </div>
                                <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                    <FaArrowUpRightFromSquare className='h-3 w-3'/>
                                </div>
                            </div>
        
                            <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-72'>
                                <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                    <img src={OpenDark} alt='image' className=' border-b-lg max-w-full'/>
                                </div>
        
                                <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                    <img src={OpenLight} alt='image' className='max-w-full'/>
                                </div>
                            </div>
                        </div>
    
                        <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                            <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                                <div className='flex items-start flex-col'>
                                    <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Pre-launch Landing</h3>
                                </div>
                                <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                    <FaArrowUpRightFromSquare className='h-3 w-3'/>
                                </div>
                            </div>
        
                            <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-62'>
                                <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                    <img src={PreDark} alt='image' className=' border-b-lg max-w-full'/>
                                </div>
        
                                <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                    <img src={PreLight} alt='image' className='max-w-full'/>
                                </div>
                            </div>
                        </div>
        
        
                        
                    </div>
                    <div className='flex items-center justify-center mt-5 md:mt-12'>
                        <div className={`px-5.5 py-2.5 border rounded-lg cursor-pointer text-base relative ${darkMode ? "dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-70 dark:border-gray-600 ": " text-gray-900 border-gray-200  hover:text-blue-500 bg-white "}`}>
                            Load more pages
                        </div>
                    </div>
                </div>
              
            </div>
  )
}

export default ProMarket
