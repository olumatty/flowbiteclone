import React from 'react'

const Blogs = ({darkMode}) => {
  return (
    <div className='pt-20 pb-8 lg:pt-22 '>
        <div className='flex justify-between px-4 mx-auto max-w-[1440px]'>
            <div className='hidden mb-6 lg:block  lg:w-80'>
                <div className='sticky top-36'>
                    <aside>
                        <div className={`p-6 mb-6 font-medium rounded-lg border  ${darkMode ? "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" : "text-gray-500 bg-white border-gray-200 "}`}>
                            <h1 className='mb-2 font-bold uppercase '>Flowbite Blog</h1>
                        </div>
                    </aside>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Blogs
