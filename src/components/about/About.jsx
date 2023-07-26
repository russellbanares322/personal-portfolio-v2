import React from "react";
import aboutIcon from "../../assets/about.svg";

const About = () => {
  return (
    <div className="page-padding">
      <p className="section-title">About</p>
      <div className="flex justify-around items-center gap-12 mt-16 flex-wrap">
        <img
          className="object-cover sm:h-[15rem] md:h-[15rem] lg-[20rem] xl:h-[20rem]"
          src={aboutIcon}
        />
        <div className="w-[33rem] relative">
          <p className="leading-8 w-full mt-10 md:mt-0 text-sm md:text-[1rem]">
            My passion for technology and a strong desire to continously improve
            myself have been the driving forces behind my academic journey. I'm
            an enthusiastic learner, always eager to embrace new skills and
            knowledge that can further enhance my abilities.
          </p>
          <div className="mt-10 md:mt-0 bg-light-yellow w-80 h-80 absolute -top-10 -right-24 rounded-full opacity-10" />
          <div className="mt-10 md:mt-0 bg-light-yellow h-20 w-20 absolute -top-8 -left-5 rounded-full opacity-10" />
        </div>
      </div>
    </div>
  );
};

export default About;
