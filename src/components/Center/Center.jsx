import React from 'react';
import './Center.scss';
import Logo from '../Logo/Logo/Logo';

const Center = () => {
    return (
        <div className="Center">
            <div className="Center__background">
                <div className="Center__logo-box">
                    <Logo />
                </div>
            </div>
        </div>   
    );
};

export default Center;