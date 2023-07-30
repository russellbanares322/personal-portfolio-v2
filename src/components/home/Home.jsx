import React, { useEffect } from "react";
import About from "../about/About";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Navbar from "../navbar/Navbar";
import Projects from "../projects/Projects";
import TechStacks from "../tech-stacks/TechStacks";
import ScrollUpButton from "./ScrollUpButton";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
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
