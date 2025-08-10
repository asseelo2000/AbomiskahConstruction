import './App.css';

import React, { useState } from 'react';

import HeaderFixed from './components/HeaderFixed';
import HeroFinal from './components/HeroFinal';
import About from './components/About';
import History from './components/History';
import Services from './components/Services';
import Equipments from './components/Equipments';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Footer from './components/Footer';

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
      <History currentLanguage={currentLanguage} />
      <Services currentLanguage={currentLanguage} />
      <Clients currentLanguage={currentLanguage} />
      <Equipments currentLanguage={currentLanguage}/>
      <Projects currentLanguage={currentLanguage} />
      <Contact currentLanguage={currentLanguage} />
      <Footer currentLanguage={currentLanguage} />
      
      
      
    </div>
  );
}

export default App;
