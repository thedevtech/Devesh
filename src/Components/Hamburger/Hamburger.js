import React from 'react';
import './Hamburger.css'


const Hamburger = ({ onHomeChange, onBlogChange, onTutorialChange, onServiceChange, onHamburgerInput, onDownloadChange }) => {
    return(
        <div>
            <div >
                <ul type="none">    
                    <li className="hamburger"><button className="ham_button" onClick={ onHomeChange }>Home</button></li>
                    <li className="hamburger"><button className="ham_button" onClick={ onBlogChange }>Blogs</button></li>
                    <li className="hamburger"><button className="ham_button" onClick={ onTutorialChange }>Tutorials</button></li>
                    <li className="hamburger"><button className="ham_button" onClick={ onServiceChange }>Services</button></li>
                    <li className="hamburger"><button className="ham_button" onClick={ onDownloadChange }>Downloads</button></li>
                </ul>               
            </div>
        </div>
    );
}

export default Hamburger;