import React, { useReducer } from 'react';
import BookingForm from './components/BookingForm';


export const initializeTimes = () => {
  if (typeof window.fetchAPI !== 'function') {
      console.error('fetchAPI is not defined. Make sure the API script is loaded.');
      return [];
  }

  const today = new Date(); // Get today's date
  const availableTimes = window.fetchAPI(today); // Fetch available times using fetchAPI
  return availableTimes; // Return the fetched times
};

export const updateTimes = (selectedDate) => {
  const times = window.fetchAPI(new Date(selectedDate)); // Pass the selected date to fetchAPI
  return times; // Return the fetched times
};

const Main = () => {
    // UseReducer for availableTimes
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <div>
            <h1>Welcome to Our Booking System</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        </div>
    );
};

export default Main;