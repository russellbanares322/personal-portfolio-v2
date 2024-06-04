import { twMerge } from "tailwind-merge";
import aboutIcon from "../../assets/svg/about.svg";
import { usePageContext } from "../../context/PageContext";
const About = () => {
  const { isDarkMode, aboutRef } = usePageContext();

  const renderMoonElement = (moonSize: "small" | "large") => {
    const isSelectedMoonSizeSmall = moonSize === "small";

    return (
      <div
        data-aos="zoom-in"
        className={twMerge(
          isDarkMode ? "bg-light-yellow/10" : "bg-blue/10",
          isSelectedMoonSizeSmall
            ? "w-20 h-20 -top-8 -left-5"
            : "w-80 h-80 -top-10 -right-24",
          "mt-10 md:mt-0 absolute rounded-full"
        )}
      />
    );
  };

  return (
    <div
      ref={aboutRef}
      className={twMerge(
        isDarkMode ? "text-white" : "text-black",
        "page-padding-x max-w-[1640px] w-full mx-auto pt-11 md:pt-38 page-padding-top"
      )}
    >
      <p data-aos="fade-right" className="section-title">
        About
      </p>
      <div className="flex justify-around items-center gap-12 mt-16 flex-wrap">
        <img
          data-aos="zoom-in"
          className="object-cover sm:h-[15rem] md:h-[15rem] lg-[20rem] xl:h-[20rem]"
          src={aboutIcon}
        />
        <div className="w-[33rem] relative">
          <p
            data-aos="fade-up"
            className="leading-8 w-full mt-10 md:mt-0 text-sm md:text-[1rem] font-medium"
          >
            My passion for technology and a strong desire to continously improve
            myself have been the driving forces behind my academic journey. I'm
            an enthusiastic learner, always eager to embrace new skills and
            knowledge that can further enhance my abilities.
          </p>
          {renderMoonElement("small")}
          {renderMoonElement("large")}
        </div>
      </div>
    </div>
  );
};

export default About;
