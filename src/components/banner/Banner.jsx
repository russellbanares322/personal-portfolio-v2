import React from "react";
import bannerIcon from "../../assets/banner.svg";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="page-padding flex justify-between items-center flex-wrap">
      <div>
        <p className="text-[2rem] md:text-[2.5rem] font-bold light-text-shadow">
          Hi, I am
        </p>
        <p className="text-[4rem] md:text-[4.8rem] font-bold medium-text-shadow">
          Russell
        </p>
        <p className="text-[0.9rem] md:text-[1rem]">
          a showcase of my projects and my abilities
        </p>
        <div className="flex gap-2 mt-5">
          <button className="button-style">
            <FiGithub className="text-xl md:text-2xl" />
          </button>
          <button className="button-style">
            <FaLinkedinIn className="text-xl md:text-2xl" />
          </button>
          <button className="button-style font-bold text-sm md:text-[1rem]">
            Download CV
          </button>
        </div>
      </div>
      <div>
        <img
          className="object-cover w-auto bg-center mt-16 mx-auto md:mt-0 md:mx-0 sm:h-[15rem] md:h-[15rem] lg-[25rem] xl:h-[25rem]"
          src={bannerIcon}
        />
      </div>
    </div>
  );
};

export default Banner;
