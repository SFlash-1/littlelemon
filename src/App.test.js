import BookingForm from './components/BookingForm';
import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from './Main';


test('Renders the BookingForm submit button', () => {
    const mockAvailableTimes = ["10:00 AM", "11:00 AM", "12:00 PM"]; // Mock data for availableTimes
    const mockDispatch = jest.fn(); // Mock dispatch function
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const submitButton = screen.getByText("Make Your Reservation");
    expect(submitButton).toBeInTheDocument();
});

describe('initializeTimes', () => {
  test('should return the correct initial times', () => {
      const expectedTimes = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];
      const result = initializeTimes();
      expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  test('should return the correct updated times', () => {
      const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const action = { type: 'UPDATE_TIMES', payload: '2025-03-22' }; // Example action
      const result = updateTimes(initialState, action);
      expect(result).toEqual(initialState); // For now, it should return the same state
  });
});