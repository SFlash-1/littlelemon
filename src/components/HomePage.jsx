import React from 'react';
import './HomePage.css';
import restaurantImage from '../images/restaurant.jpg';
import menuImage from '../images/menu.jpg';
import bookingImage from '../images/booking.jpg';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="homepage-container">
            {/* Column 1: About the Restaurant */}
            <div className="grid-item">
                <img src={restaurantImage} alt="Restaurant" />
                <h2>About Us</h2>
                <p>
                    Welcome to our restaurant! We pride ourselves on serving delicious food made with the freshest ingredients. 
                    Learn more about our story and what makes us special.
                </p>
                <Link to="/CustomersSay" className="CustomersSay">See what our customers have to say</Link>
            </div>

            {/* Column 2: About the Menu */}
            <div className="grid-item">
                <img src={menuImage} alt="Menu" />
                <h2>Our Menu</h2>
                <p>
                    Explore our diverse menu featuring a variety of dishes to satisfy every craving.
                    From appetizers to desserts, we have something for everyone.
                </p>
                <Link to="/Specials" className="specials">Check out our Specials</Link>
            </div>

            {/* Column 3: Booking Form */}
            <div className="grid-item">
                <img src={bookingImage} alt="Booking" />
                <h2>Book a Delivery</h2>
                <p>
                    Ready to enjoy our food at home? Click below to book a delivery and have your favorite dishes brought to your doorstep.
                </p>
                <Link to="/BookingPage" className="booking-button">Book Now</Link>
            </div>
        </div>
    );
};

export default Homepage;