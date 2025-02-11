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
      <div className="relative">
        <GlowingCursor />
        <Navbar />
        <main className="pt-16">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen pt-16">
            <About />
          </section>
          <section id="skills" className="min-h-screen pt-16">
            <Skills />
          </section>
          <section id="projects" className="min-h-screen pt-16">
            <Projects />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;