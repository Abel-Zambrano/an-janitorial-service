import React from 'react';
import './Banner.scss';

const Banner = (props) => {
    return <h3 className={`Banner ${props.styleName}`}>Servicing the San Francisco Bay Area</h3>;
};

export default Banner;