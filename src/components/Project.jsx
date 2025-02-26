import React from 'react'
import Image from "../assets/PERSON 2.jpg"
import { FaGithub,FaNpm,FaFigma,FaDiscord   } from "react-icons/fa6";

const Project = ({darkMode}) => {
  return (
    <div className='pt-16 pb-16 lg:pt-24 lg:pb-28'>
        <div className='px-4 mx-auto max-w-[1440px]'>
        <div className='grid grid-cols-1  lg:grid-cols-2 lg:gap-28'>
            <div className='flex flex-col items-center'>
                <div>
                    <blockquote className='mb-8'>
                        <h3 className='mb-4 text-[16px] md:text-[20px] font-semibold '> Solid foundation for any project</h3>
                        <p className={`font-normal ${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}><p class="font-normal text-gray-500 dark:text-gray-400">"Flowbite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project. <br/> <br/>Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p></p>
                    </blockquote>

                    <div className='flex items-center'>
                    <img src={Image} alt='image' className='relative h-14 w-14 object-fit rounded-full mr-5'/>
                
                <div className='flex items-center flex-col'>
                    <h3 className='font-medium text-[18px]'>Eugene Fedorenko</h3>
                    <p className={`font-normal ${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>Lead designer at Wildbit</p>
                </div>
                </div>
                    
                </div>
              

            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 mt-4 lg:mt-0'>
                <div className='flex items-center'>
                    <div className={`p-5 rounded-lg hover:shadow-md ${darkMode ? "dark:hover:bg-gray-700" : "hover:bg-gray-100 "} `}>
                    <p className='font-bold text-[18px] md:text-4xl '>8,296</p>
                    <div className='flex items-center mt-3'>
                    <FaGithub  className={`h-4 w-4 md:h-6 md:w-6 mr-2 ${darkMode ? "dark:text-gray-500" : "text-gray-300 "}`}/>
                    <p className={` text-[12px] md:text-[16px] ${darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>Stars on Github</p>
                    </div>

                    </div>
                </div>

                <div className='flex items-center'>
                    <div className={`p-5 rounded-lg hover:shadow-md ${darkMode ? "dark:hover:bg-gray-700" : "hover:bg-gray-100 "} `}>
                    <p className='font-bold text-[18px] md:text-4xl '>19,393,236</p>
                    <div className='flex items-center mt-3'>
                    <FaNpm className={`h-4 w-4 md:h-6 md:w-6 mr-2 ${darkMode ? "dark:text-gray-500" : "text-gray-300 "}`}/>
                    <p className={`text-[12px] md:text-[16px] ${darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>Downloads on NPM</p>
                    </div>

                    </div>
                </div>

                <div className='flex items-center'>
                    <div className={`p-5 rounded-lg hover:shadow-md ${darkMode ? "dark:hover:bg-gray-700" : "hover:bg-gray-100 "} `}>
                    <p className='font-bold text-[18px] md:text-4xl '>14,000+</p>
                    <div className='flex items-center mt-3'>
                    <FaFigma className={`h-4 w-4 md:h-6 md:w-6 mr-2 ${darkMode ? "dark:text-gray-500" : "text-gray-300 "}`}/>
                    <p className={` text-[12px] md:text-[16px] ${darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>Figma Duplicates</p>
                    </div>

                    </div>
                </div>

                <div className='flex items-center'>
                    <div className={`p-5 rounded-lg hover:shadow-md ${darkMode ? "dark:hover:bg-gray-700" : "hover:bg-gray-100 "} `}>
                    <p className='font-bold text-[18px] md:text-4xl '>100</p>
                    <div className='flex items-center mt-3'>
                    <FaDiscord  className={`h-4 w-4 md:h-6 md:w-6  mr-2 ${darkMode ? "dark:text-gray-500" : "text-gray-300 "}`}/>
                    <p className={` text-[12px] md:text-[16px] ${darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>Discord members online</p>
                    </div>

                    </div>
                </div>

            </div>
        </div>
        </div>      
    </div>
  )
}

export default Project
