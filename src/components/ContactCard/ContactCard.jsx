import React from 'react';
import './ContactCard.scss';
import GoogleMap from '../../UI/GoogleMap/GoogleMap';

const ContactCard = () => {
    return (
        <div className="ContactCard">
            <h2 className="ContactCard__text">Contact</h2>
            <div className="ContactCard__info">
                <p className="ContactCard__info-name">Chris Mendoza | Owner</p>
                <p className="ContactCard__info-phone-number">
                    <a href="tel:5109135091">(510) 913-5091</a>
                </p>
            </div>
            <div className="map-container">
                <GoogleMap styleName='map' />
            </div>
        </div>
    );
};

export default ContactCard;