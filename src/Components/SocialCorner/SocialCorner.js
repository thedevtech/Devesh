import React from 'react';
import './socialcorner.css';
import { SocialIcon } from 'react-social-icons';
import Emoji from 'react-emoji-render';
import devesh from './devesh.jpeg';


const SocialCorner = () => {
    return(
        <div className="social">
          <div className="social_container">
              <div className="social_image">
                <img alt="Devesh Korde" src={devesh} className="social_image_image"></img>
              </div>
              <div className="social_greetings" >
                
                <Emoji text=" Lets Connect on Social media :)" />
              </div>
              <div className="social_icons">
                <div className="twitter "> <SocialIcon url="http://twitter.com/DeveshKorde"></SocialIcon></div>
                <div className="instagram "><SocialIcon url="https://www.instagram.com/deveshkorde.codes/"></SocialIcon></div>
                <div className="github"><SocialIcon url="https://github.com/thedevtech"></SocialIcon></div>
                <a href="https://dev.to/deveshkorde">
                <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Devesh Chandrabhan Korde's DEV Profile" height="50" width="30" className="dev"></img>
                </a>
               
              </div>
          </div>
        </div>
    );
}

export default SocialCorner;

