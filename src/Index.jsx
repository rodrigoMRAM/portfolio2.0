
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkExperienceTimeline from './components/WorkExperienceTimeline';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero /> 
      <About />
      <WorkExperienceTimeline />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
