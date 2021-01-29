import React from 'react';
import './ContactCard.scss';

const ContactCard = () => {
    return (
        <div className="ContactCard">
            <h2 className="ContactCard__text">Contact</h2>
            <div className="ContactCard__info">
                <p className="ContactCard__info-name">Chris Mendoza | Owner</p>
                <p className="ContactCard__info-phone-number">
                    <a href="tel:5109135091"> <i id='phone' className="fas fa-phone-alt"></i> (510) 913-5091</a>
                </p>
            </div>
        </div>
    );
};

export default ContactCard;