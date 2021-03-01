import React from 'react';
import logo from './dream_team.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img  src={logo} alt=""/>
            <nav>
            <a href="/player">Player</a>
            <a href="/manage-player"> Manage Player </a>
            <a href="/about-us"> About US </a>
            </nav>
        </div>
    );
};

export default Header;