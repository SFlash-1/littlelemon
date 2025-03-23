import React from 'react';

const BookingTable = ({ bookings }) => {
    return (
        <div>
            <h2>Your Bookings</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Guests</th>
                        <th>Occasion</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <td>{booking.guests}</td>
                            <td>{booking.occasion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;