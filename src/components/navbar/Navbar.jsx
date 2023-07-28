import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Switch from "../theme-changer/Switch";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("");

  const handleChangeActiveLink = (currentNavLink) => {
    setActiveNavLink(currentNavLink);
  };

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-blue z-50 md:flex md:justify-start md:items-center border-b border-b-yellow px-9 md:px-28 py-2 fixed w-full">
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
        className={`${
          isNavOpen && "h-[18rem] opacity-100"
        } bg-blue border-b opacity-0 h-0 md:h-full md:opacity-100 border-b-yellow absolute left-0 z-50 flex w-full flex-col items-center transition-all duration-500 ease-in-out md:static md:flex md:justify-start md:flex-row md:items-center gap-7 text-sm mt-[0.55rem] pt-2 md:py-0 md:bg-transparent md:border-none md:mt-0`}
      >
        <li
          onClick={() => handleChangeActiveLink("Home")}
          className={` ${
            activeNavLink === "Home" && "text-yellow"
          } cursor-pointer pt-6 md:pt-0 nav-links-style`}
        >
          Home
        </li>
        <li
          onClick={() => handleChangeActiveLink("About")}
          className={` ${
            activeNavLink === "About" && "text-yellow"
          } cursor-pointer nav-links-style`}
        >
          About
        </li>
        <li
          onClick={() => handleChangeActiveLink("Projects")}
          className={` ${
            activeNavLink === "Projects" && "text-yellow"
          } cursor-pointer nav-links-style`}
        >
          Projects
        </li>
        <li
          onClick={() => handleChangeActiveLink("Contact")}
          className={` ${
            activeNavLink === "Contact" && "text-yellow"
          } cursor-pointer mr-0 md:mr-auto nav-links-style`}
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
