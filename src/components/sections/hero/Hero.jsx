import React, { useContext } from "react";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import HeroImage from "../../../assets/svg/HeroImage";
import resume from "../../../assets/files/Russell_Bañares.pdf";
import { motion } from "framer-motion";
import { PageContext } from "../../../context/PageContext";
import {
  bannerTextContainerAnimation,
  bannerTextAnimation,
  bannerDescriptionAnimation,
  bannerButtonsContainerAnimation,
  bannerButtonsAnimation,
  bannerImageAnimation,
} from "../../../global/animation/animations";

const Hero = () => {
  const { isDarkMode } = useContext(PageContext);

  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-blue"
      } page-padding page-padding-top flex-1 lg:flex justify-between items-center`}
    >
      <div>
        <motion.div
          variants={bannerTextContainerAnimation}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={bannerTextAnimation}
            className="text-[2rem] md:text-[2.5rem] font-bold light-text-shadow"
          >
            Hi, I am
          </motion.p>
          <motion.p
            variants={bannerTextAnimation}
            className="text-[4rem] md:text-[7rem] font-bold medium-text-shadow"
          >
            Russell
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={bannerDescriptionAnimation}
            className="text-[0.9rem] md:text-[1.3rem]"
          >
            a showcase of my projects and my abilities
          </motion.p>
        </motion.div>
        <motion.div
          variants={bannerButtonsContainerAnimation}
          initial="hidden"
          animate="visible"
          className="flex gap-2 mt-5 overflow-hidden"
        >
          <motion.button
            variants={bannerButtonsAnimation}
            className="button-style"
          >
            <a target="_blank" href="https://github.com/russellbanares322">
              <FiGithub className="text-xl md:text-2xl" />
            </a>
          </motion.button>
          <motion.button
            variants={bannerButtonsAnimation}
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
            variants={bannerButtonsAnimation}
            className="button-style font-bold text-sm md:text-[1rem]"
          >
            <a download="Russell_Bañares.pdf" href={resume}>
              Download CV
            </a>
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        variants={bannerImageAnimation}
        initial="hidden"
        animate="visible"
      >
        <HeroImage />
      </motion.div>
    </div>
  );
};

export default Hero;
