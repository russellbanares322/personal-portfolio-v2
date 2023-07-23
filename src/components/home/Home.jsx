import React from "react";
import About from "../about/About";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Navbar from "../navbar/Navbar";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div className="bg-blue min-h-[100vh] h-full text-white">
      <Navbar />
      <Banner />
      {/* <Projects /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
