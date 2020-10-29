import React from 'react';
import './skills.css';

const Skills = () => {
    return (
       <div className="skills">
           <h1 className="skills_heading">My Skills !</h1>
           <div className="container"> 
           <div className="skills_column1">
             <div className="skills_logo devicon-html5-plain-wordmark colored"></div>
             <div className="skills_logo devicon-css3-plain-wordmark colored"></div>
             <div className="skills_logo devicon-javascript-plain colored"></div>
             <div className="skills_logo devicon-nodejs-plain-wordmark colored"></div>
            </div>
            <div className="skills_column2">
             <div className="skills_logo devicon-express-original-wordmark colored"></div>
             <div className="skills_logo devicon-postgresql-plain-wordmark colored"></div>
             <div className="skills_logo devicon-react-original-wordmark colored"></div>
             <div className="skills_logo devicon-c-plain-wordmark colored"></div>

            </div>
            <div className="skills_column3">
             <div className="skills_logo_empty"></div>
             <div className="skills_logo_empty"></div>
            </div>
         </div>
       </div> 
    );
}

export default Skills;