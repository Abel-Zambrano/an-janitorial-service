import React from 'react';
import './Center.css';
import BouncingArrow from '../../UI/BouncingArrow/BouncingArrow';

const Center = () => {
    return (
        <div>
            <div className='bg-pic'>
                <div className='bg-info'><i class="fas fa-map-marker-alt"></i> SF Bay Area</div>
                <BouncingArrow />
            </div>
        </div>    
    );
};

export default Center;

// <img className='bg-pic' src={office} alt="office"/>