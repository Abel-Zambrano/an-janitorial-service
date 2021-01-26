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
                        <div className='js-list'>
                            <img className='service-icon' src={service.img} alt={service.name} />
                            <p>{service.description}</p>
                        </div>
                    </FadeInSection>
                );
            })}
        </>
    );
}

export default JanitorialService;