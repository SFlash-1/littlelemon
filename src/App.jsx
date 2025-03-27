import { Route, Routes } from 'react-router-dom';
import Chicago from './components/Chicago';
import Nav from './components/Nav';
import BookingPage from './components/BookingPage';
import Homepage from './components/HomePage';
import CustomersSay from './components/CustomersSay';
import Specials from './components/Specials';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Homepage" element={<Homepage />} />
                <Route path="/CustomersSay" element={<CustomersSay />} />
                <Route path="/Specials" element={<Specials />} />
                <Route path="/Chicago" element={<Chicago />} />
                <Route path="/BookingPage" element={<BookingPage />} />
                <Route path="/confirmation" element={<ConfirmedBooking />} />
            </Routes>
        </>
    );
}

export default App;