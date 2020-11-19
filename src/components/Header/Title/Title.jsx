import React from 'react';
import './Title.css';

const Title = () => {
    return (
        <div className='title-div'>
            <h1 className='Title'>AN Janitorial Service | 
            <a className="phone-number" href="tel:5109135091"> <i id='phone' className="fas fa-phone-alt"></i> (510) 913-5091</a>         
            </h1>
        </div>
    );
};

export default Title;