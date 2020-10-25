import React from 'react';
import './data.css';

const Data = ({ onHireMeClick }) => {
    return (
        <div className="data">
            <div className="data_image">
            <img alt="Laptop" src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg" height="auto" width="450px"></img>
            </div>
            <div className="data_info">
                <p>
                  On 13th July, 2001 World was blessed with a great mind and energy. Professional programmer since the day I wrote my first
                  "Hello World" program. Always optimistic and motivated to learn more.<br></br>
                  Not a great programmer but a good one having great habits.
                  Technology geek, feel free to talk and lets connect on the Social media
                </p>
                <div className="data_buttons">
                    <button className="data_button"><a href="https://instagram.com/its_deveshkorde.official?igshid=119szo18uw9av" className="data_link"> Know More</a></button>
                    <button className="data_button_center" onClick={onHireMeClick}>Hire as a Mentor</button>
                    <button className="data_button"><a href="https://github.com/ParenthesesLearning" className="data_link">View Github Profile</a></button>
                </div>
                
            </div>
        </div>
    );
}

export default Data;

