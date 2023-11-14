import React from 'react';
import { Link } from 'react-router-dom';
import '../src/Navbar.css';

const NavBar = () => {
    return (
    <nav className="navbar">
        <ul className="nav-links">
        <li><Link to="/home">HOME</Link></li> 
        <li><a href="https://www.youtube.com/watch?v=SLEBlJ9DTAI" target="_blank" rel="noopener noreferrer">CLICK ME</a></li>
        <li><a href="https://www.youtube.com/watch?v=5LB_y-nudGU" target="_blank" rel="noopener noreferrer">CLICK ME TOO</a></li>
        <li><Link to="/adventure">START ADVENTURE</Link></li> 
        </ul>
    </nav>
    );
};

export default NavBar;
