import React from "react";
import IMAGEDARK from "../assets/chat-gpt-dark.svg";
import IMAGELIGHT from "../assets/chat-gptLight.svg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const FlowGpt = ({ darkMode }) => {
  return (
    <div
      className={`border-t border-b ${
        darkMode
          ? "dark:bg-gray-800 dark:border-gray-700"
          : "bg-gray-50 border-gray-700 "
      }`}
    >
      <div className="max-w-[1440px] px-4 py-8 mx-auto lg:py-24">
        <div className="grid items-center justify-center mx-auto grid-cols-1 lg:gap-28 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-8"></div>
            <div>
              <blockquote className="mb-8">
                <h3 className="mb-2 text-[16px] md:text-[32px] font-bold">
                  Flowbite GPT
                </h3>
                <p
                  className={`font-medium max-w-[800px] text-[14px] md:text-[16px] ${
                    darkMode ? "dark:text-gray-400 " : "text-gray-500"
                  }`}
                >
                  Start generating UI components, sections, pages, and code
                  snippets with our custom trained GPT model based on
                  open-source resources.
                  <br /> <br />
                  The data we used to train this ChatGPT is based on our
                  extensive collection of UI component examples, JS API
                  references and data attributes interface from the Flowbite
                  Library.
                </p>
              </blockquote>

              <div className="inline-flex items-center cursor-pointer font-medium text-[14px] rounded-lg md:text-[16px] transition-all duration-200s  hover:bg-blue-600 bg-green-800 text-white px-5 py-2.5 cursor gap-2 ">
                <p>Open with ChatGPT</p>
                < MdOutlineArrowRightAlt className="w-6 h-6"/>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center">
            <div
              className={`relative w-full h-auto  text-center ${
                darkMode ? "block" : "hidden"
              }`}
            >
              <img
                src={IMAGEDARK}
                alt="image"
                className=" mx-auto rounded-xl max-w-full"
              />
            </div>

            <div
              className={`relative w-full h-auto  text-center ${
                darkMode ? "hidden" : "block"
              }`}
            >
              <img
                src={IMAGELIGHT}
                alt="image"
                className="mx-auto rounded-xl max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowGpt;
