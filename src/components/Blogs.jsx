import React from 'react'
import Flowbite from "../assets/Logo.svg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Figma from "../assets/figma.svg"
import Tailwind from "../assets/tailwind.svg"
const Blogs = ({darkMode}) => {
  return (
    <div className='pt-20 pb-8 lg:pt-22 '>
        <div className='flex justify-between px-4 mx-auto max-w-[1440px]'>
            <div className='hidden mb-6 lg:block  lg:w-80'>
                <div className='sticky top-36'>
                    <aside>
                        <div className={`p-6 mb-6 font-medium rounded-lg border  ${darkMode ? "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" : "text-gray-500 bg-white border-gray-200 "}`}>
                            <h1 className={`mb-2 font-bold uppercase ${darkMode ? " text-white" : " text-dark-900"}`}>Flowbite Blog</h1>
                            <p className={`text-sm ${darkMode ? " dark:text-gray-400" : "text-gray-500 "}`}>Blog posts, articles, and tutorials about web development and design.</p>
                        </div>
                        <div className={`p-6 mb-6 font-medium rounded-lg border  ${darkMode ? "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" : "text-gray-500 bg-white border-gray-200 "}`}>
                            <h4 className={`mb-4 font-bold uppercase ${darkMode ? " text-white" : " text-dark-900"}`}>Resources</h4>
                            <div className={`inline-flex justify-center items-center rounded-lg p-5 mb-4 w-full text-base font-medium ${darkMode ? " dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white" : "hover:text-gray-900 hover:bg-gray-100 "}  `}>
                                <img src={Flowbite } alt='logo' className='h-5 w-5 mr-3'/>
                                <span className='w-full text-[15px]'>Flowbite Library</span>
                                <MdOutlineArrowRightAlt  className='ml-3 w-6 h-6'/>
                            </div>
                            <div className={`inline-flex justify-center items-center rounded-lg p-5 mb-4 w-full text-base font-medium ${darkMode ? " dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white" : "hover:text-gray-900 hover:bg-gray-100 "}  `}>
                                <img src={Figma} alt='logo' className='h-5 w-5 mr-3'/>
                                <span className='w-full text-[15px]'>Figma design system</span>
                                <MdOutlineArrowRightAlt  className='ml-3 w-6 h-6'/>
                            </div>
                            <div className={`inline-flex justify-center items-center rounded-lg p-5 mb-4 w-full text-base font-medium ${darkMode ? " dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white" : "hover:text-gray-900 hover:bg-gray-100 "}  `}>
                                <img src={Tailwind } alt='logo' className='h-5 w-5 mr-3'/>
                                <span className='w-full text-[15px]'>Tailwind CSS Themes</span>
                                <MdOutlineArrowRightAlt  className='ml-3 w-6 h-6'/>
                            </div>
                        </div>
                        <div className={`p-6 mb-6 font-medium rounded-lg border  ${darkMode ? "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" : "text-gray-500 bg-white border-gray-200 "}`}>
                            <h1 className={`mb-2 font-bold uppercase ${darkMode ? " text-white" : " text-dark-900"}`}>BECOME AN AUTHOR</h1>
                            <p className={`text-sm ${darkMode ? " dark:text-gray-400" : "text-gray-500 "}`}>Do you want to contribute by writing guest posts on this blog?<br/><br/>Please contact us and send us a resume of previous articles that you have written.</p>
                            <div className={`bg-blue-500 px-5 py-2.5 mt-3 rounded-lg text-center ${darkMode ? " text-white" : " text-dark-900"}`}>
                                Get in touch
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <div className='w-full max-w-2xl mx-auto'>
                <div className={`flex items-center justify-between py-4 border-t border-b ${darkMode ? " dark:border-gray-700" : "border-gray-200"} not-format`}>
                    <span className='text-sm font-bold lg:mb-0'> 6 posts in total</span>
                    
                </div>
                <div className={`divide-y ${darkMode ? "dark:divide-gray-200 " :"divide-gray-200"}`}>
                        <article className='py-6'></article>
                    </div>
            </div>

        </div>
      
    </div>
  )
}

export default Blogs
