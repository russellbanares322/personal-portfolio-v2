import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/files/logo.png";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { PageContext } from "../../context/PageContext";
import Switch from "../theme-changer/Switch";

const Navbar = () => {
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
      } z-50 md:flex md:justify-start md:items-center page-padding py-2 fixed w-full`}
    >
      <div className="flex items-center justify-between mr-0 md:flex md:mr-6">
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
      <ul
        className={`${isNavOpen ? "translate-y-0" : "-translate-y-96"} ${
          isDarkMode
            ? "bg-blue border-b border-b-yellow"
            : "bg-white border-b border-b-blue"
        } pb-7 md:translate-y-0 md:h-full md:opacity-100 absolute left-0 z-50 flex w-full flex-col items-center transition-all duration-300 ease-in-out md:static md:flex md:justify-start md:flex-row md:items-center gap-7 text-sm pt-2 md:py-0 md:bg-transparent md:border-none md:mt-0`}
      >
        <li
          onClick={() => {
            handleChangeNavLink("Home");
            handleScrollToTop();
          }}
          className={` ${
            activeNavLink === "Home" &&
            "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md"
          } cursor-pointer pt-6 md:pt-0 nav-links-style relative`}
        >
          Home
        </li>
        <li
          onClick={() => {
            handleChangeNavLink("About");
            handleScrollToSection(aboutRef);
          }}
          className={` ${
            activeNavLink === "About" &&
            "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md"
          } cursor-pointer nav-links-style relative`}
        >
          About
        </li>
        <li
          onClick={() => {
            handleChangeNavLink("Projects");
            handleScrollToSection(projectsRef);
          }}
          className={` ${
            activeNavLink === "Projects" &&
            "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md"
          } cursor-pointer nav-links-style relative`}
        >
          Projects
        </li>
        <li
          onClick={() => {
            handleChangeNavLink("Contact");
            handleScrollToSection(contactRef);
          }}
          className={` ${
            activeNavLink === "Contact" &&
            "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md"
          } cursor-pointer mr-0 md:mr-auto nav-links-style relative`}
        >
          Contact
        </li>
        <li>
          <Switch />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
