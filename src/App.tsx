import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CursorFollower from "./components/CursorFollower";
import { Vortex } from './components/ui/vortex';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <CursorFollower /> 
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="work">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            -  © 2025 Divyansh Tiwari  -
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;