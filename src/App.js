import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import TrainingAndCertifications from "./components/trainingandcertificates/TrainingAndCertifications";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Contact from './components/contact/Contact';

function App() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <TrainingAndCertifications />
      <Education />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
