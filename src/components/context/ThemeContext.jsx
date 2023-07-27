import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleLightMode = () => {
    setTheme("light");
    localStorage.setItem("pageTheme", theme);
  };

  const handleDarkMode = () => {
    setTheme("dark");
    localStorage.setItem("pageTheme", theme);
  };

  useEffect(() => {
    const checkTheme = localStorage.getItem("pageTheme");
    if (checkTheme) {
      setTheme(checkTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleLightMode, handleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
