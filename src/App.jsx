import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import GlowingCursor from "./components/GlowingCursor.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <GlowingCursor />
        <Navbar />
        <main id="scroll-container" className="pt-16  h-full">
          <section id="home" className="h-screen">
            <Home />
          </section>
          <section id="about" className="h-screen">
            <About />
          </section>
          <section id="skills" className="h-screen">
            <Skills />
          </section>
          <section id="projects" className="h-screen">
            <Projects />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;