import React from 'react'

const Technologies = ({darkMode}) => {
  return (
    <div className={`border-t border-b ${darkMode ? "dark:bg-gray-800 dark:border-gray-700" : "bg-gray-50 border-gray-700 "}`}>
        <div className='max-w-full px-4 py-8 mx-auto lg:py-24'>
            <h1 className='text-center tracking-tight leading-tight text-[28px] font-bold md:text-[36px] lg:text-[40px]'>Flowbite in other technologies</h1>
            <p className='text-center leading-[1.4] tracking-wide text-[16px]'>You can now also get started with open-source component libraries built for frameworks such as React, Vue.js, Svelte and Angular.</p>
        </div>
      
    </div>
  )
}

export default Technologies
