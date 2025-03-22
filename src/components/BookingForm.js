import React, { useState, useEffect } from 'react';
import './BookingForm.css'; // Import the CSS file
import { initializeTimes, updateTimes } from '../Main'; // Adjust the path

const BookingForm = ({ formData, handleChange, handleSubmit }) => {
    const [availableTimes, setAvailableTimes] = useState([]); // State for available times

    // Initialize available times on mount
    useEffect(() => {
        const times = initializeTimes(); // Fetch available times for today's date
        setAvailableTimes(times); // Set the available times
    }, []);

    // Handle date change and update available times
    const handleDateChange = (event) => {
        const newDate = event.target.value; // Get the selected date
        handleChange(event); // Call the parent handleChange function
        const times = updateTimes(newDate); // Fetch available times for the new date
        setAvailableTimes(times); // Update the available times
    };

    return (
        <div className="booking-form-container">
            <form className="booking-form" onSubmit={handleSubmit}>
                {/* Date Input */}
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleDateChange} // Use the new handleDateChange function
                />

                {/* Time Input */}
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                >
                    {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>

                {/* Number of Guests Input */}
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                />

                {/* Occasion Input */}
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                {/* Submit Button */}
                <input type="submit" value="Make Your Reservation" />
            </form>
        </div>
    );
};

export default BookingForm;