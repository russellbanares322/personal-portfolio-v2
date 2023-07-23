import React from "react";
import bannerIcon from "../../assets/banner-icon.svg";

const Banner = () => {
  return (
    <div className="px-28 pt-32 flex justify-between items-center">
      <div>
        <p className="text-[2.5rem] font-bold">Hi, I am</p>
        <p className="text-[4rem] font-bold">Russell</p>
        <p className="text-[1rem]">
          a showcase of my projects and my abilities
        </p>
      </div>
      <div>
        <img className="object-cover w-auto h-[25rem]" src={bannerIcon} />
      </div>
    </div>
  );
};

export default Banner;
