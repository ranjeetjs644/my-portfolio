import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GlowingCursor from "./components/GlowingCursor";
import Footer from './pages/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <GlowingCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;