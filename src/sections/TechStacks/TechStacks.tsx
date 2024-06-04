import { HiBookmark } from "react-icons/hi";
import { usePageContext } from "../../context/PageContext";
import { techStacksData } from "../../data/techStacksData";
import { twMerge } from "tailwind-merge";

const TechStacks = () => {
  const { isDarkMode, techStacksRef } = usePageContext();

  return (
    <div
      ref={techStacksRef}
      className={twMerge(
        isDarkMode ? "text-white" : "text-blue",
        "page-padding-x max-w-[1640px] mx-auto page-padding-top"
      )}
    >
      <p data-aos="fade-right" className="section-title">
        Tech stacks
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center mt-16  relative">
        {techStacksData?.map((techStack, index) => (
          <div
            key={techStack.id}
            data-aos-delay={200 + (index + 200)}
            data-aos-duration={1000 + (index + 200)}
            data-aos="zoom-in"
          >
            <div className="transition duration-500 ease-in-out relative flex flex-col gap-1 items-center justify-center bg-light-blue h-24 w-24 md:w-32 md:h-32 rounded-tl-md rounded-br-md rounded-tr-sm rounded-bl-sm border-l-8 border-l-yellow border-b-8 border-b-yellow transform backface-visibility-hidden -rotate-6 hover:rotate-1 ">
              <p className="text-sm text-white">{techStack.icon}</p>
              <p className="text-xs md:text-[0.8rem] text-white">
                {techStack.name}
              </p>
              <HiBookmark className="absolute -top-1 -left-0 text-light-yellow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
