import React from 'react';
import './JanitorialService.scss';
import services from '../../../JS/services';
import FadeInSection from '../../../UI/FadeInSection/FadeInSection';


const JanitorialService = () => {
    return (
        <>
            {services.map((service) => {
                return (
                    <FadeInSection key={service.id}>
                        <div className='serviceType'>
                            <img className='serviceType__icon' src={service.img} alt={service.name} />
                            <p className='serviceType__text'>{service.description}</p>
                        </div>
                    </FadeInSection>
                );
            })}
        </>
    );
}

export default JanitorialService;