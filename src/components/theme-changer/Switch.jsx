import React from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

// HiSun
// HiMoon
const Switch = () => {
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
    <div className="bg-light-blue flex gap-5 py-[0.3rem] rounded-md relative">
      <div className="w-full px-3 py-1 flex gap-1 items-center cursor-pointer">
        {darkModeElement}
      </div>
      <div className="w-full px-3 py-1 flex gap-1 items-center cursor-pointer">
        {lightModeElement}
      </div>
      <div className="cursor-pointer absolute left-1 px-3 py-1 rounded-md top-[0.2rem] bg-blue w-[5.5rem] h-[2rem] flex gap-1 items-center">
        {darkModeElement}
      </div>
    </div>
  );
};

export default Switch;
