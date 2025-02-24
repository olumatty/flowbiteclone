import React from "react";
import Logo from "../../assets/Logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="sticky top-0 z-40 flex-none mx-auto w-full max-w-[1440px]">
      <header className="sticky w-full px-3 py-3 mx-auto fixed left-0 top-0 z-30  ">
        <div className="flex items-center lg:justify-between">
          <div className="flex items-center gap-x-12">
            <div className="flex items-center gap-x-3">
              <img src={Logo} alt="logo" className="max-w-full" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[8px] px-3 w-[300px] h-10 dark:bg-gray-700 text-gray-400">
              <div className="flex items-center gap-2">
                <RiSearch2Line />
                <span className="text-[14px] font-medium">Search</span>
              </div>
              <div className="self-center">
                <p className="text-[8px] font-semibold ">
                  CTRL <span className="text-[12px]">K</span>
                </p>
              </div>
            </div>
          </div>
          <div className="gap-4 flex items-center">
            <ul className="flex items-center gap-4">
              <li>Docs</li>
              <li>Blocks</li>
              <li>Figma</li>
              <li>Icon</li>
              <li>Illustrations</li>
              <li>Blog</li>
              <li>Pro version</li>
              <li>Pricing & FAQ</li>
            </ul>

            <div className="flex items-center gap-4">
            <FaGithub />
            <FaDiscord />
            <FaYoutube/>


            </div>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between gap-x-10">
          <div className="flex items-center gap-x-3">
            <img src={Logo} alt="logo" className="max-w-full" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </div>
          <div className="relative items-center flex ">
            <RiSearch2Line />
            <input type="text" placeholder="Search" className="w-1/4" />
            <span>CTRLK</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
