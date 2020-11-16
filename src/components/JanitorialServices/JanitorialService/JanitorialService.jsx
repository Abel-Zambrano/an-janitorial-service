import React from 'react';
import './JanitorialService.css';
import services from '../../../services';


const JanitorialService = () => {
    return (
        <li className='js-list'>
            <div>
                <h2>Our Services</h2>
                {services.map((service) => {
                    return (
                        <div key={service.id}>
                            <img className='service-icon' src={service.img} alt={service.name} />
                            <p>{service.description}</p>
                        </div>
                    )
                })}
            </div>
        </li>
    );
}

export default JanitorialService;