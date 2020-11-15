import React from 'react';
import './JanitorialService.css';
import cleaning from '../../../assets/icons/cleaning.png';

const JanitorialService = () => {
    return (
        <li className='js-list'>
            <div>
                <img className='cleaning-icon' src={cleaning} alt="cleaning" />
                <p>Cleaning Office and Commercial Facilities.</p>
            </div>
        </li>
    );
}

export default JanitorialService;