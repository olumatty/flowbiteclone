import React from "react";
import Logo from "../../assets/Logo.svg";

const Footer = ({ darkMode }) => {
  return (
    <div className={`justify-self-end pt-16 pb-8 lg:pt-24 lg:pb-10`}>
      <div className="px-4 mx-auto max-w-[1440px] lg:px-4">
        <div className="grid gap-12 lg:grid-cols-6 lg:gap-18">
          <div className="col-span-2">
            <div className="flex mb-6 gap-2">
              <img src={Logo} alt="logo" className="h-8 w-8" />
              <h3 className="text-2xl font-semibold self-center ">Flowbite</h3>
            </div>
            <p
              className={`text-[14px] ${
                darkMode ? "dark:text-gray-400" : "text-gray-500"
              }`}
            >
              Flowbite is an ecosystem built on top of Tailwind CSS including a
              component library, block sections, a Figma design system and other
              resources.
            </p>
          </div>
          <div>
            <h3
              className={` mb-6 text-sm font-semibold uppercase ${
                darkMode ? " dark:text-white" : " text-gray-400"
              }`}
            >
              Resources
            </h3>

            <div
              className={`flex flex-col text-left font-semibold cursor-pointer gap-2 hover:underline text-[14px] ${
                darkMode
                  ? "dark:text-gray-400 hover:dark:text-white"
                  : "text-gray-500"
              }`}
            >
              <span>Documentation</span>
              <span>Flowbite Blocks</span>
              <span>Flowbite Icons</span>
              <span>Flowbite Figma</span>
              <span>Flowbite GPT </span>
              <span>Pro version</span>
            </div>
          </div>

          <div>
            <h3
              className={` mb-6 text-sm font-semibold uppercase ${
                darkMode ? " dark:text-white" : " text-gray-400"
              }`}
            >
              Help & support
            </h3>

            <div
              className={`flex flex-col text-left font-semibold cursor-pointer gap-2 hover:underline text-[14px] ${
                darkMode
                  ? "dark:text-gray-400 hover:dark:text-white"
                  : "text-gray-500"
              }`}
            >
              <span>Contact us</span>
              <span>Support center</span>
              <span>Hire us</span>
            </div>
          </div>


          <div>
            <h3
              className={` mb-6 text-sm font-semibold uppercase ${
                darkMode ? " dark:text-white" : " text-gray-400"
              }`}
            >
              Follow us
            </h3>

            <div
              className={`flex flex-col text-left font-semibold cursor-pointer gap-2 hover:underline text-[14px] ${
                darkMode
                  ? "dark:text-gray-400 hover:dark:text-white"
                  : "text-gray-500"
              }`}
            >
              <span>Discord</span>
              <span>Github</span>
              <span>Twitter</span>
            </div>
          </div>

          <div>
            <h3
              className={` mb-6 text-sm font-semibold uppercase ${
                darkMode ? " dark:text-white" : " text-gray-400"
              }`}
            >
             Legal
            </h3>

            <div
              className={`flex flex-col text-left font-semibold cursor-pointer gap-2 hover:underline text-[14px] ${
                darkMode
                  ? "dark:text-gray-400 hover:dark:text-white"
                  : "text-gray-500"
              }`}
            >
              <span>License (EULA)</span>
              <span>Privacy policy</span>
              <span>Terms & conditions</span>
              <span>Brand guideline</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
