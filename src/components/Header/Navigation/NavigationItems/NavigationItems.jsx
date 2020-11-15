import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>About</NavigationItem>
            <NavigationItem>Services</NavigationItem>
        </ul>
    );
};

export default NavigationItems;