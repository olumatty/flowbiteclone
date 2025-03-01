import React, { useContext, useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";
import {
  MdDarkMode,
  MdLightMode,
  MdMenu,
  MdArrowRightAlt,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-[9999] flex-none w-full">
      <header
        className={`w-full px-3 py-3 fixed top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? "bg-gray-900 bg-opacity-90 border-b border-gray-700"
              : "bg-white bg-opacity-90 border-b border-gray-300"
            : "bg-transparent"
        }`}
      >
        {/* This ensures the content is centered */}
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-x-12">
              <div
                onClick={() => navigate("/")}
                className="flex items-center gap-x-3 cursor-pointer"
              >
                <img src={Logo} alt="logo" className="" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Flowbite
                </span>
              </div>

              <div
                className={`flex z-50 items-center justify-between rounded-[8px] px-3 min-w-[300px] h-10  cursor-pointer ${
                  darkMode
                    ? "dark:bg-gray-700 dark:text-gray-400 hover:dark:bg-gray-500"
                    : "bg-gray-50 border text-gray-400 border-gray-200"
                }`}
              >
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

            <div className="gap-6 flex items-center">
              <ul
                className={`flex items-center gap-4 ${
                  darkMode ? "dark:text-gray-300" : "text-black "
                } cursor-pointer`}
              >
                <li
                  onClick={() => navigate("/blocks")}
                  className="hover:dark:text-blue-700"
                >
                  Blocks
                </li>
               
                <li
                  onClick={() => navigate("/blog")}
                  className="hover:dark:text-blue-700"
                >
                  Blog
                </li>
                <li
                  onClick={() => navigate("/proversion")}
                  className="hover:dark:text-blue-700"
                >
                  Pro version
                </li>
                <li
                  onClick={() => navigate("/pricing")}
                  className="hover:dark:text-blue-700"
                >
                  Pricing & FAQ
                </li>
              </ul>

              <div
                className={`flex items-center gap-2 cursor-pointer ${
                  darkMode ? "dark:text-gray-400" : "text-gray-500"
                }`}
              >
                <div
                  className={`p-2 rounded-[4px] inline-flex ${
                    darkMode
                      ? "hover:bg-gray-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 dark:focus:ring-gray-700 "
                      : "focus:outline-none focus:ring-4 focus:ring-gray-200"
                  }`}
                >
                  <FaGithub className="text-[16px]" />
                </div>
                <div
                  className={`p-2 rounded-[4px] inline-flex ${
                    darkMode
                      ? "hover:bg-gray-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 dark:focus:ring-gray-700 "
                      : "focus:outline-none focus:ring-4 focus:ring-gray-200"
                  }`}
                >
                  <FaDiscord className="text-[16px]" />
                </div>
                <div
                  className={`p-2 rounded-[4px] inline-flex ${
                    darkMode
                      ? "hover:bg-gray-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 dark:focus:ring-gray-700 "
                      : "focus:outline-none focus:ring-4 focus:ring-gray-200"
                  }`}
                >
                  <FaYoutube className="text-[16px]" />
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-[4px] inline-flex ${
                    darkMode
                      ? "hover:bg-gray-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 dark:focus:ring-gray-700 "
                      : "focus:outline-none focus:ring-4 focus:ring-gray-200"
                  }`}
                >
                  {darkMode ? <MdDarkMode /> : <MdLightMode />}
                </button>
              </div>

              <div className="flex">
                <button
                  onClick={() => navigate("/login")}
                  className="py-[10px] px-4 rounded-[10px] bg-blue-700 text-white cursor-pointer flex items-center transition-all duration-200 ease-linear group hover:bg-blue-900"
                >
                  Sign in
                  <MdArrowRightAlt className="w-5 h-5 ml-1 transition-all duration-200 ease-in-out group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Small and Medium screen */}
          <div className="lg:hidden flex items-center justify-between gap-4 md:gap-x-10">
            <div className="flex items-center gap-x-5 md:gap-x-12 ">
              <div className="flex items-center gap-x-3">
                <img src={Logo} alt="logo" className="h-4 w-4 md:max-w-full" />
                <span className="self-center text-[18px] md:text-2xl font-semibold whitespace-nowrap">
                  Flowbite
                </span>
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
              <div
                className={`hidden cursor-pointer ${
                  darkMode
                    ? "dark:bg-gray-100 dark:text-gray-500  hover:dark:bg-gray-600 hover:dark:text-white"
                    : "bg-gray-300 text-gray-900 hover:bg-gray-200"
                } p-2 md:p-3 rounded-[6px]`}
              >
                <RiSearch2Line className=" h-3 w-3 md:h-5 md:w-5 max-w-full" />
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 md:text-xl rounded-[4px] dark:text-gray-500 dark:hover:bg-gray-700 transition-all duration-200"
              >
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>

              <div className="flex">
                <button
                  onClick={() => navigate("/login")}
                  className="py-[8px] text-[10px] shrink-0 whitespace-nowrap md:text-[14px] md:py-[10px] px-5 md:px-5 rounded-[10px] bg-blue-700 text-white cursor-pointer flex items-center transition-all duration-200 ease-linear group hover:bg-blue-900"
                >
                  Sign in
                </button>
              </div>

              <div className="text-gray-800 dark:text-white flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden cursor-pointer w-10 h-10 text-sm p-2.5 inline-flex items-center justify-center focus:outline-none focus:ring-4 ${
                  darkMode
                    ? "dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
                    : "text-gray-500 hover:bg-gray-100 focus:ring-gray-200"
                } ml-auto w-auto max-w-full`}
              >
                <MdMenu size={28} />
              </button>
            </div>

            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div
              className={`fixed top-15 left-0 w-full h-[300px] font-medium ${
                darkMode
                  ? "dark:bg-gray-900 dark:text-gray-300 "
                  : "bg-white text-gray-900"
              } transition-all duration-300 ease-in-out transform lg:hidden overflow-y-auto`}
            >
              <ul className="flex items-start flex-col space-y-3 md:space-y-4  mt-2 px-4 cursor-pointer">
                <li
                  onClick={() => {
                    navigate("/blocks");
                    setIsOpen(false);
                  }}
                  className="hover:dark:text-blue-600"
                >
                  Blocks
                </li>
                
                <li
                  onClick={() => navigate("/blog")}
                  className="hover:dark:text-blue-700"
                >
                  Blog
                </li>
                <li
                  onClick={() => navigate("/proversion")}
                  className="hover:dark:text-blue-700"
                >
                  Pro version
                </li>
                <li
                  onClick={() => navigate("/pricing")}
                  className="hover:dark:text-blue-600"
                >
                  Pricing & FAQ
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
