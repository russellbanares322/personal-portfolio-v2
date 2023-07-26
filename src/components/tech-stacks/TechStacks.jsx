import React from "react";
import { techStacksData } from "../../data/TechstackData";
import { HiBookmark } from "react-icons/hi";

const TechStacks = () => {
  return (
    <div className="page-padding">
      <p className="section-title">Tech stacks</p>
      <div className="flex justify-evenly items-center mt-16 flex-wrap gap-4 md:gap-3 relative">
        {techStacksData?.map((techStack) => (
          <div
            className="transition duration-500 ease-in-out relative flex flex-col gap-1 items-center justify-center bg-light-blue h-24 w-24 md:w-32 md:h-32 rounded-tl-md rounded-br-md rounded-tr-sm rounded-bl-sm border-l-8 border-l-yellow border-b-8 border-b-yellow transform backface-visibility-hidden -rotate-6 hover:rotate-0 "
            key={techStack.id}
          >
            <p className="text-sm">{techStack.icon}</p>
            <p className="text-xs md:text-[0.8rem]">{techStack.name}</p>
            <HiBookmark className="absolute -top-1 -left-0 text-light-yellow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
