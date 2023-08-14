import React, { useEffect } from "react";
import Hero from "../../components/sections/hero/Hero";
import Projects from "../../components/sections/projects/Projects";
import About from "../../components/sections/about/About";
import TechStacks from "../../components/sections/tech-stacks/TechStacks";
import Contact from "../../components/sections/contact/Contact";
import ScrollUpButton from "./ScrollUpButton";
import Aos from "aos";
import XNavbar from "../navbar/XNavbar";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <XNavbar />
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
