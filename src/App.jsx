import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/services";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Testimonials from "./components/testimonials/Testimonials";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </main>
  );
}

export default App;
