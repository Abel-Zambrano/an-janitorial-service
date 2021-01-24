import React from 'react';
import logo from '../../../assets/images/an-logo.png'
import './Logo.scss';

const Logo = () => {
    return (
        <div className='Logo'>
            <img className='Logo__img' src={logo} alt="an janitorial"/>
        </div>
    );
};

export default Logo;