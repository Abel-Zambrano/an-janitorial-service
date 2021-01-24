import React from 'react';
import logo from '../../../assets/images/an-logo.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='LogoDiv'>
            <img className='LogoImg' src={logo} alt="an janitorial"/>
        </div>
    );
};

export default Logo;