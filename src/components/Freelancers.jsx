import React from "react";
import { motion } from "framer-motion";
import Person1 from "../assets/PERSON 1.jpg";
import Person2 from "../assets/PERSON 2.jpg";
import Person3 from "../assets/PERSON 3.jpg";
import Person4 from "../assets/PERSON 4.jpg";
import Person5 from "../assets/PERSON 5.jpg";
import Person6 from "../assets/person_three.jpg"

const Freelancers = ({ darkMode }) => {
  return (
    <div className="border-t border-b border-gray-800">
      <div className="max-w-[1440px] px-4 py-8 mx-auto lg:py-20">
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center tracking-tight leading-tight text-[22px] font-bold md:text-[36px] lg:text-[40px] mb-[10px]"
        >
          Loved by freelancers and companies all <br />
          across the globe.
        </motion.h1>

        <div className="grid lg:grid-cols-2 space-x-5 max-w-6xl mt-6 mx-auto">
          <div className="flex flex-col space-y-5 mb-5">
            <div
              className={`p-8  ${
                darkMode
                  ? " bg-gray-800 border-gray-700"
                  : "border-gray-100 bg-gray-50 "
              } rounded-xl shadow-sm grow`}
            >
              <h2 className="text-[16px] md:text-[18px] font-semibold">
                Speechless with how easy this was to integrate
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[16px] mt-3`}
              >
                "I recently got my hands on Flowbite Pro, and holy crap, I'm
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
                <br />
                <br />
                Flowbite has code in one place and I'm not joking when I say it
                took me a matter of minutes to copy the code, customise it and
                integrate within a Laravel + Vue application.
                <br />
                <br />
                If you care for your time, I hands down would go with this."
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <img
                src={Person1}
                alt="image"
                loading="eager"
                className="w-10 h-10 rounded-full object-fit"
              />
              <h2 className="text-[14px] md:text-[16px] font-seminold">
                Charlie Joseph
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[14px]`}
              >
                Web Developer at Octanna Ltd.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 mb-5">
            <div
              className={`p-8  ${
                darkMode
                  ? " bg-gray-800 border-gray-700"
                  : "border-gray-100 bg-gray-50 "
              } rounded-xl shadow-sm grow`}
            >
              <h2 className="text-[16px] md:text-[18px] font-semibold">
                Mindblowing workflow and variants
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[16px] mt-3`}
              >
                "As someone who mainly designs in the browser, I've been a
                casual user of Figma, but as soon as I saw and started playing
                with FlowBite my mind was 🤯.
                <br />
                <br />
                Everything is so well structured and simple to use (I've learnt
                so much about Figma by just using the toolkit). Aesthetically,
                the well designed components are beautiful and will undoubtedly
                level up your next application."
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <img
                src={Person2}
                alt="image"
                loading="eager"
                className="w-10 h-10 rounded-full object-fit"
              />
              <h2 className="text-[14px] md:text-[16px] font-seminold">
                Amrit Nagi
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[14px]`}
              >
                Founder at TailwindToolbox
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 mb-5 md:mt-5">
            <div
              className={`p-8  ${
                darkMode
                  ? " bg-gray-800 border-gray-700"
                  : "border-gray-100 bg-gray-50 "
              } rounded-xl shadow-sm grow`}
            >
              <h2 className="text-[16px] md:text-[18px] font-semibold">
                Speechless with how easy this was to integrate
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[16px] mt-3`}
              >
                "I recently got my hands on Flowbite Pro, and holy crap, I'm
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
                <br />
                <br />
                Flowbite has code in one place and I'm not joking when I say it
                took me a matter of minutes to copy the code, customise it and
                integrate within a Laravel + Vue application.
                <br />
                <br />
                If you care for your time, I hands down would go with this."
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <img
                src={Person3}
                alt="image"
                loading="eager"
                className="w-10 h-10 rounded-full object-fit"
              />
              <h2 className="text-[14px] md:text-[16px] font-seminold">
                Charlie Joseph
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[14px]`}
              >
                Web Developer at Octanna Ltd.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 mb-5 md:mt-5">
            <div
              className={`p-8  ${
                darkMode
                  ? " bg-gray-800 border-gray-700"
                  : "border-gray-100 bg-gray-50 "
              } rounded-xl shadow-sm grow`}
            >
              <h2 className="text-[16px] md:text-[18px] font-semibold">
                Complex and beautiful set of elements
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[16px] mt-3`}
              >
                "This is a very complex and beautiful set of elements. Under the
                hood it comes with the best things from 2 different worlds:
                Figma and Tailwind.
                <br />
                <br />
                You have many examples that can be used to create a fast
                prototype for your team."
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <img
                src={Person4}
                alt="image"
                loading="eager"
                className="w-10 h-10 rounded-full object-fit"
              />
              <h2 className="text-[14px] md:text-[16px] font-seminold">
                Alexandru Păduraru
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[14px]`}
              >
                Managing Partner at Creative Tim
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 mb-5 md:mt-5">
            <div
              className={`p-8  ${
                darkMode
                  ? " bg-gray-800 border-gray-700"
                  : "border-gray-100 bg-gray-50 "
              } rounded-xl shadow-sm grow`}
            >
              <h2 className="text-[16px] md:text-[18px] font-semibold">
                A must-have for designers
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[16px] mt-3`}
              >
                "Using Flowbite has been fantastic for my workflow. It made it
                really easy to create a very good looking project in no time.
                <br />
                <br />
                Every designer should have this in their toolbox!"
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <img
                src={Person5}
                alt="image"
                loading="eager"
                className="w-10 h-10 rounded-full object-fit"
              />
              <h2 className="text-[14px] md:text-[16px] font-seminold">
                Alexandru Păduraru
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[14px]`}
              >
                Managing Partner at Creative Tim
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 mb-5 md:mt-5">
            <div
              className={`p-8  ${
                darkMode
                  ? " bg-gray-800 border-gray-700"
                  : "border-gray-100 bg-gray-50 "
              } rounded-xl shadow-sm grow`}
            >
              <h2 className="text-[16px] md:text-[18px] font-semibold">
              Perfect choice for a SaaS application
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[16px] mt-3`}
              >
                "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <img
                src={Person6}
                alt="image"
                loading="eager"
                className="w-10 h-10 rounded-full object-fit"
              />
              <h2 className="text-[14px] md:text-[16px] font-seminold">
                Alexandru Păduraru
              </h2>
              <p
                className={`${
                  darkMode ? " text-gray-400" : "text-gray-500"
                } text-[14px]`}
              >
                Managing Partner at Creative Tim
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancers;
