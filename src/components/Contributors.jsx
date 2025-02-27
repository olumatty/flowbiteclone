import React from 'react'
import Person1 from "../assets/PERSON 2.jpg"
import Person2 from "../assets/person_one.jpg"
import Person3 from "../assets/person_three.jpg"
import Person4 from "../assets/person_four.jpg"
import Person5 from "../assets/PERSON 1.jpg"
import Person6 from"../assets/PERSON 2.jpg";
import Person7 from "../assets/PERSON 3.jpg";
import Person8 from "../assets/PERSON 4.jpg"
import { IoIosArrowForward } from "react-icons/io";

const Contributors = ({darkMode}) => {
  return (
    <div className='mx-auto max-w-[1440px] px-4 border-t border-gray-800 py-8 lg:px-20 lg:py-24'>
        <div className='flex mx-auto items-center max-w-7xl flex-col gap-12'>
            <div className='max-w-2xl flex flex-col items-center justify-center gap-4'>
                <h2 className='text-center text-3xl font-bold tracking-tight lg:text-4xl'>Community Contributors</h2>
                <p className={`text-lg text-center ${darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>Join a community of open-source contributors by tuning in with the Flowbite React community and become one of the highlighted members</p>
            </div>
            <div className='flex max-w-5xl justify-center flex-col px-4 lg:px-8'>
                <div className='flex flex-wrap items-center justify-center gap-3'>
                    <img src={Person1} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person2} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person3} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person4} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person5} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person6} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person7} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person8} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person1} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person4} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person5} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person3} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person2} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person8} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person1} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person1} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person6} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person7} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person8} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person1} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person4} className='h-14 w-14 rounded-full'alt='Person1'/>
                    <img src={Person5} className='h-14 w-14 rounded-full'alt='Person1'/>
                </div>
            </div>
            <div className ={`flex  flex-col items-start rounded-md w-full gap-4 lg:items-center p-4 lg:gap-8 lg:flex-row justify-between ${darkMode ? "dark:bg-gray-800 " : "bg-gray-500 "}`}>
                <div className='flex w-full flex-col'>
                    <h2 className='text-left text-xl font-bold tracking-tight '>Join the commmunity </h2>
                    <p className={`${darkMode? " dark:text-gray-400" : "text-gray-500 "}`}>Become a member of a community of developers by supporting Flowbite </p>
                </div>
                <div className='text-blue-500 flex-row items-center whitespace-pre flex gap-2'>
                    <p>See our repository</p>
                    <IoIosArrowForward />
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Contributors
