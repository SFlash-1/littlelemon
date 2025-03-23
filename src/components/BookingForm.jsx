import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooking(formData); // Add the new booking
        alert('Booking added successfully!');
        setFormData({ date: '', time: '', guests: 1, occasion: 'Birthday' }); // Reset form
    };

    return (
        <div className="booking-form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
            />

            <label htmlFor="time">Time:</label>
            <input
                type="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
            />

            <label htmlFor="guests">Number of Guests:</label>
            <input
                type="number"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="10"
                required
            />

            <label htmlFor="occasion">Occasion:</label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Dinner">Dinner</option>
            </select>

            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default BookingForm;