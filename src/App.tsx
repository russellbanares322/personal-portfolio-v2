import { twMerge } from "tailwind-merge";
import { Footer, Home } from "./components";
import { usePageContext } from "./context/PageContext";

function App() {
  const { isDarkMode } = usePageContext();

  return (
    <div
      className={twMerge(
        isDarkMode ? "bg-blue" : "bg-white",
        "ease-in-out duration-300  min-h-[100vh] h-full overflow-x-hidden"
      )}
    >
      <Home />
      <Footer />
    </div>
  );
}

export default App;
