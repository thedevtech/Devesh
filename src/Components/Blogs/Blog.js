import React from 'react';
import './Blog.css';
import dvl from './DvL.png';

const Blog = () => {
    return (
        <div className="temporary">
            <div className="blog">
            <div className="blog_container blog_container1">
                <img alt="blog1" src={dvl} className="blog_image"></img>
               <h1 className="blog_heading">Dark Mode v/s Light Mode</h1>
               <p>This blog elaborates the difference between dark and light mode. The blog is written on the DEV.to platform.</p>
               <button  className="blog_button"><a  className="blog_link" href="https://dev.to/deveshkorde/why-do-a-dark-theme-is-best-than-the-ordinary-one-3928">View Blog</a></button>
            </div>
            </div>
        </div>     
    );
}

export default Blog;
