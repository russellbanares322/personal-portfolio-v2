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
import { twMerge } from "tailwind-merge";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [blurNavbar, setBlurNavbar] = useState(false);
  const defaultClassName =
    "flex items-center gap-1 cursor-pointer nav-links-style relative";

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

  const handleBlurNavbar = () => {
    if (window.scrollY >= 80) {
      setBlurNavbar(true);
    } else {
      setBlurNavbar(false);
    }
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

  const getActiveNavLinkClassName = (selectedNavLink: TActiveNavLink) => {
    if (activeNavLink === selectedNavLink) {
      return "text-yellow after:absolute after:bottom-[-1.6rem] after:w-full after:h-1 after:bg-yellow after:left-0 after:rounded-md";
    }
  };

  return (
    <nav
      className={twMerge(
        isDarkMode ? "bg-blue text-white" : "bg-white text-blue",
        blurNavbar &&
          isDarkMode &&
          !isNavOpen &&
          "bg-blue/10 backdrop-filter backdrop-blur-lg",
        "w-full z-50 md:flex md:justify-start md:items-center px-7 md:px-20 py-3 max-w-[1640px] fixed mx-auto"
      )}
    >
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
          className={twMerge(
            getActiveNavLinkClassName("Home"),
            defaultClassName
          )}
        >
          <HiOutlineHome size={16} /> Home
        </li>
        <li
          onClick={() => {
            handleChangeNavLink("About");
            handleScrollToSection(aboutRef);
          }}
          className={twMerge(
            getActiveNavLinkClassName("About"),
            defaultClassName
          )}
        >
          <HiOutlineIdentification size={16} /> About
        </li>
        <li
          onClick={() => {
            handleChangeNavLink("Projects");
            handleScrollToSection(projectsRef);
          }}
          className={twMerge(
            getActiveNavLinkClassName("Projects"),
            defaultClassName
          )}
        >
          <HiOutlineChartSquareBar size={16} /> Projects
        </li>
        <li
          onClick={() => {
            handleChangeNavLink("Contact");
            handleScrollToSection(contactRef);
          }}
          className={twMerge(
            getActiveNavLinkClassName("Contact"),
            defaultClassName
          )}
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
          "transition-all ease-in-out duration-300"
        )}
      >
        <HiOutlineX
          onClick={handleCloseNav}
          className={twMerge(
            isDarkMode ? "text-white" : "text-blue",
            isNavOpen ? "rotate-90" : "rotate-0",
            "duration-200 ease-in-out"
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
            className={twMerge(
              getActiveNavLinkClassName("Home"),
              defaultClassName
            )}
          >
            <HiOutlineHome size={16} /> Home
          </li>
          <li
            onClick={() => {
              handleChangeNavLink("About");
              handleScrollToSection(aboutRef);
              handleCloseNav();
            }}
            className={twMerge(
              getActiveNavLinkClassName("About"),
              defaultClassName
            )}
          >
            <HiOutlineIdentification size={16} /> About
          </li>
          <li
            onClick={() => {
              handleChangeNavLink("Projects");
              handleScrollToSection(projectsRef);
              handleCloseNav();
            }}
            className={twMerge(
              getActiveNavLinkClassName("Projects"),
              defaultClassName
            )}
          >
            <HiOutlineChartSquareBar size={16} /> Projects
          </li>
          <li
            onClick={() => {
              handleChangeNavLink("Contact");
              handleScrollToSection(contactRef);
              handleCloseNav();
            }}
            className={twMerge(
              getActiveNavLinkClassName("Contact"),
              defaultClassName
            )}
          >
            <HiOutlineMail size={16} /> Contact
          </li>
          <li className="mt-3">
            <ThemeToggler />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;