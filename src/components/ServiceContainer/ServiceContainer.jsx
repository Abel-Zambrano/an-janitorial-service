import React from 'react';
import JanitorialServices from '../JanitorialServices/JanitorialServices';

const ServiceContainer = () => {
    return (
        <div className='ServiceContainer'>
            <h2 className='ServiceContainer__text'>Our Services</h2>
            <div className='ServiceContainer__service-type'>
                <JanitorialServices />
            </div>
        </div>
    );
};

export default ServiceContainer;