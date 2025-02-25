import React from 'react'
import {motion} from "framer-motion"

const Technologies = ({darkMode}) => {
  return (
    <div className={`border-t border-b ${darkMode ? "dark:bg-gray-800 dark:border-gray-700" : "bg-gray-50 border-gray-700 "}`}>
        <div className='max-w-full px-4 py-8 mx-auto lg:py-20'>
            <motion.h1
            initial={{y:25, opacity:0}}
            animate ={{y:0, opacity:1}}
            transition={{duration: 2, ease:"easeInOut"}}
             className='text-center tracking-tight leading-tight text-[22px] font-bold md:text-[36px] lg:text-[40px] mb-[10px]'>Flowbite in other technologies</motion.h1>
            <p className={`text-center leading-[1.4] text-[14px] md:text-[18px] lg:px-64 lg:mb-16 ${darkMode ? 'dark:text-gray-400' : 'text-gray-500' }`}>
                You can now also get started with open-source component libraries built for <br/>frameworks such as React, Vue.js, Svelte and Angular.</p>
        </div>
      
    </div>
  )
}

export default Technologies
