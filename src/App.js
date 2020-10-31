import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Introduction from './Components/Introduction/Introduction';
import Data from './Components/Data/Data';
import Skills from './Components/Skills/Skills';
import Quote from './Components/Quote/Quote';
import SocialCorner from './Components/SocialCorner/SocialCorner';
import Promotion from './Components/Promotion/Promotion';
import Blog from './Components/Blogs/Blog';
import Tutorials from './Components/Tutorials/Tutorials';
import Hamburger from './Components/Hamburger/Hamburger';
import Service from './Components/Service/Service';
import Downloads from './Components/Downloads/Download';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      route:'Home'
     
    }
  }

  onHomeChange(){
    this.setState({ route:'Home' });

  }
  onBlogChange(){
    this.setState({ route:'Blog' });
  }
  onTutorialChange(){
    this.setState({ route:'Tutorials' })
  }
  onServiceChange(){
    this.setState({ route: 'Service' });
  }
  onHamburgerInput(){
    this.setState({ route:'Hamburger'})
  }
  onDownloadChange(){
    this.setState({ route:'Downloads'})
  }
render(){
  return(
    <div>
      <Navigation 
      onHomeChange={this.onHomeChange.bind(this)}
      onBlogChange={this.onBlogChange.bind(this)}
      onTutorialChange={this.onTutorialChange.bind(this)}
      onServiceChange={this.onServiceChange.bind(this)}
      onHamburgerInput={this.onHamburgerInput.bind(this)}
      onDownloadChange={this.onDownloadChange.bind(this)}
      />
    
      {(() => {
            if (this.state.route === 'Home') {
              return (
                <div> 
                    
                  <Introduction />
                  <Data />
                  <Skills />
                  <Quote />
                  <SocialCorner /> 
                  <hr className="footer_line"></hr>
                  <Promotion />
                </div>
              )
            } 
            else if (this.state.route === 'Hamburger') {
              return (
                <div>
                  <Hamburger
                  onHomeChange={this.onHomeChange.bind(this)}
                  onBlogChange={this.onBlogChange.bind(this)}
                  onTutorialChange={this.onTutorialChange.bind(this)}
                  onServiceChange={this.onServiceChange.bind(this)}
                  onDownloadChange={this.onDownloadChange.bind(this)}
                  />
                  <SocialCorner /> 
                </div>
              )
            }                                        
            else if (this.state.route === 'Blog') {
              return (
                <div>
                  <Blog />
                </div>
              )
            } 
            else if (this.state.route === 'Tutorials') {
              return (
                <div>
                  <Tutorials />
                </div>
              )
            } 
            else if (this.state.route === 'Service') {
              return (
                <div>
                  <Service />
                </div>
              )
            } 
            else if (this.state.route === 'Downloads') {
              return (
                <div>
                  <Downloads />
                  <hr></hr>
                  <SocialCorner />
                </div>
              )
            } 

        })()}
    </div>
  );
}
}

export default App;
