import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';


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
                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }} ><li className="ul_link">Home</li></Link> 
                        <Link to="/blogs" style={{ textDecoration: 'none', color: 'white' }}> <li className="ul_link">Blogs</li> </Link> 
                        {/*<Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}><li className="ul_link">Contact</li></Link>*/}
                        <Link to="/downloads" style={{ textDecoration: 'none', color: 'white' }}><li className="ul_link">Download</li></Link>
                       <Link to="/hamburger"  style={{ textDecoration: 'none', color: 'white' }}>
                        <li className="logo" id="hamburger"><button className="nav_ham_button" > 
                            <i>|</i>
                            <i>|</i>
                            <i>|</i>
                            </button></li>
                       </Link> 
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