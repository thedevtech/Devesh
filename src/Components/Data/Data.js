import React from 'react';
import './data.css';
const Data = ({ onHireMeClick }) => {
    return (
        <div className="data">
            <div className="data_image">
            <img alt="hacker" src="https://png.pngtree.com/png-vector/20190328/ourlarge/pngtree-programmers-code-the-website-from-the-command-line-flat-vector-illustration-png-image_878368.jpg" height="auto" width="350px"></img>
            </div>
            <div className="data_info">
                <p>
                  <b>Hey Folks! Devesh Korde this side. Glad to see you, that you have taken a minute and looked into my website.</b>
                  <br></br>
                  I am currently pursuing my BTech in Electronics and Telecommunication from the autonomous institute Government College of Engineering Aurangabad.
                  I am a Full Stack Web Developer and looking for any freelancing projects or work. For me coding became the most important thing 
                  since the day i wrote my first "Hello World" program.
                  <br></br>
                  <b><i>In Love with Javascript. </i></b>
                  <br></br>
                  I am 19 years old young man, started my journey a year ago and it took a long time to learn the web development.
                  I always say <i>"Everything seems impossible until someone makes it possible"</i>
                  <br></br>
                  I am also running my Parentheses Creations page on Instagram, for the sake of providing service.
                  If you are Reading this and you have work, Then contact me on the button below "Know More".
                  
                </p>
                <div className="data_buttons">
                    <button className="data_button"><a href="https://instagram.com/its_deveshkorde.official?igshid=119szo18uw9av" className="data_link"> Know More</a></button>
                    <button className="data_button"><a href="https://github.com/ParenthesesLearning" className="data_link">View Github Profile</a></button>
                </div>
                
            </div>
        </div>
    );
}

export default Data;

