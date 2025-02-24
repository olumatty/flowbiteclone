import React from 'react'
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div className='sticky top-0 z-40 flex-none mx-auto w-full max-w-8xl'>
        <header className='sticky w-full px-3 py-3 mx-auto fixed left-0 top-0 z-30 border-b border-gray-300 dark:bg-gray-900'>
          <div className='flex items-center lg:justify-between'>
            <div className='flex items-center gap-x-3'>
              <img src={Logo} alt='logo' className=''/>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header
