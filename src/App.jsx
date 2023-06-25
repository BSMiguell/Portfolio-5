import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/services";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
    </main>
  );
}

export default App;
