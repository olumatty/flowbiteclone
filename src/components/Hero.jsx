import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

const Hero = ({darkMode, setDarkMode}) => {
  return (
    <div className={`pt-30 lg:pb-16 py-4 ${darkMode ? "bg-gray-900" : "dark-white" }`}>
        <div className='px-4 mx-auto max-w-[1440px] lg:px-4 text-center'>
            <div className={`inline-flex items-center justify-between px-1 py-1 pr-4 mb-5 text-sm ${darkMode?
                "dark:bg-gray-800 dark:text-white":"text-gray-700 bg-gray-100"}  rounded-full `}>
                    <span className='text-[12px] bg-blue-700 text-white py-2 px-4 rounded-full'>New</span>
                    <p className='hidden md:block ml-2 self-center text-[14px] tracking-tight'>We have launched over 100+ blocks in E-commerce UI! See what's new</p>
                    <p className='block md:hidden ml-1 self-center text-[10px] tracking-tight'>We have launched over 100+ blocks in E-commerce UI!</p>
                    <MdArrowForwardIos className='ml-2'/>
                </div>
        </div>
      <div className={`${darkMode ? 'text-gray-200': 'text-gray-900'} inline-flex mb-4 tracking-tight text-3xl md:text-4xl lg:text-6xl lg:font-extrabold xl:px-36 font-bold  mx-auto text-center tems-center justify-center`}>
      <h1>Build websites even faster with components on top of Tailwind CSS</h1>
      </div>
    </div>
  )
}

export default Hero
