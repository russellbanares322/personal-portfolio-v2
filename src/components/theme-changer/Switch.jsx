import React, { useContext } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

// HiSun
// HiMoon
const Switch = () => {
  const { isDarkMode, handleLightMode, handleDarkMode } =
    useContext(ThemeContext);

  const lightModeElement = (
    <>
      <HiOutlineSun size={20} />
      <p className="font-medium">Light</p>
    </>
  );

  const darkModeElement = (
    <>
      <HiOutlineMoon size={20} />
      <p className="font-medium">Dark</p>
    </>
  );

  return (
    <div className="bg-light-blue flex gap-4 py-[0.4rem] rounded-md relative w-48">
      <div
        onClick={handleDarkMode}
        className="w-full px-3 py-1 flex gap-1 items-center cursor-pointer text-center ml-[0.3rem]"
      >
        {darkModeElement}
      </div>
      <div
        onClick={handleLightMode}
        className="w-full px-3 py-1 flex gap-1 items-center cursor-pointer text-center pr-[3rem]"
      >
        {lightModeElement}
      </div>
      <div
        className={`cursor-pointer absolute ${
          isDarkMode ? "left-1" : "right-1"
        } px-3 py-1 rounded-md top-[0.12rem] bg-blue w-[5.6rem] h-[2.3rem] flex gap-1 items-center`}
      >
        {isDarkMode ? darkModeElement : lightModeElement}
      </div>
    </div>
  );
};

export default Switch;
