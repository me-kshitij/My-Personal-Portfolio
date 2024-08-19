import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Technology from './components/technology';
import Hero from './components/Hero';
import Qualification from './components/qualification';
import Project from './components/project';
import Contact from './components/contact';
import About from './components/about';
// import ParticleBackground from './components/ParticleBackground'
import './App.css';

function App() {
  return (
    <Router>
      {/* <ParticleBackground /> */}
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/technology" element={<Technology />} /> */}
        <Route path="/qualifications" element={<Qualification />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Technology/>
      <Qualification/>
      <Project/>
      <Contact/>
      <About/>
    </Router>
  );
}

export default App;
