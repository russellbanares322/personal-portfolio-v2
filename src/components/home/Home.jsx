import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import About from "../about/About";
import TechStacks from "../tech-stacks/TechStacks";
import Contact from "../contact/Contact";
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
