import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingTable from './BookingTable';

const BookingPage = () => {
    const [bookings, setBookings] = useState(() => {
        const storedBookings = localStorage.getItem('bookings');
        return storedBookings ? JSON.parse(storedBookings) : [];
    });

    const addBooking = (newBooking) => {
        const updatedBookings = [...bookings, newBooking];
        setBookings(updatedBookings);
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    };

    return (
        <div>
            <h1>Book Your Reservation</h1>
            <BookingForm addBooking={addBooking} />
            <BookingTable bookings={bookings} />
        </div>
    );
};

export default BookingPage;