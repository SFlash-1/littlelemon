import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return(
        <nav >
            <ul>
                <li><Link to="/HomePage">Home</Link></li>
                <li><Link to="/Chicago">About Us</Link></li>
                <li><Link to="/BookingForm">Booking Form</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;