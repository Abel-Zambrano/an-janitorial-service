import React from 'react';
import './Center.css';
import BouncingArrow from '../../UI/BouncingArrow/BouncingArrow';

const Center = () => {
    return (
        <div>
            <div className='bg-pic'>
                <div className='bg-info'><i className="fas fa-map-marker-alt"></i> SF Bay Area</div>
                {/* <BouncingArrow className='arrow' /> */}
            </div>
        </div>    
    );
};

export default Center;

// <img className='bg-pic' src={office} alt="office"/>