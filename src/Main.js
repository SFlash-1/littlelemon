import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking'; 

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookingPage />} />
                <Route path="/confirmation" element={<ConfirmedBooking />} />
            </Routes>
        </Router>
    );
};

export default Main;