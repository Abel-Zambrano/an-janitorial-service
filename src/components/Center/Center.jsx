import React from 'react';
import './Center.scss';
import Logo from '../Logo/Logo/Logo';
import Banner from '../Banner/Banner';
import BouncingArrow from '../../UI/BouncingArrow/BouncingArrow';

const Center = () => {
    return (
        <div className="Center">
            <div className="Center__background">
                <div className="Center__logo-box">
                    <Logo />
                </div>
                <div className="Center__banner-box">
                    <Banner styleName="Center__banner-text" />
                </div>
                <div className="Center__arrow-box">
                    <BouncingArrow styleName='bouncing-arrow' />
                </div>
            </div>
        </div>   
    );
};

export default Center;