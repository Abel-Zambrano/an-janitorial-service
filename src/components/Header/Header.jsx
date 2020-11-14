import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className='navigation'>
                <h1>AN Janitorial Service</h1>
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