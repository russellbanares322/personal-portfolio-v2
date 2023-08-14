import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/files/logo.png";
import {
  HiMenu,
  HiOutlineX,
  HiOutlineChartSquareBar,
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineMail,
} from "react-icons/hi";
import Switch from "../theme-changer/Switch";
import { PageContext } from "../../context/PageContext";

const XNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [blurNavbar, setBlurNavbar] = useState(false);
  const {
    isDarkMode,
    aboutRef,
    projectsRef,
    contactRef,
    handleScrollToSection,
    handleScrollToTop,
    activeNavLink,
    handleChangeActiveNavLink,
  } = useContext(PageContext);

  const handleBlurNavbar = () => {
    if (window.scrollY >= 80) {
      setBlurNavbar(true);
    } else {
      setBlurNavbar(false);
    }
  };

  const handleChangeNavLink = (currentNavLink) => {
    handleChangeActiveNavLink(currentNavLink);
  };

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBlurNavbar);
  }, [blurNavbar]);

  return (
    <nav
      className={`${isDarkMode ? "bg-blue text-white" : "bg-white text-blue"} ${
        blurNavbar &&
        isDarkMode &&
        "bg-blue/10 backdrop-filter backdrop-blur-lg"
      } ${
        blurNavbar &&
        !isDarkMode &&
        "bg-white/10 backdrop-filter backdrop-blur-lg"
      } z-50 md:flex md:justify-start md:items-center page-padding py-2 w-full`}
    >
      <div className="flex items-center justify-between mr-0 md:mr-6">
        <img className="h-16 w-16 object-contain" src={logo} />
        <div onClick={handleToggleNav}>
          {isNavOpen && (
            <HiOutlineX className="cursor-pointer md:hidden" size={25} />
          )}
          {!isNavOpen && (
            <HiMenu className="cursor-pointer md:hidden" size={25} />
          )}
        </div>
      </div>
      <ul className="hidden md:flex md:justify-start md:items-center gap-7 md:w-full text-sm">
        <li
          onClick={() => {
            handleChangeNavLink("Home");
            handleScrollToTop();
          }}
          className={` ${
            activeNavLink === "Home" &&
            "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md"
          } flex items-center gap-1 cursor-pointer nav-links-style relative`}
        >
          <HiOutlineHome size={16} /> Home
        </li>
        <li
          onClick={() => {
            handleChangeNavLink("About");
            handleScrollToSection(aboutRef);
          }}
          className={` ${
            activeNavLink === "About" &&
            "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md"
          } flex items-center gap-1 cursor-pointer nav-links-style relative`}
        >
          <HiOutlineIdentification size={16} /> About
        </li>
        <li
          onClick={() => {
            handleChangeNavLink("Projects");
            handleScrollToSection(projectsRef);
          }}
          className={` ${
            activeNavLink === "Projects" &&
            "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md"
          } flex items-center gap-1 cursor-pointer nav-links-style relative`}
        >
          <HiOutlineChartSquareBar size={16} /> Projects
        </li>
        <li
          onClick={() => {
            handleChangeNavLink("Contact");
            handleScrollToSection(contactRef);
          }}
          className={` ${
            activeNavLink === "Contact" &&
            "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md"
          } flex items-center gap-1 cursor-pointer mr-0 md:mr-auto nav-links-style relative`}
        >
          <HiOutlineMail size={16} /> Contact
        </li>
        <li>
          <Switch />
        </li>
      </ul>
    </nav>
  );
};

export default XNavbar;
