import React from 'react'

const Blocks = ({darkMode}) => {
  return (
    <div>
        <div className='items-center py-24 lg:py-8 px-4 lg:px-6 max-w-[1440px] mx-auto lg:gap-16'>
            <div className='mb-10'>
                <h3 className='font-bold text-[22px] md:text-3xl'>Building with blocks</h3>
                <div className='flex flex-col lg:flex-row mb-4 lg:mb-0 mt-4 items-start lg:items-end justify-between'>
                    <div>
                    <p className={`text-[16px] font-semibold max-w-[600px] ${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>Get started with over 400+ block sections coded with Tailwind CSS and Flowbite to build high-quality website pages.</p>
                    </div>

                    <div className={`flex ${darkMode ? " " : " "}`}>


                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Blocks
