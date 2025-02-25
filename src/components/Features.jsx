import React from 'react'
import { FaDev } from "react-icons/fa6";

const Features = ({darkMode, setDarkMode}) => {
  return (
    <div className={`pt-6 mt-[30px] pb-8  ${
        darkMode ? "bg-gray-900" : "dark-white"
      }`}>
    <div className=' max-w-[1440px] px-4 mx-auto text-center lg:px-36'>
        <div>
            <span className='text-sm font-semibold text-gray-500'>FEATURED IN</span>
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center mt-8 lg:justify-between'>
            <div>
                <FaDev className='h-10 w-10'/>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Features
