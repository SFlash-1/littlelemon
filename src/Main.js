import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import { submitAPI } from './components/api';

const Main = () => {
    console.log('rendering in Main.js:'); //
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const submitForm = (formData) => {
        const submissionSuccess = submitAPI(formData); // Call the submitAPI function
        if (submissionSuccess) {
            navigate('/confirmation'); // Navigate to the confirmation page
        } else {
            alert('Failed to submit the reservation. Please try again.');
        }
    };

    return (
        <div>
            console.log('submitForm in Main.js:', submitForm); //
            <BookingPage submitForm={submitForm} /> {/* Pass submitForm as a prop */}
        </div>
    );
};

export default Main;