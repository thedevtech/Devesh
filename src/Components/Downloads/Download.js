import React from 'react';
import './Download.css';
import Cpp from './cpp.pdf';
import Javascript from './Javascript.pdf';



const Downloads = () => {
    const Data = [
        {
            id:1,
            bookName:'C++ Programming',
            bookLine:'A guide for all Cpp Programmers',
            point1:'Book by Wouter Verkerke (NIKHEF)',
            point2:'Concepts explained in a very good way',
            point3:'Presentation Type of books',
            point4:'Perfect use of arrows, good explantion',
            bookLink:Cpp,
           
        },
        {
            id:2,
            bookName:'Eloquent Javascript',
            bookLine:'A guide for all Javascript Programmers',
            bookdescription:'This is the book by Marijn Harverbeke which is Third Edition. In this book everything is explained in a detailed way. This book contains good examples & good explantions.',
            bookLink:Javascript,
           
        }
    ]
    const renderList = Data.map((items)=>{
        return(      
                <div className="downloads_container">
                    <div className="downloads_margin">
                        <div className="downloads"> 
                         <h1 className="downloads_heading">{items.bookName}</h1>
                         <p className="downloads_para"><b>{items.bookLine}</b></p>
                         <p className="downloads_para">{items.bookdescription}</p>
                         <button className="downloads_button"><a href={items.bookLink} download="C++.pdf" className="downloads_link">Download</a></button>
                        </div>
                    </div>
                </div>
        );
     })
    return (
       renderList
    );
}

export default Downloads;