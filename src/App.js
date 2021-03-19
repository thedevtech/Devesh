import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Data from './Components/Data/Data';
import Skills from './Components/Skills/Skills';
import SocialCorner from './Components/SocialCorner/SocialCorner';
import Promotion from './Components/Promotion/Promotion';
import './App.css';


const App = () => {
  return(
    <div> 
      <Navigation />
      <Data />
      <Skills />
      <SocialCorner />
      <hr></hr>
      <Promotion />
    </div>
    
  )
}

export default App;
