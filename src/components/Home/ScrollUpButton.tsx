import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import { usePageContext } from "../../context/PageContext";
import { twMerge } from "tailwind-merge";

const ScrollUpButton = () => {
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);
  const { isDarkMode, handleScrollToTop } = usePageContext();

  const handleShowScrollUpButton = () => {
    if (window.scrollY >= 60) {
      setShowScrollUpButton(true);
    } else {
      setShowScrollUpButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowScrollUpButton);

    return () => window.removeEventListener("scroll", handleShowScrollUpButton);
  }, [showScrollUpButton]);

  return (
    <div
      onClick={handleScrollToTop}
      className={twMerge(
        isDarkMode ? "bg-white text-blue" : "bg-blue text-white",
        !showScrollUpButton && "scale-0",
        "fixed right-20 bottom-10 duration-300 ease-in-out hover:translate-y-[-1px] cursor-pointer h-10 w-10 rounded-full z-20 flex justify-center items-center"
      )}
    >
      <HiArrowUp size={20} />
    </div>
  );
};

export default ScrollUpButton;
