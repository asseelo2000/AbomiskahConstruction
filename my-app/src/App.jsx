import './App.css';

import React, { useState } from 'react';

import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeaderFixed from './components/HeaderFixed';
import HeroFinal from './components/HeroFinal';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  return (
    <div className="App">
      <HeaderFixed 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <HeroFinal currentLanguage={currentLanguage} />
      <About currentLanguage={currentLanguage} />
      <Projects currentLanguage={currentLanguage} />
      <Services currentLanguage={currentLanguage} />
      <Clients currentLanguage={currentLanguage} />
       <Contact currentLanguage={currentLanguage} />
       <Footer currentLanguage={currentLanguage} />
      
      
      
    </div>
  );
}

export default App;
