import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import About from "../about/About";
import TechStacks from "../tech-stacks/TechStacks";
import Contact from "../contact/Contact";
import ScrollUpButton from "./ScrollUpButton";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
