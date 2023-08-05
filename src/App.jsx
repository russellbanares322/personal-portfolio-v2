import { useContext } from "react";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import { PageContext } from "./context/PageContext";
function App() {
  const { isDarkMode } = useContext(PageContext);

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
