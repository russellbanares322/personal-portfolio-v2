import React, { useContext } from "react";
import { PageContext } from "../../context/PageContext";

const Footer = () => {
  const { isDarkMode } = useContext(PageContext);

  return (
    <footer
      className={`${
        isDarkMode ? "text-white bg-black" : "text-blue bg-white"
      } text-center  py-3 mt-10`}
    >
      <p>&copy; Created by Russ 🤘</p>
    </footer>
  );
};

export default Footer;
