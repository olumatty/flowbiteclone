import React from "react";
import Flowbite from "../assets/Logo.svg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Figma from "../assets/figma.svg";
import Tailwind from "../assets/tailwind.svg";
import Image from "../assets/person_one.jpg";
import Image2 from "../assets/person_three.jpg";
import Image3 from "../assets/person_four.jpg";
import Image4 from "../assets/person_two.jpg";
const Blogs = ({ darkMode }) => {
  return (
    <div className="pt-20 pb-8 lg:pt-22 ">
      <div className="flex justify-between px-4 mx-auto max-w-[1440px]">
        <div className="hidden mb-6 lg:block  lg:w-80">
          <div className="sticky top-36">
            <aside>
              <div
                className={`p-6 mb-6 font-medium rounded-lg border  ${
                  darkMode
                    ? "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    : "text-gray-500 bg-white border-gray-200 "
                }`}
              >
                <h1
                  className={`mb-2 font-bold uppercase ${
                    darkMode ? " text-white" : " text-dark-900"
                  }`}
                >
                  Flowbite Blog
                </h1>
                <p
                  className={`text-sm ${
                    darkMode ? " dark:text-gray-400" : "text-gray-500 "
                  }`}
                >
                  Blog posts, articles, and tutorials about web development and
                  design.
                </p>
              </div>
              <div
                className={`p-6 mb-6 font-medium rounded-lg border  ${
                  darkMode
                    ? "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    : "text-gray-500 bg-white border-gray-200 "
                }`}
              >
                <h4
                  className={`mb-4 font-bold uppercase ${
                    darkMode ? " text-white" : " text-dark-900"
                  }`}
                >
                  Resources
                </h4>
                <div
                  className={`inline-flex justify-center items-center rounded-lg p-5 mb-4 w-full text-base font-medium ${
                    darkMode
                      ? " dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                      : "hover:text-gray-900 hover:bg-gray-100 "
                  }  `}
                >
                  <img src={Flowbite} alt="logo" className="h-5 w-5 mr-3" />
                  <span className="w-full text-[15px]">Flowbite Library</span>
                  <MdOutlineArrowRightAlt className="ml-3 w-6 h-6" />
                </div>
                <div
                  className={`inline-flex justify-center items-center rounded-lg p-5 mb-4 w-full text-base font-medium ${
                    darkMode
                      ? " dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                      : "hover:text-gray-900 hover:bg-gray-100 "
                  }  `}
                >
                  <img src={Figma} alt="logo" className="h-5 w-5 mr-3" />
                  <span className="w-full text-[15px]">
                    Figma design system
                  </span>
                  <MdOutlineArrowRightAlt className="ml-3 w-6 h-6" />
                </div>
                <div
                  className={`inline-flex justify-center items-center rounded-lg p-5 mb-4 w-full text-base font-medium ${
                    darkMode
                      ? " dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                      : "hover:text-gray-900 hover:bg-gray-100 "
                  }  `}
                >
                  <img src={Tailwind} alt="logo" className="h-5 w-5 mr-3" />
                  <span className="w-full text-[15px]">
                    Tailwind CSS Themes
                  </span>
                  <MdOutlineArrowRightAlt className="ml-3 w-6 h-6" />
                </div>
              </div>
              <div
                className={`p-6 mb-6 font-medium rounded-lg border  ${
                  darkMode
                    ? "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    : "text-gray-500 bg-white border-gray-200 "
                }`}
              >
                <h1
                  className={`mb-2 font-bold uppercase ${
                    darkMode ? " text-white" : " text-dark-900"
                  }`}
                >
                  BECOME AN AUTHOR
                </h1>
                <p
                  className={`text-sm ${
                    darkMode ? " dark:text-gray-400" : "text-gray-500 "
                  }`}
                >
                  Do you want to contribute by writing guest posts on this blog?
                  <br />
                  <br />
                  Please contact us and send us a resume of previous articles
                  that you have written.
                </p>
                <div
                  className={`bg-blue-500 px-5 py-2.5 mt-3 rounded-lg text-center ${
                    darkMode ? " text-white" : " text-dark-900"
                  }`}
                >
                  Get in touch
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <div
            className={`flex items-center justify-between py-4 border-t border-b ${
              darkMode ? " dark:border-gray-700" : "border-gray-200"
            } not-format`}
          >
            <span className="text-sm font-bold lg:mb-0"> 6 posts in total</span>
          </div>
          <div
            className={`divide-y ${
              darkMode ? "dark:divide-gray-700 " : "divide-gray-200"
            }`}
          >
            <article className="py-6">
              <div className="flex items-center justify-between mb-3 text-gray-500">
                <div className="flex ">
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Tailwind CSS
                  </div>
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Flowbite
                  </div>
                </div>
                <span className="text-sm">Published 3 months ago</span>
              </div>
              <h2 className="mb-2 text-xl font-bold tracking-tight hover:underline">
                Tailwind v4 is here! Learn how to upgrade your current project
                and explore the new features with Flowbite
              </h2>
              <p
                className={`mb-5 ${
                  darkMode ? " dark:text-gray-400" : "text-gray-500 "
                }`}
              >
                A few days ago the developers from Tailwind officially announced
                the v4-beta which means that you can now officially start
                playing around with the new version of Tailwind.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={Image}
                    alt="image"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">Zoltan Szogyejti</span>
                </div>
                <div
                  className={`inline-flex items-center font-medium text-blue-600 hover:underline`}
                >
                  <span>Read more</span>
                  <MdOutlineArrowRightAlt className="ml-3 w-6 h-6" />
                </div>
              </div>
            </article>

            <article className="py-6">
              <div className="flex items-center justify-between mb-3 text-gray-500">
                <div className="flex ">
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Tailwind CSS
                  </div>
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Flowbite
                  </div>
                </div>
                <span className="text-sm">Published 3 months ago</span>
              </div>
              <h2 className="mb-2 text-xl font-bold tracking-tight hover:underline">
                Tailwind v4 is here! Learn how to upgrade your current project
                and explore the new features with Flowbite
              </h2>
              <p
                className={`mb-5 ${
                  darkMode ? " dark:text-gray-400" : "text-gray-500 "
                }`}
              >
                A few days ago the developers from Tailwind officially announced
                the v4-beta which means that you can now officially start
                playing around with the new version of Tailwind.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={Image}
                    alt="image"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">Zoltan Szogyejti</span>
                </div>
                <div
                  className={`inline-flex items-center font-medium text-blue-600 hover:underline`}
                >
                  <span>Read more</span>
                  <MdOutlineArrowRightAlt className="ml-3 w-6 h-6" />
                </div>
              </div>
            </article>

            <article className="py-6">
              <div className="flex items-center justify-between mb-3 text-gray-500">
                <div className="flex ">
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Tailwind CSS
                  </div>
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Flowbite
                  </div>
                </div>
                <span className="text-sm">Published 3 months ago</span>
              </div>
              <h2 className="mb-2 text-xl font-bold tracking-tight hover:underline">
                Tailwind v4 is here! Learn how to upgrade your current project
                and explore the new features with Flowbite
              </h2>
              <p
                className={`mb-5 ${
                  darkMode ? " dark:text-gray-400" : "text-gray-500 "
                }`}
              >
                A few days ago the developers from Tailwind officially announced
                the v4-beta which means that you can now officially start
                playing around with the new version of Tailwind.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={Image}
                    alt="image"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">Zoltan Szogyejti</span>
                </div>
                <div
                  className={`inline-flex items-center font-medium text-blue-600 hover:underline`}
                >
                  <span>Read more</span>
                  <MdOutlineArrowRightAlt className="ml-3 w-6 h-6" />
                </div>
              </div>
            </article>

            <article className="py-6">
              <div className="flex items-center justify-between mb-3 text-gray-500">
                <div className="flex ">
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Tailwind CSS
                  </div>
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Flowbite
                  </div>
                </div>
                <span className="text-sm">Published 3 months ago</span>
              </div>
              <h2 className="mb-2 text-xl font-bold tracking-tight hover:underline">
                Tailwind v4 is here! Learn how to upgrade your current project
                and explore the new features with Flowbite
              </h2>
              <p
                className={`mb-5 ${
                  darkMode ? " dark:text-gray-400" : "text-gray-500 "
                }`}
              >
                A few days ago the developers from Tailwind officially announced
                the v4-beta which means that you can now officially start
                playing around with the new version of Tailwind.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={Image}
                    alt="image"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">Zoltan Szogyejti</span>
                </div>
                <div
                  className={`inline-flex items-center font-medium text-blue-600 hover:underline`}
                >
                  <span>Read more</span>
                  <MdOutlineArrowRightAlt className="ml-3 w-6 h-6" />
                </div>
              </div>
            </article>

            <article className="py-6">
              <div className="flex items-center justify-between mb-3 text-gray-500">
                <div className="flex ">
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Tailwind CSS
                  </div>
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Flowbite
                  </div>
                </div>
                <span className="text-sm">Published 3 months ago</span>
              </div>
              <h2 className="mb-2 text-xl font-bold tracking-tight hover:underline">
                Tailwind v4 is here! Learn how to upgrade your current project
                and explore the new features with Flowbite
              </h2>
              <p
                className={`mb-5 ${
                  darkMode ? " dark:text-gray-400" : "text-gray-500 "
                }`}
              >
                A few days ago the developers from Tailwind officially announced
                the v4-beta which means that you can now officially start
                playing around with the new version of Tailwind.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={Image}
                    alt="image"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">Zoltan Szogyejti</span>
                </div>
                <div
                  className={`inline-flex items-center font-medium text-blue-600 hover:underline`}
                >
                  <span>Read more</span>
                  <MdOutlineArrowRightAlt className="ml-3 w-6 h-6" />
                </div>
              </div>
            </article>

            <article className="py-6">
              <div className="flex items-center justify-between mb-3 text-gray-500">
                <div className="flex ">
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Tailwind CSS
                  </div>
                  <div
                    className={`text-sm font-medium mb-2 mr-2 px-2.5 py-0.5 rounded ${
                      darkMode
                        ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 "
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    # Flowbite
                  </div>
                </div>
                <span className="text-sm">Published 3 months ago</span>
              </div>
              <h2 className="mb-2 text-xl font-bold tracking-tight hover:underline">
                Tailwind v4 is here! Learn how to upgrade your current project
                and explore the new features with Flowbite
              </h2>
              <p
                className={`mb-5 ${
                  darkMode ? " dark:text-gray-400" : "text-gray-500 "
                }`}
              >
                A few days ago the developers from Tailwind officially announced
                the v4-beta which means that you can now officially start
                playing around with the new version of Tailwind.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={Image}
                    alt="image"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">Zoltan Szogyejti</span>
                </div>
                <div
                  className={`inline-flex items-center font-medium text-blue-600 hover:underline`}
                >
                  <span>Read more</span>
                  <MdOutlineArrowRightAlt className="ml-3 w-6 h-6" />
                </div>
              </div>
            </article>
          </div>
        </div>

        <aside className="hidden lg:block lg:w-80">
          <div className="sticky top-36">
            <h3 className="hidden">Sidebar</h3>
            <div
              className={`p-6 pb-4 mt-6 rounded-lg font-medium ${
                darkMode
                  ? " dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  : "text-gray-500 bg-white border-gray-200 "
              }`}
            >
              <h4
                className={`mb-4 font-bold uppercase ${
                  darkMode ? "dark:text-white" : "dark-gray-900"
                }`}
              >
                Recommended topics
              </h4>
              <div className="grid grid-cols-3  items-center gap-2">
                <div
                  className={`text-[12px] font-medium px-2.5 py-1 rounded inline-flex justify-center ${
                    darkMode
                      ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  #Alphine.js
                </div>
                <div
                  className={`text-[12px] font-medium px-2.5 py-1 rounded inline-flex justify-center ${
                    darkMode
                      ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  #Angular
                </div>

                <div
                  className={`text-[12px] font-medium px-2.5 py-1 rounded inline-flex justify-center ${
                    darkMode
                      ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  #Figma
                </div>
                <div
                  className={`text-[12px] font-medium px-2.5 py-1 rounded inline-flex justify-center ${
                    darkMode
                      ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  #Flowbite
                </div>
                <div
                  className={`text-[12px] font-medium px-2.5 py-1 rounded inline-flex justify-center ${
                    darkMode
                      ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  #Laravel
                </div>
                <div
                  className={`text-[12px] font-medium px-2.5 py-1 rounded inline-flex justify-center ${
                    darkMode
                      ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  #Next.js
                </div>
                <div
                  className={`text-[12px] font-medium px-2.5 py-1 min-w-[120px] rounded inline-flex justify-center ${
                    darkMode
                      ? "dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  # Tailwind CSS
                </div>
              </div>
            </div>

            <div
              className={`p-6 pb-4 mt-6 rounded-lg font-medium ${
                darkMode
                  ? " dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  : "text-gray-500 bg-white border-gray-200 "
              }`}
            >
              <h4
                className={`mb-4 font-bold uppercase ${
                  darkMode ? "dark:text-white" : "dark-gray-900"
                }`}
              >
                Communities Authors
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4 ">
                  <img
                    src={Image2}
                    alt="image"
                    className="h-6 w-6 rounded-full flex items-center"
                  />
                  <div className="flex flex-col space-y-1">
                    <h2
                      className={`${
                        darkMode ? "text-white" : "text-gray-900 "
                      } font-medium`}
                    >
                      Rick Klien
                    </h2>
                    <p>
                      Co-founder at Suncel: a CMS for Next.js apps and websites.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 ">
                  <img
                    src={Image3}
                    alt="image"
                    className="h-6 w-6 rounded-full flex items-center"
                  />
                  <div className="flex flex-col space-y-1">
                    <h2
                      className={`${
                        darkMode ? "text-white" : "text-gray-900 "
                      } font-medium`}
                    >
                      Rick Klien
                    </h2>
                    <p>
                      Co-founder at Suncel: a CMS for Next.js apps and websites.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 ">
                  <img
                    src={Image4}
                    alt="image"
                    className="h-6 w-6 rounded-full flex items-center"
                  />
                  <div className="flex flex-col space-y-1">
                    <h2
                      className={`${
                        darkMode ? "text-white" : "text-gray-900 "
                      } font-medium`}
                    >
                      Rick Klien
                    </h2>
                    <p>
                      Co-founder at Suncel: a CMS for Next.js apps and websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blogs;
