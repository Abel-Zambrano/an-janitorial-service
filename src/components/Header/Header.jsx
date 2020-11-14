import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='bg-img'>
            <nav className='navigation'>
                <h1>AN Janitorial Service</h1>
                <ul className='nav-links'>
                    <li>HOME</li>     
                    <li>ABOUT US</li>     
                    <li>SERVICES</li>     
                    <li><i className="fas fa-phone-alt"></i> (510)913-5091</li>         
                </ul>
            </nav>
        </div>
    );
};

export default Header;