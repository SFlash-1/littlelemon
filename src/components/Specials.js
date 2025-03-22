import React from 'react';
import specialsData from './SpecialsData'; // Import the data source
import './Specials.css'; // Import CSS for styling

const Specials = () => {
    return (
        <div className="specials-container">
            <h2>Today's Specials</h2>
            <div className="specials-grid">
                {specialsData.map((special) => (
                    <div key={special.id} className="special-card">
                        <img src={special.image} alt={special.name} className="special-image" />
                        <h3>{special.name}</h3>
                        <p>{special.description}</p>
                        <p className="special-price">{special.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specials;