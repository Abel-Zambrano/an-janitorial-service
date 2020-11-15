import React from 'react';
import Title from './Title/Title';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className='navigation'>
                <Title />
                <ul className='nav-links'>
                    <li>HOME</li>     
                    <li>ABOUT</li>     
                    <li>SERVICES</li>          
                    <li><i className="fas fa-phone-alt"></i> (510)913-5091</li>         
                </ul>
            </nav>
        </header>
    );
};

export default Header;