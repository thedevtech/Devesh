import React from 'react';
import './Navigation.css';


function Navigation() {
    return (
        
        <div className="navigation_image">
            <div className="top_navigation">
                <div className="ul_logo">
                    <h1 className="ul_h1">Devesh Korde</h1>
                </div>
                <div className="ul_empty">

                </div>
                <div className="ul_tabs">
                    <ul type="none" className="nav_ul">
                        <li className="ul_link">Home</li>
                        <li className="ul_link">Blogs</li>
                        <li className="ul_link">Contact</li>
                        <li className="ul_link">Libraries</li>
                        <li className="logo" id="hamburger"><button className="nav_ham_button" > 
                        <i>|</i>
                        <i>|</i>
                        <i>|</i>
                        </button></li>
                        </ul>
                </div>
            </div>
            <div className="empty_space"></div>
            <div className="information">
                <div className="info_data">
                 <h1>Hi,   I am  Devesh Korde</h1>  
                </div>
                <div className="nav_buttons">
                    <button className="nav_buttons_tab know-more">Know More</button>
                    <button className="nav_buttons_tab code-with-me">Code with me</button>
                </div>
            </div>
        </div>
        
    )
}

export default Navigation






/*  OLD CODE :- ( Let's upgrade )

import React from 'react';
import './Navigation.css';



const Navigation = ({ onHomeChange, onBlogChange, onTutorialChange, onServiceChange, onHamburgerInput, onDownloadChange }) => {
    return(
        <div>
            <div className="nav-items">
                <ul type="none" className="navigation">
                    <li className="logo">Devesh <font color="reddish pink">Korde</font> </li>
                    <li className="logo" id="hamburger"><button className="nav_ham_button" onClick={onHamburgerInput}> 
                    <i>.</i>
                    <i>.</i>
                    <i>.</i>
                    </button></li>
                    <li className="link"><button className="navigation_button" onClick={ onDownloadChange }>Downloads</button></li>
                    <li className="link" ><button className="navigation_button" onClick={ onServiceChange }>Services</button></li>
                    <li className="link"><button className="navigation_button" onClick={ onTutorialChange }>Tutorials</button></li>
                    <li className="link"><button className="navigation_button" onClick={ onBlogChange }>Blogs</button></li>
                    <li className="link"><button className="navigation_button" onClick={ onHomeChange }>Home</button></li>
                </ul>               
            </div>
        </div>
    );
}

export default Navigation;*/