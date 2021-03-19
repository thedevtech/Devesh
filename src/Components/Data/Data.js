import React from 'react';
import './data.css';
import gog from './gog.jpeg';

const Data = ({ onHireMeClick }) => {
    return (
        <div className="data">
            <div className="data_image">
            <img alt="hacker" src="https://png.pngtree.com/png-vector/20190328/ourlarge/pngtree-programmers-code-the-website-from-the-command-line-flat-vector-illustration-png-image_878368.jpg" height="auto" width="350px"></img>
            </div>
            <div className="data_info">
                <p>
                 Hello folks, <b>I am Devesh Korde.</b> Nice to see you here.<br></br>
                 I am a Student of reputed institude of Maharashtra, Government College of
                 Engineering Aurangabad. I am currently persuing my Btech in <b>Electronics
                 and telecommunication department.</b><br></br>
                 My motto behind starting a personal website is to provide knowledge and
                 value among the community. I also have Instagram page where I upload 
                 knowledge and some stuff. <br></br>
                 I also love to write. Check out <button className="writer"> <a href="https://www.instagram.com/the_deveshkorde.writes/" className="writer_link">here !</a> </button>
                  
                </p>
                <div className="data_buttons">
                    <button className="data_button"><a href="https://www.instagram.com/deveshkorde.codes/" className="data_link"> Know More</a></button>
                    <button className="data_button"><a href="https://github.com/thedevtech" className="data_link">View Github Profile</a></button>
                </div>
                
            </div>
        </div>
    );
}

export default Data;

