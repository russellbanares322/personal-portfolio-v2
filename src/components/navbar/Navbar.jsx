import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="md:flex md:justify-start md:items-center md:border-b md:border-b-yellow px-9 py-2">
      <div className="flex items-center justify-between mr-0 md:flex md:mr-6">
        <img className="h-14 w-14 object-contain" src={logo} />
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
          isNavOpen ? "top-[60px]" : "top-[-400px]"
        } border-t border-t-yellow md:opacity-1 absolute left-0 z-50 flex w-full flex-col items-center transition-all duration-500 ease-in-out md:static md:flex md:justify-start md:flex-row md:items-center gap-5 text-sm mt-7 py-5 md:py-0 md:border-none md:mt-0`}
      >
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
