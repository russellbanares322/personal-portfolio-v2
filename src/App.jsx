import { useContext } from "react";
import { ThemeContext } from "./components/context/ThemeContext";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        isDarkMode ? "bg-blue" : "bg-white"
      } ease-in-out duration-300  min-h-[100vh] h-full overflow-x-hidden`}
    >
      <Home />
      <Footer />
    </div>
  );
}

export default App;
