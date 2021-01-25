import React from 'react';
import './Center.scss';
import Logo from '../Logo/Logo/Logo';
import Banner from '../Banner/Banner';

const Center = () => {
    return (
        <div className="Center">
            <div className="Center__background">
                <div className="Center__logo-box">
                    <Logo />
                </div>
                <div className="Center__banner-box">
                    <Banner />
                </div>
            </div>
        </div>   
    );
};

export default Center;