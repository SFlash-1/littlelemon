import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { fetchAPI } from './components/api'; // Import fetchAPI

// Define and export initializeTimes
export const initializeTimes = async () => {
    const times = await fetchAPI(); // Call the mocked fetchAPI
    return times;
};

export function updateTimes(selectedDate) {
    return fetchAPI(selectedDate);
}

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