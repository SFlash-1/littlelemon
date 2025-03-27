import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../images/logo.png';

const Nav = () => {
    return(
        <nav >
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li><Link to="/HomePage">Home</Link></li>
                <li><Link to="/Chicago">About Us</Link></li>
                <li><Link to="/BookingPage">Booking Page</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;