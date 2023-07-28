import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const isDarkMode = theme === "dark";

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
    <ThemeContext.Provider value={{ isDarkMode, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
