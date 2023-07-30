import { createContext, useEffect, useRef, useState } from "react";

export const PageContext = createContext();

const PageProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [activeNavLink, setActiveNavLink] = useState("");
  const isDarkMode = theme === "dark";
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const techStacksRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setActiveNavLink("Home");
  };

  const handleChangeActiveNavLink = (currentActiveNavLink) => {
    setActiveNavLink(currentActiveNavLink);
  };

  const handleToggleTheme = () => {
    let selectedTheme = "";
    if (isDarkMode) {
      setTheme("light");
      selectedTheme = "light";
    } else {
      setTheme("dark");
      selectedTheme = "dark";
    }
    localStorage.setItem("pageTheme", selectedTheme);
  };

  useEffect(() => {
    const checkTheme = localStorage.getItem("pageTheme");
    if (checkTheme) {
      setTheme(checkTheme);
    }
  }, []);

  return (
    <PageContext.Provider
      value={{
        isDarkMode,
        handleToggleTheme,
        handleScrollToSection,
        handleScrollToTop,
        handleChangeActiveNavLink,
        activeNavLink,
        projectsRef,
        aboutRef,
        techStacksRef,
        contactRef,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
