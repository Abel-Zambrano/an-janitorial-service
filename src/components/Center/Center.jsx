import React from 'react';
import './Center.css';
import office from '../../assets/images/office.jpg';
import { Parallax } from 'react-parallax';


const Center = () => {
    return (
        <div>
            <Parallax className='bg-pic' bgImage={office} strength={1200}>
                <div className='bg-info'><i class="fas fa-map-marker-alt"></i> SF Bay Area</div>
            </Parallax>
        </div>    
    );
};

export default Center;

// <img className='bg-pic' src={office} alt="office"/>