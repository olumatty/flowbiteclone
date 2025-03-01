import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Logo from "../assets/Logo.svg"
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import Tailwind from "../as"

const Price = ({darkMode}) => {
  return (
    <div className='py-8 lg:py-24'>
      <div className='px-4 mx-auto max-w-[1440px]'>
      <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:font-extrabold lg:text-4xl lg:leading-snug lg:text-center 2xl:px-48">
      Choose the right plan for your business
        </h2>
        <p
          className={`mb-10 text-lg font-normal ${
            darkMode ? " text-gray-400" : "text-gray-500"
          } lg:text-center lg:text-xl xl:px-64 lg:mb-16`}
        >
          Used by freelancers, startups, companies and enterprise-level corporations all over the world
        </p>
        <div className={`grid gris-cols-1 md:grid-cols-4 gap-x-16 p-8 rounded-t-lg ${darkMode ? "bg-gray-800" : " bg-gray-50"} `}>
            <div className='hidden md:block'></div>
            <div className='mb-8 md:mb-0'>
                <div className='mb-1 text-lg font-bold'>Community edition</div>
                <span className={`block mb-4 text-3xl font-extrabold `}>Free</span>
                <p className={`mb-4 text-sm ${darkMode ? " text-gray-400" : "text-gray-500 "} `}>Get started with an open source library of web components and interactive elements based on Tailwind CSS.</p>
                <div className={`w-full px-6 py-2 font-medium text-center border rounded-lg focus:outline-none focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700" ${darkMode ? "dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:hover:text-gray-100 " :
                "text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 "}`}>
                    Get Started
                </div>
                      
            </div>
            
            <div className='mb-8 md:mb-0'>
                <div className='mb-1 text-lg font-bold'>Developer edition</div>
                <span className={`block mb-4 text-3xl font-extrabold `}>$299</span>
                <p className={`mb-4 text-sm ${darkMode ? " text-gray-400" : "text-gray-500 "} `}>Get started with an open source library of web components and interactive elements based on Tailwind CSS.</p>
                <div className={`w-full px-6 py-2 font-medium text-center rounded-lg md:mr-5 md:md-0 focus:outline-none focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700" ${darkMode ? "dark:bg-blue-600 dark:hover:bg-blue-800 dark:text-white dark:hover:text-gray-100 " :
                "text-gray-900 bg-white  hover:bg-blue-700 text-center "}`}>
                    Get Started
                </div>
                <div className={`flex items-center mt-3 gap-4 ${darkMode ? "text-blue-400": "text-blue-500"}`}>
                    <span>View team pricing</span>
                    <FaLongArrowAltRight />

                </div>   
            </div>

            <div className='mb-8 md:mb-0'>
                <div className='mb-1 text-lg font-bold'>Designer edition</div>
                <span className={`block mb-4 text-3xl font-extrabold `}>$169</span>
                <p className={`mb-4 text-sm ${darkMode ? " text-gray-400" : "text-gray-500 "} `}>Upgrade your Figma toolkit with a design system built on top Tailwind CSS featuring variants, style guide, auto layout, and more.</p>
                <div className={`w-full px-6 py-2 font-medium text-center rounded-lg md:mr-5 md:md-0 focus:outline-none focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700" ${darkMode ? "dark:bg-purple-600 dark:hover:bg-purple-800 dark:text-white" :
                "text-gray-900 bg-white  hover:bg-purple-700 text-center "}`}>
                    Get Started
                </div>
                <div className={`flex items-center mt-3 gap-4 ${darkMode ? "text-purple-500": "text-purple-600"}`}>
                    <span>Learn More</span>
                    <FaLongArrowAltRight />

                </div>   
            </div>
            
        </div>
        <div className='overflow-x-auto'>
            <div className='overflow-hidden min-w-max'>
                <div className={`grid grid-cols-4 p-4 text-sm font-medium border-t border-b gap-x-16 ${darkMode ? "bg-gray-800 border-gray-700 text-white " : "border-gray-200 text-gray-900 bg-gray-100 "}`}>
                    <div className='flex items-center'>
                        <div className='relative w-6 h-6'>
                            <img src={Logo} alt='' loading='eager'/>
                        </div>
                        <span className='ml-3'>Flowbite UI Components</span>
                    </div>
                    <div className=''>Community Edition</div>
                    <div className=''>Developer Edition</div>
                    <div className=''>Designer Edition</div>
                </div>
                <div className={`grid grid-cols-4 p-4 text-sm font-medium  border-b gap-x-16 ${darkMode ? " border-gray-700 text-white " : "border-gray-200 text-gray-70 "}`}>
                    <div className={`${darkMode ? " text-gray-400" : "text-gray-500 "}`}>Marketing UI Blocks (<span className='text-blue-600'>view all</span>)</div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                    <div className='text-green-500'><IoMdCheckmark className='w-5 h-5' /></div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                </div>
                <div className={`grid grid-cols-4 p-4 text-sm font-medium  border-b gap-x-16 ${darkMode ? " border-gray-700 text-white " : "border-gray-200 text-gray-70 "}`}>
                    <div className={`${darkMode ? " text-gray-400" : "text-gray-500 "}`}>Application UI Blocks (<span className='text-blue-600'>view all</span>)</div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                    <div className='text-green-500'><IoMdCheckmark className='w-5 h-5' /></div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                </div>
                <div className={`grid grid-cols-4 p-4 text-sm font-medium  border-b gap-x-16 ${darkMode ? " border-gray-700 text-white " : "border-gray-200 text-gray-70 "}`}>
                    <div className={`${darkMode ? " text-gray-400" : "text-gray-500 "}`}>Publisher UI Blocks (<span className='text-blue-600'>view all</span>)</div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                    <div className='text-green-500'><IoMdCheckmark className='w-5 h-5' /></div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                </div>
                <div className={`grid grid-cols-4 p-4 text-sm font-medium  border-b gap-x-16 ${darkMode ? " border-gray-700 text-white " : "border-gray-200 text-gray-70 "}`}>
                    <div className={`${darkMode ? " text-gray-400" : "text-gray-500 "} flex`}>E-commerce UI Block(<span className='text-blue-600'>view all</span>)
                    <div className='bg-blue-100 text-blue-800 ml-2 text-sm px-2.5 py-0.5 rounded-md'>New</div>
                    </div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                    <div className='text-green-500'><IoMdCheckmark className='w-5 h-5' /></div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                </div>


                 <div className={`grid grid-cols-4 p-4 text-sm font-medium border-t border-b gap-x-16 ${darkMode ? "bg-gray-800 border-gray-700 text-white " : "border-gray-200 text-gray-900 bg-gray-100 "}`}>
                    <div className='flex items-center'>
                        <div className='relative w-6 h-6'>
                            <img src={Logo} alt='' loading='eager'/>
                        </div>
                        <span className='ml-3'>Flowbite UI Components</span>
                    </div>
                    <div className=''>Community Edition</div>
                    <div className=''>Developer Edition</div>
                    <div className=''>Designer Edition</div>
                </div>
                <div className={`grid grid-cols-4 p-4 text-sm font-medium  border-b gap-x-16 ${darkMode ? " border-gray-700 text-white " : "border-gray-200 text-gray-70 "}`}>
                    <div className={`${darkMode ? " text-gray-400" : "text-gray-500 "}`}>Marketing UI Blocks (<span className='text-blue-600'>view all</span>)</div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                    <div className='text-green-500'><IoMdCheckmark className='w-5 h-5' /></div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                </div>
                <div className={`grid grid-cols-4 p-4 text-sm font-medium  border-b gap-x-16 ${darkMode ? " border-gray-700 text-white " : "border-gray-200 text-gray-70 "}`}>
                    <div className={`${darkMode ? " text-gray-400" : "text-gray-500 "}`}>Application UI Blocks (<span className='text-blue-600'>view all</span>)</div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                    <div className='text-green-500'><IoMdCheckmark className='w-5 h-5' /></div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                </div>
                <div className={`grid grid-cols-4 p-4 text-sm font-medium  border-b gap-x-16 ${darkMode ? " border-gray-700 text-white " : "border-gray-200 text-gray-70 "}`}>
                    <div className={`${darkMode ? " text-gray-400" : "text-gray-500 "}`}>Publisher UI Blocks (<span className='text-blue-600'>view all</span>)</div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                    <div className='text-green-500'><IoMdCheckmark className='w-5 h-5' /></div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                </div>
                <div className={`grid grid-cols-4 p-4 text-sm font-medium  border-b gap-x-16 ${darkMode ? " border-gray-700 text-white " : "border-gray-200 text-gray-70 "}`}>
                    <div className={`${darkMode ? " text-gray-400" : "text-gray-500 "} flex`}>E-commerce UI Block(<span className='text-blue-600'>view all</span>)
                    <div className='bg-blue-100 text-blue-800 ml-2 text-sm px-2.5 py-0.5 rounded-md'>New</div>
                    </div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                    <div className='text-green-500'><IoMdCheckmark className='w-5 h-5' /></div>
                    <div className='text-red-500'><IoClose className='w-5 h-5' /></div>
                </div>
                
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Price
