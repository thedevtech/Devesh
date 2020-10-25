import React from 'react';
import './introduction.css';

const Introduction = () => {
    
    return(
        <div className="introduction">
            <div className="image">
            <img alt="My Self" src="https://i.ytimg.com/vi/B487kXHOFFg/maxresdefault.jpg" className="responsive"></img>
            </div>
            <div class="bg-text">
                <h2>HOLA!</h2>
                <h1 style={{fontsize:50}}>I<font color="red">'</font>m <font color="red">D</font>evesh </h1>
                <p>And I'm a <font color="red">P</font>rogrammer</p>
                <button className="hire"><a href="https://www.linkedin.com/in/devesh-korde-2638341a0/" className="introduction_link">Hire me</a></button>
            </div>
        </div> 
    );
}

export default Introduction