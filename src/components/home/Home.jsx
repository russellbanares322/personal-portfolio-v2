import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../../components/sections/hero/Hero";
import Projects from "../../components/sections/projects/Projects";
import About from "../../components/sections/about/About";
import TechStacks from "../../components/sections/tech-stacks/TechStacks";
import Contact from "../../components/sections/contact/Contact";
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
