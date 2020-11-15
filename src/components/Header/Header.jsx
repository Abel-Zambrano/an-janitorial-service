import React from 'react';
import Title from './Title/Title';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import './Header.css';

const Header = () => {
    return (
        <header className='navigation'>
            <Title />
            <NavigationItems />              
        </header>
    );
};

export default Header;