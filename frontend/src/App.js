import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import NavBar from './Components/NavBar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';




function App() {
  return (
    <div>
      <NavBar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
