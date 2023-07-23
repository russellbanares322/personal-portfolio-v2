import React from "react";
import bannerIcon from "../../assets/banner-icon.svg";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-28 pt-24 flex justify-between items-center">
      <div>
        <p className="text-[2.5rem] font-bold">Hi, I am</p>
        <p className="text-[4.8rem] font-bold">Russell</p>
        <p className="text-[1rem]">
          a showcase of my projects and my abilities
        </p>
        <div className="flex gap-2 mt-5">
          <button className="button-style">
            <FiGithub size={25} />
          </button>
          <button className="button-style">
            <FaLinkedinIn size={25} />
          </button>
          <button className="button-style font-bold">Download CV</button>
        </div>
      </div>
      <div>
        <img className="object-cover w-auto h-[25rem]" src={bannerIcon} />
      </div>
    </div>
  );
};

export default Banner;
