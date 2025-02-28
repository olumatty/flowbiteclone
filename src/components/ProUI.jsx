import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import DarkKaban from "../assets/kanban-dark.svg";
import LightKaban from "../assets/kanbanLight.svg";
import DashboardDark from "../assets/dashboard-dark.svg";
import DashboardLight from "../assets/dashboardLight.svg"
import CalDark from "../assets/calendar-dark.svg";
import CalLight from "../assets/calendarLight.svg"
import ChartDark from "../assets/chatroom-dark.svg";
import ChartLight from"../assets/chatroomLight.svg"
import DataDark from "../assets/datatables-dark.svg";
import DataLight from "../assets/datatablesLight.svg";
import AIDark from "../assets/ai-prompts-dark.svg";
import AILight from "../assets/ai-promptsLight.svg";

const ProUI = ({darkMode}) => {
  return (
    <div className={`border-t mt-14 ${darkMode ? "border-gray-700" : "border-gray-800 "}`}>
            <div className='items-center lg:mt-12 py-24 lg:py-8 px-4 lg:px-6 max-w-[1440px] mx-auto lg:gap-16'>
                <div className='mb-10'>
                    <h3 className='font-bold text-[22px] md:text-3xl'>Application UI pages and components</h3>
                    <div className='flex flex-col lg:flex-row mb-4 lg:mb-0 mt-4 items-start lg:items-center justify-between'>
                        <div>
                        <p className={`text-[16px] font-semibold max-w-[800px]  ${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>Get access to 62 pages and hundreds of UI components available in React and HTML that you can use in a web application including a dashboard layout, charts, calendar, kanban board, and more.</p>
                        </div>
    
                        <div className={`flex items-center border rounded-lg font-medium text-base px-5 py-2.5 mt-4 gap-2 transition-all duration-200 ease-linear group   ${darkMode ? "dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-600" :
                             "text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 border-gray-200 "}`}>
                                <FaRegEye className='transition-all duration-300 ease-in-out group-hover:translate-x-2'/>
                                <p>Preview Dashboard</p>
                                
                                
                        </div>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-10'>
    
                    <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                        <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                            <div className='flex items-start flex-col'>
                                <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Dashboard</h3>
                            </div>
                            <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                <FaArrowUpRightFromSquare className='h-3 w-3'/>
                            </div>
                        </div>
    
                        <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 w-fit h-fit lg:h-72'>
                            <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                <img src={DashboardDark} alt='image' className=' border-b-lg max-w-full'/>
                            </div>
    
                            <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                <img src={DashboardLight} alt='image' className='max-w-full'/>
                            </div>
                        </div>
                    </div>

                    <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                        <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                            <div className='flex items-start flex-col'>
                                <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Kanban board</h3>
                            </div>
                            <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                <FaArrowUpRightFromSquare className='h-3 w-3'/>
                            </div>
                        </div>
    
                        <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-72'>
                            <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                <img src={DarkKaban} alt='image' className=' border-b-lg max-w-full'/>
                            </div>
    
                            <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                <img src={LightKaban} alt='image' className='max-w-full'/>
                            </div>
                        </div>
                    </div>

                    <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                        <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                            <div className='flex items-start flex-col'>
                                <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Calendar page</h3>
                            </div>
                            <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                <FaArrowUpRightFromSquare className='h-3 w-3'/>
                            </div>
                        </div>
    
                        <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-72'>
                            <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                <img src={CalDark} alt='image' className=' border-b-lg max-w-full'/>
                            </div>
    
                            <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                <img src={CalLight} alt='image' className='max-w-full'/>
                            </div>
                        </div>
                    </div>

                    <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                        <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                            <div className='flex items-start flex-col'>
                                <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Chatroom page</h3>
                            </div>
                            <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                <FaArrowUpRightFromSquare className='h-3 w-3'/>
                            </div>
                        </div>
    
                        <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-72'>
                            <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                <img src={ChartDark} alt='image' className=' border-b-lg max-w-full'/>
                            </div>
    
                            <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                <img src={ChartLight} alt='image' className='max-w-full'/>
                            </div>
                        </div>
                    </div>

                    <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                        <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                            <div className='flex items-start flex-col'>
                                <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Datatables page</h3>
                            </div>
                            <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                <FaArrowUpRightFromSquare className='h-3 w-3'/>
                            </div>
                        </div>
    
                        <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-72'>
                            <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                <img src={DataDark} alt='image' className=' border-b-lg max-w-full'/>
                            </div>
    
                            <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                <img src={DataLight} alt='image' className='max-w-full'/>
                            </div>
                        </div>
                    </div>

                    <div className={`cursor-pointer rounded-lg transition-all duration-200 ease-linear border ${darkMode ? "dark:border-gray-800 dark:hover:border-gray-700 dark:shadow-lg-light dark:bg-gray-900 " : "border-gray-100 hover:border-white"}`}>
                        <div className={`rounded-t-lg py-2.5 px-5 flex  justify-between items-center border-b ${darkMode ? "dark:bg-gray-700 dark:border-gray-700 " : "bg-gray-50 border-gray-200 "}`}>
                            <div className='flex items-start flex-col'>
                                <h3 className={`text-[14px] md:text-[16px] font-semibold ${darkMode ? "text-gray-300": "text-gray-900"}`}>Calendar page</h3>
                            </div>
                            <div className={`${darkMode ? "dark:text-gray-400 " : "text-gray-500"}`}>
                                <FaArrowUpRightFromSquare className='h-3 w-3'/>
                            </div>
                        </div>
    
                        <div className='relative flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-50 h-fit lg:h-72'>
                            <div className={`relative max-w-full h-full w-full rounded-lg ${darkMode ? "block" : "hidden"}`}>
                                <img src={AIDark} alt='image' className=' border-b-lg max-w-full'/>
                            </div>
    
                            <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                <img src={AILight} alt='image' className='max-w-full'/>
                            </div>
                        </div>
                    </div>
    
    
                    
                </div>
                <div className='flex items-center justify-center mt-5 md:mt-12'>
                    <div className={`px-5.5 py-2.5 border rounded-lg cursor-pointer text-base relative ${darkMode ? "dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-70 dark:border-gray-600 ": " text-gray-900 border-gray-200  hover:text-blue-500 bg-white "}`}>
                        Load more pages
                    </div>
                </div>
            </div>
          
        </div>
  )
}

export default ProUI
