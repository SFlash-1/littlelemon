import { initializeTimes } from './Main';
import { fetchAPI } from './components/api'; // Import the fetchAPI function
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

jest.mock('./components/api'); // Mock the API module

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  useNavigate: jest.fn(),
}));

describe('initializeTimes', () => {
  beforeEach(() => {
    fetchAPI.mockResolvedValue(["10:00 AM", "11:00 AM", "12:00 PM"]); // Mock the API response
  });

  test('should return the correct initial times', async () => {
    const expectedTimes = await fetchAPI(); // Call the mocked fetchAPI
    const result = await initializeTimes(); // Ensure initializeTimes is async if it uses fetchAPI
    expect(result).toEqual(expectedTimes);
  });
});