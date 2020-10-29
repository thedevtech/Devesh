import React from 'react';
import './introduction.css';

const Introduction = () => {
    
    return(
        <div className="introduction">
            <div className="image">
            <img alt="My Self" src="http://betanews.com/wp-content/uploads/2016/04/computer_code.jpg" className="responsive"></img>
            </div>
            <div class="bg-text">
                <p className="intro_para"> Hi !</p>
                <p className="intro_para">I'm Devesh </p>
                <p>And I'm a <font color="#8258FA">Pro</font>grammer</p>
                <button className="hire"><a href="https://www.linkedin.com/in/devesh-korde-2638341a0/" className="introduction_link">Hire me</a></button>
            </div>
        </div> 
    );
}

export default Introduction;