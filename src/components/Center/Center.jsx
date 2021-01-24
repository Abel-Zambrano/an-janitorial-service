import React from 'react';
import './Center.scss';
import Logo from '../Logo/Logo/Logo';

const Center = () => {
    return (
        <div className="Center">
            <div className="Center__background">
                <Logo className='Center__logo' />
            </div>
        </div>   
    );
};

export default Center;