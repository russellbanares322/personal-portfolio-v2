import Navbar from "../../components/navbar/Navbar";
import Hero from "../sections/hero/Hero";
import Projects from "../sections/projects/Projects";
import About from "../sections/about/About";
import TechStacks from "../sections/tech-stack/TechStacks";
import Contact from "../sections/contact/Contact";
import ScrollUpButton from "./ScrollUpButton";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStacks />
      <Contact />
      <ScrollUpButton />
    </>
  );
};

export default Home;
