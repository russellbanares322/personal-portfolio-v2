import React, { useContext } from "react";
import aboutIcon from "../../../assets/svg/about.svg";
import { PageContext } from "../../../context/PageContext";

const About = () => {
  const { isDarkMode, aboutRef } = useContext(PageContext);

  return (
    <div
      ref={aboutRef}
      className={`${
        isDarkMode ? "text-white" : "text-black"
      } page-padding pt-11 md:pt-38`}
    >
      <p className="section-title">About</p>
      <div className="flex justify-around items-center gap-12 mt-16 flex-wrap">
        <img
          className="object-cover sm:h-[15rem] md:h-[15rem] lg-[20rem] xl:h-[20rem]"
          src={aboutIcon}
        />
        <div className="w-[33rem] relative">
          <p className="leading-8 w-full mt-10 md:mt-0 text-sm md:text-[1rem] font-medium">
            My passion for technology and a strong desire to continously improve
            myself have been the driving forces behind my academic journey. I'm
            an enthusiastic learner, always eager to embrace new skills and
            knowledge that can further enhance my abilities.
          </p>
          <div
            className={`mt-10 md:mt-0 ${
              isDarkMode ? "bg-light-yellow/10" : "bg-blue/10"
            }  w-80 h-80 absolute -top-10 -right-24 rounded-full`}
          />
          <div
            className={`mt-10 md:mt-0  ${
              isDarkMode ? "bg-light-yellow/10" : "bg-blue/10"
            } h-20 w-20 absolute -top-8 -left-5 rounded-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
