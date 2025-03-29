import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.date) {
            newErrors.date = 'Date is required.';
        }

        if (!formData.time) {
            newErrors.time = 'Time is required.';
        }

        if (formData.guests < 1 || formData.guests > 10) {
            newErrors.guests = 'Number of guests must be between 1 and 10.';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
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
                {errors.date && <p className="error">{errors.date}</p>}

                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
                {errors.time && <p className="error">{errors.time}</p>}

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
                {errors.guests && <p className="error">{errors.guests}</p>}

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