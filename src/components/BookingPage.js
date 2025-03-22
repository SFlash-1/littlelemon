import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

const BookingPage = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
    });

    const [availableTimes, setAvailableTimes] = useState([]);

    useEffect(() => {
        const fetchAvailableTimes = async () => {
            const today = new Date().toISOString().split('T')[0];
            const times = await fetchData(today); // Use the locally defined fetchData function
            setAvailableTimes(times);
        };

        fetchAvailableTimes();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <h1>Book Your Reservation</h1>
            <p>Fill out the form below to book your reservation with us.</p>
            <BookingForm
                formData={formData}
                availableTimes={availableTimes}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default BookingPage;