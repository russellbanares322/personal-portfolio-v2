import { HiSun, HiOutlineSun, HiMoon, HiOutlineMoon } from "react-icons/hi";
import { usePageContext } from "../../context/PageContext";

const ThemeToggler = () => {
  const { isDarkMode, handleToggleTheme } = usePageContext();

  const lightModeElement = (
    <>
      {!isDarkMode ? <HiSun size={20} /> : <HiOutlineSun size={20} />}
      <p className="font-medium">Light</p>
    </>
  );

  const darkModeElement = (
    <>
      {isDarkMode ? <HiMoon size={20} /> : <HiOutlineMoon size={20} />}
      <p className="font-medium">Dark</p>
    </>
  );

  return (
    <div
      className={`${
        isDarkMode ? "bg-light-blue" : "bg-gray-200"
      } flex gap-4 py-[0.4rem] rounded-md relative w-48`}
    >
      <div
        onClick={handleToggleTheme}
        className="w-full px-3 py-1 flex gap-1 items-center cursor-pointer text-center ml-[0.2rem] z-50"
      >
        {darkModeElement}
      </div>
      <div
        onClick={handleToggleTheme}
        className="w-full px-3 py-1 flex gap-1 items-center cursor-pointer text-center pr-[3rem] z-50"
      >
        {lightModeElement}
      </div>
      <div
        className={`cursor-pointer absolute ${
          isDarkMode
            ? "translate-x-[0.2rem] bg-blue"
            : " translate-x-[5.8rem] bg-white"
        } transition duration-300 ease-in-out px-3 py-1 rounded-md top-[0.12rem]  w-[6rem] h-[2.3rem] flex gap-1 items-center`}
      />
    </div>
  );
};

export default ThemeToggler;
