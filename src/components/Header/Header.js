import React from 'react';
import logo from '../../images/fitnessCenter.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className='logo-part'>
                    <img src={logo} alt="" />
                    <p>Fitness Center</p>
                </div>
                <div>
                    <a href="/home">Home</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;