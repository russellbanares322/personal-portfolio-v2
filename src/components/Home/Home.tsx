import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { About, Banner, Contact, Projects, TechStacks } from "../../sections";
import ScrollUpButton from "./ScrollUpButton";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Projects />
      <About />
      <TechStacks />
      <Contact />
      <ScrollUpButton />
    </>
  );
};

export default Home;
