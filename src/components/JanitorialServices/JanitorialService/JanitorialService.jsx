import React from 'react';
import './JanitorialService.css';
import services from '../../../services';


const JanitorialService = () => {
    return (
        <>
            {services.map((service) => {
                return (
                    <div className='js-list' key={service.id}>
                        <img className='service-icon' src={service.img} alt={service.name} />
                        <p>{service.description}</p>
                    </div>
                );
            })}
        </>
    );
}

export default JanitorialService;