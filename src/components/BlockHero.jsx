import React from 'react'

const BlockHero = ({darkMode}) => {
  return (
    <div className='px-4 mx-auto max-w-[1440px]'>
      <div className='grid mt-3 mb-6 lg:gap-8 lg:mt-24 lg:mb-6 lg:grid-cols-3'>
        <div className='col-span-2 mb-2 lg:mb-0'>
            <h1 className='mb-2 text-3xl font-extrabold tracking-tight'>Flowbite Blocks - Tailwind UI components</h1>
            <p className={`text-[14px] md:text-[16px]  lg:mr-64 ${darkMode ? "dark:text-gray-400" : "text-gray-500 "}`}>Get started with 459 free and premium UI components built with the utility classes from Tailwind CSS to upgrade your web development stack and customize the colors, fonts, and dark mode using the configurator.</p>
        </div>
        <div className='lg:ml-auto'>

        </div>
      </div>
    </div>
  )
}

export default BlockHero
