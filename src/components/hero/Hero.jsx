import React, { useContext } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { PageContext } from "../../context/PageContext";
import HeroImage from "../../assets/svg/HeroImage";

const Hero = () => {
  const { isDarkMode } = useContext(PageContext);

  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-blue"
      } page-padding page-padding-top flex-1 lg:flex justify-between items-center`}
    >
      <div>
        <p
          data-aos="fade-down"
          className="text-[2rem] md:text-[2.5rem] font-bold light-text-shadow"
        >
          Hi, I am
        </p>
        <p
          data-aos="fade-down"
          className="text-[4rem] md:text-[7rem] font-bold medium-text-shadow"
        >
          Russell
        </p>
        <p data-aos="fade-down" className="text-[0.9rem] md:text-[1.3rem]">
          a showcase of my projects and my abilities
        </p>
        <div className="flex gap-2 mt-5">
          <button data-aos="fade-down" className="button-style">
            <FiGithub className="text-xl md:text-2xl" />
          </button>
          <button data-aos="fade-down" className="button-style">
            <FaLinkedinIn className="text-xl md:text-2xl" />
          </button>
          <button
            data-aos="fade-down"
            className="button-style font-bold text-sm md:text-[1rem]"
          >
            Download CV
          </button>
        </div>
      </div>
      <div data-aos="zoom-in">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
