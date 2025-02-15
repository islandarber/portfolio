import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Track visibility of sections
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (aboutInView) setActiveSection("about");
    else if (projectsInView) setActiveSection("projects");
    else if (contactInView) setActiveSection("contact");
  }, [aboutInView, projectsInView, contactInView]);

  return (
    <>
      <Home />
      <Navbar activeSection={activeSection} /> {/* Navbar will be rendered after Home */}
      <section ref={aboutRef} id="about"><About /></section>
      <section ref={projectsRef} id="projects"><Projects /></section>
      <section ref={contactRef} id="contact"><Contact /></section>
      <Footer />
    </>
  );
};

export default App;
