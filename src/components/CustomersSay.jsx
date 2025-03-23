import React from 'react';
import './CustomersSay.css';

const reviews = [
    {
        name: "John Doe",
        review: "The food was absolutely amazing! The delivery was quick, and everything was fresh.",
        rating: 5,
    },
    {
        name: "Jane Smith",
        review: "Great service and delicious food. Will definitely order again!",
        rating: 4,
    },
    {
        name: "Michael Brown",
        review: "The pizza was fantastic, but the delivery took a bit longer than expected.",
        rating: 3,
    },
];

const CustomersSay = () => {
    return (
        <div className="customer-says-container">
            <h2>What Our Customers Say</h2>
            <div className="reviews">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                        <div className="stars">
                            {Array.from({ length: 5 }, (_, i) => (
                                <span key={i} className={i < review.rating ? "star filled" : "star"}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomersSay;