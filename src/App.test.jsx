import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { updateTimes, initializeTimes } from './Main';
import { fetchAPI } from './components/api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

jest.mock('./components/api');

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
}));

test('initializeTimes returns available booking times', async () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockResolvedValue(mockTimes);

    const times = await initializeTimes();

    expect(times).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalled();
});

test('Renders the Header heading', () => {
    render(<BookingForm addBooking={() => {}} />);

    const headingElementNew = screen.getByLabelText(/time/i);
    expect(headingElementNew).toBeInTheDocument();
});

test('updateTimes updates available booking times based on selected date', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  const selectedDate = new Date('2025-03-29'); // Example date
  fetchAPI.mockReturnValue(mockTimes);

  const updatedTimes = updateTimes(selectedDate);

  expect(updatedTimes).toEqual(mockTimes);
  expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
});

