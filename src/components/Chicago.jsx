import './Chicago.css';
import chicagoImage from '../images/chicago.jpg';
import beachImage from '../images/beach.jpg';

const Chicago = () => {
    return (
        <div className="chicago-container">
    {/* Top Half */}
    <div className="top-half">
        <div className="text">
            <h1>Welcome to Chicago</h1>
            <p>
                Chicago, the Windy City, is known for its stunning architecture, vibrant culture, and deep-dish pizza. 
                Explore the city's rich history and enjoy its world-class attractions.
            </p>
        </div>
        <div className="image">
            <img src={chicagoImage} alt="Chicago Skyline" />
        </div>
    </div>

    {/* Bottom Half */}
    <div className="bottom-half">
        <div className="image">
            <img src={beachImage} alt="Chicago River" />
        </div>
        <div className="text">
            <p>
                From the iconic Millennium Park to the bustling Magnificent Mile, Chicago offers something for everyone. 
                Take a stroll along the Chicago Riverwalk or enjoy a show at one of the city's renowned theaters.
            </p>
        </div>
    </div>
</div>
    );
};

export default Chicago;