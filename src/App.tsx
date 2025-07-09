import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PythonProjects from './components/PythonProjects';
import JavaScriptProjects from './components/JavaScriptProjects';
import Timeline from './components/Timeline';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-black text-gray-100 min-h-screen relative overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <PythonProjects />
      <JavaScriptProjects />
      <Timeline />
      <Blog />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;