import React, { useContext } from "react";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { PageContext } from "../../../context/PageContext";
import HeroImage from "../../../assets/svg/HeroImage";
import resume from "../../../assets/files/Russell_Bañares.pdf";
import { motion } from "framer-motion";
import { buttonAnimation } from "../../../global/animations/animations";

const Hero = () => {
  const { isDarkMode } = useContext(PageContext);

  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-blue"
      } page-padding pt-24 flex-1 lg:flex justify-between items-center`}
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
          <motion.button
            data-aos="fade-up"
            data-aos-delay="100"
            whileTap={buttonAnimation.whileTap}
            whileHover={buttonAnimation.whileHover}
            className="button-style"
          >
            <a target="_blank" href="https://github.com/russellbanares322">
              <FiGithub className="text-xl md:text-2xl" />
            </a>
          </motion.button>
          <motion.button
            data-aos="fade-up"
            data-aos-delay="200"
            whileTap={buttonAnimation.whileTap}
            whileHover={buttonAnimation.whileHover}
            className="button-style"
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/russell-ba%C3%B1ares-5aa044242/"
            >
              <RiLinkedinLine className="text-xl md:text-[1.6rem]" />
            </a>
          </motion.button>
          <motion.button
            data-aos="fade-up"
            data-aos-delay="300"
            whileTap={buttonAnimation.whileTap}
            whileHover={buttonAnimation.whileHover}
            className="button-style font-bold text-sm md:text-[1rem]"
          >
            <a download="Russell_Bañares.pdf" href={resume}>
              Download CV
            </a>
          </motion.button>
        </div>
      </div>
      <div data-aos="zoom-in">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
