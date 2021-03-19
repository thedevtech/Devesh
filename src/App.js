import React, { Component } from 'react';
import renderElements from './renderElements';
import Blog from './Components/Blogs/Blog';
import Contact from './Components/Contact/Contact';
import Download from './Components/Downloads/Download';
import Hamburger from './Components/Hamburger/Hamburger';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import './App.css';


const App = () => {
  return(
    <div> 
      <Router>
        <Switch>
          <Route path="/blogs" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/downloads" component={Download} />
          <Route path="/hamburger" component={Hamburger} />
          <Route path="/" component={renderElements} /> 
        </Switch>
      </Router>
    </div>
    
  )
}

export default App;
