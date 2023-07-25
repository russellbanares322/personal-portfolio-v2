import React from "react";
import aboutIcon from "../../assets/about-icon.svg";

const About = () => {
  return (
    <div className="page-padding">
      <p className="section-title">About</p>
      <div className="flex justify-between items-center">
        <img
          className="object-cover sm:h-[15rem] md:h-[15rem] lg-[25rem] xl:h-[25rem]"
          src={aboutIcon}
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, eius
          inventore quae neque ipsum ratione distinctio dolores minima
          dignissimos adipisci excepturi obcaecati! Corrupti, vero quos. Magnam
          nulla repellat perspiciatis autem.
        </p>
      </div>
    </div>
  );
};

export default About;
