import { useEffect, useState } from "react";
import logo from "../../assets/files/logo.png";
import {
  HiMenu,
  HiOutlineX,
  HiOutlineChartSquareBar,
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineMail,
} from "react-icons/hi";
import { TActiveNavLink, usePageContext } from "../../context/PageContext";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { twMerge } from "tailwind-merge";

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
  } = usePageContext();
  const defaultNavLinkStyleClassName =
    "flex items-center gap-1 cursor-pointer nav-links-style relative";
  const activeNavLinkStyleClassName =
    "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md";

  const handleBlurNavbar = () => {
    setBlurNavbar(window.scrollY >= 80);
  };

  const handleChangeNavLink = (currentNavLink: TActiveNavLink) => {
    handleChangeActiveNavLink(currentNavLink);
  };

  const handleOpenNav = () => {
    setIsNavOpen(true);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBlurNavbar);
  }, [blurNavbar]);

  const getNavLinkStyleClassName = (navLink: TActiveNavLink) => {
    return `${defaultNavLinkStyleClassName} ${
      activeNavLink === navLink && activeNavLinkStyleClassName
    }`;
  };

  return (
    <nav
      className={twMerge(
        isDarkMode ? "bg-blue text-white" : "bg-white text-blue",
        blurNavbar &&
          isDarkMode &&
          !isNavOpen &&
          "bg-blue/10 backdrop-filter backdrop-blur-lg",
        blurNavbar &&
          !isDarkMode &&
          !isNavOpen &&
          "bg-white/10 backdrop-filter backdrop-blur-lg",
        "w-full z-50 px-7 md:px-20 py-3 fixed"
      )}
    >
      <div className="max-w-[1640px] mx-auto md:flex md:justify-start md:items-center">
        <div className="flex items-center justify-between mr-0 md:mr-6">
          <img className="h-16 w-16 object-contain" src={logo} />
          <div onClick={handleOpenNav}>
            <HiMenu className="cursor-pointer md:hidden" size={25} />
          </div>
        </div>
        <ul className="hidden md:flex md:justify-start md:items-center gap-7 md:w-full text-sm">
          <li
            onClick={() => {
              handleChangeNavLink("Home");
              handleScrollToTop();
            }}
            className={getNavLinkStyleClassName("Home")}
          >
            <HiOutlineHome size={16} /> Home
          </li>
          <li
            onClick={() => {
              handleChangeNavLink("About");
              handleScrollToSection(aboutRef);
            }}
            className={getNavLinkStyleClassName("About")}
          >
            <HiOutlineIdentification size={16} /> About
          </li>
          <li
            onClick={() => {
              handleChangeNavLink("Projects");
              handleScrollToSection(projectsRef);
            }}
            className={getNavLinkStyleClassName("Projects")}
          >
            <HiOutlineChartSquareBar size={16} /> Projects
          </li>
          <li
            onClick={() => {
              handleChangeNavLink("Contact");
              handleScrollToSection(contactRef);
            }}
            className={getNavLinkStyleClassName("Contact")}
          >
            <HiOutlineMail size={16} /> Contact
          </li>
          <li className="ml-auto">
            <ThemeToggler />
          </li>
        </ul>
        {/* Mobile navbar*/}
        {isNavOpen && (
          <div className="md:hidden bg-black/80 fixed w-full left-0 h-screen top-0" />
        )}
        <div
          className={twMerge(
            isDarkMode ? "bg-blue text-white" : "bg-white text-blue",
            isNavOpen ? "translate-x-5" : "translate-x-[100%]",
            "md:hidden fixed top-0 right-0 h-full w-[16rem] shadow-md p-6 transition-all ease-in-out duration-300"
          )}
        >
          <HiOutlineX
            onClick={handleCloseNav}
            className={twMerge(
              isDarkMode ? "text-white" : "text-blue",
              isNavOpen ? "rotate-90" : "rotate-0",
              "cursor-pointer duration-200 ease-in-out"
            )}
            size={25}
          />
          <ul className="flex-col flex gap-7 w-full text-sm mt-24">
            <li
              onClick={() => {
                handleChangeNavLink("Home");
                handleScrollToTop();
                handleCloseNav();
              }}
              className={getNavLinkStyleClassName("Home")}
            >
              <HiOutlineHome size={16} /> Home
            </li>
            <li
              onClick={() => {
                handleChangeNavLink("About");
                handleScrollToSection(aboutRef);
                handleCloseNav();
              }}
              className={getNavLinkStyleClassName("About")}
            >
              <HiOutlineIdentification size={16} /> About
            </li>
            <li
              onClick={() => {
                handleChangeNavLink("Projects");
                handleScrollToSection(projectsRef);
                handleCloseNav();
              }}
              className={getNavLinkStyleClassName("Projects")}
            >
              <HiOutlineChartSquareBar size={16} /> Projects
            </li>
            <li
              onClick={() => {
                handleChangeNavLink("Contact");
                handleScrollToSection(contactRef);
                handleCloseNav();
              }}
              className={getNavLinkStyleClassName("Contact")}
            >
              <HiOutlineMail size={16} /> Contact
            </li>
            <li className="mt-3">
              <ThemeToggler />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
