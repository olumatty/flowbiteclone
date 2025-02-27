import React from 'react'
import { CiMail } from "react-icons/ci";


const NewsLetter = ({darkMode}) => {
  return (
    <div  className={`border-t border-b ${
        darkMode
          ? "dark:bg-gray-800 dark:border-gray-700"
          : "bg-gray-50 border-gray-700 "
      }`}>
      <div className='mx-auto max-w-[1440px] px-4 border-t border-gray-800 py-8 lg:px-20 lg:py-24'>
              <div className='flex mx-auto items-center max-w-7xl flex-col '>
                  <div className='max-w-6xl flex flex-col items-center justify-center gap-4 mb-8'>
                      <h2 className='text-center text-3xl font-bold tracking-tight lg:text-4xl'>Sign up for our newsletter</h2>
                      <p className={`text-lg text-center ${darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>
                      Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter<br/> and you will be among the first to find out about new features, components, versions, and tools.
                      </p>
                  </div>
                 <div className="mb-3">
                    <form className='flex  max-w-xl md:max-auto'>
                        <div className="w-full">
                            <div className='relative h-full flex'>
                                <div className='absolute inset-y-0 left-0 flex outline-none items-center pl-4 pointer-events-none'><CiMail className={`w-4 h-4 ${darkMode ? "dark:text-gray-400" : "text-gray-500 "} `} /></div>
                                <input type='text' placeholder='Enter your Email' className={`block rounded-l-xl  max-w-[800px] px-3 py-4 pl-11 border text-base ${darkMode ? " dark:bg-gray-700 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-gray-600 dark:placeholder:text-gray-400" : 
                            "text-gray-900 bg-white border-gray-200 focus:ring-blue-500 focus:border-blue-500   "}`}/>
                            <input type='submit' value="Subscribe" className={` px-4 py-4 max-w-[300px] text-base font-medium cursor-pointer border text-center focus:outline-none focus:ring-2 rounded-r-xl
                             ${darkMode ? " dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " : "text-white bg-blue-700 border-blue-700 hover:bg-blue-800 focus:ring-blue-600 focus:border-blue-600"} `}/>
                            </div>
                            
                        </div>
                    </form>
                    
                 </div>
                 <p className={`text-sm mt-2 md:text-center font-normal ${darkMode ? " dark:text-gray-400" : "text-gray-500 "}`}>By subscribing, you agree with ConvertKit's <span className='text-blue-600'>Terms of Service</span> and <span className='text-blue-600'> Privacy Policy.</span></p>
                 
                               
              </div>
            
          </div>
    </div>
  )
}

export default NewsLetter
