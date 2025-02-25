import React, { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdMenu, MdArrowRightAlt } from "react-icons/md";
import { ThemeContext } from "../../ThemeContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { darkMode, handleToggle } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-40 flex-none mx-auto w-full max-w-[1440px]">
      <header className="sticky w-full px-3 py-3 mx-auto fixed left-0 top-0 z-30">
        <div className="hidden lg:flex items-center lg:justify-between">
          <div className="flex items-center gap-x-12">
            <div className="flex items-center gap-x-3">
              <img src={Logo} alt="logo" className="max-w-full" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[8px] px-3 w-[300px] h-10 dark:bg-gray-700 text-gray-400 cursor-pointer hover:dark:bg-gray-500">
              <div className="flex items-center gap-2">
                <RiSearch2Line />
                <span className="text-[14px] font-medium">Search</span>
              </div>
              <div className="self-center">
                <p className="text-[8px] font-semibold">
                  CTRL <span className="text-[12px]">K</span>
                </p>
              </div>
            </div>
          </div>

          <div className="gap-6 flex items-center">
            <ul className="flex items-center gap-4 dark:text-gray-300 cursor-pointer">
              <li onClick={() => navigate("/blocks")} className="hover:dark:text-blue-700">Blocks</li>
              <li onClick={() => navigate("/figma")} className="hover:dark:text-blue-700">Figma</li>
              <li onClick={() => navigate("/icons")} className="hover:dark:text-blue-700">Icons</li>
              <li onClick={() => navigate("/illustrations")} className="hover:dark:text-blue-700">Illustrations</li>
              <li onClick={() => navigate("/blog")} className="hover:dark:text-blue-700">Blog</li>
              <li onClick={() => navigate("/proversion")} className="hover:dark:text-blue-700">Pro version</li>
              <li onClick={() => navigate("/pricing")} className="hover:dark:text-blue-700">Pricing & FAQ</li>
            </ul>

            <div className="flex items-center gap-2 cursor-pointer dark:text-gray-300">
              <div className="p-2 rounded-[4px] hover:bg-gray-700 hover:text-white transition-all duration-200">
                <FaGithub className="text-[16px]" />
              </div>
              <div className="p-2 rounded-[4px] hover:bg-gray-700 hover:text-white transition-all duration-200">
                <FaDiscord className="text-[16px]" />
              </div>
              <div className="p-2 rounded-[4px] hover:bg-gray-700 hover:text-white transition-all duration-200">
                <FaYoutube className="text-[16px]" />
              </div>
              <button onClick={handleToggle} className="p-2 rounded-[4px] hover:bg-gray-700 hover:text-white transition-all duration-200">
                {darkMode ? <MdDarkMode /> : <MdLightMode />}
              </button>
            </div>

            <div className="flex">
              <button onClick={() => navigate("/login")}
                className="py-[10px] px-4 rounded-[10px] bg-blue-700 text-white cursor-pointer flex items-center transition-all duration-200 ease-linear group hover:bg-blue-900">
                Sign in
                <MdArrowRightAlt className="w-5 h-5 ml-1 transition-all duration-200 ease-in-out group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Small and Medium screen */}
        <div className="lg:hidden flex items-center justify-between gap-x-10">
          <div className="flex items-center gap-x-12">
            <div className="flex items-center gap-x-3">
              <img src={Logo} alt="logo" className="max-w-full" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
            </div>

            <div className="hidden md:flex lg:hidden items-center justify-between rounded-[8px] px-3 w-[260px] h-10 dark:bg-gray-700 text-gray-400 cursor-pointer hover:dark:bg-gray-500">
              <div className="flex items-center gap-2">
                <RiSearch2Line />
                <span className="text-[14px]">Search</span>
              </div>
              <div className="self-center">
                <p className="text-[8px] font-semibold">
                  CTRL <span className="text-[12px]">K</span>
                </p>
              </div>
            </div>
          </div>

          <div className="gap-4 flex items-center">
            <div className="md:hidden dark:bg-gray-100 dark:text-gray-500 cursor-pointer hover:dark:bg-gray-600 hover:dark:text-white py-3 px-3 rounded-[6px]">
              <RiSearch2Line className="h-5 w-5 max-w-full" />
            </div>

            <button onClick={handleToggle} className="p-2 text-xl rounded-[4px] dark:text-gray-500 dark:hover:bg-gray-700 transition-all duration-200">
              {darkMode ? <MdDarkMode /> : <MdLightMode />}
            </button>

            <div className="flex">
              <button onClick={() => navigate("/login")}
                className="py-[8px] text-[12px] md:text-[14px] md:py-[10px] px-3 md:px-5 rounded-[10px] bg-blue-700 text-white cursor-pointer flex items-center transition-all duration-200 ease-linear group hover:bg-blue-900">
                Sign in
              </button>
            </div>

            <div className="text-white">
            <button onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white cursor-pointer p-2 ">
                {isOpen ? <MdMenu size={30} className="text-white"/> : <MdMenu size={30} className="text-white"/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="fixed top-15 left-0 w-full h-[300px] bg-[#070709] text-white transition-all duration-300 ease-in-out transform lg:hidden overflow-y-auto">

            <ul className="flex flex-col items-start space-y-6 mt-10 px-4">
              <li onClick={() => { navigate("/marketplace"); setIsOpen(false); }} className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer">MarketPlace</li>
              <li onClick={() => { navigate("/enterprise"); setIsOpen(false); }} className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer">Enterprise</li>
              <li onClick={() => { navigate("/pricing"); setIsOpen(false); }} className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer">Pricing</li>
            
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
