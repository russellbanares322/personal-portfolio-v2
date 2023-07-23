import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Navbar from "../navbar/Navbar";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div className="bg-blue min-h-[100vh] h-full text-white py-3">
      <Navbar />
      {/* <Projects /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
