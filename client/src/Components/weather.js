// src/components/Weather.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest } from '../redux/action';
import '../Weather.css'; // Import the CSS file for styling
import loadingSpinner from '../spinning-loading.gif'; // Import a loading spinner image
import { FaSun, FaCloud, FaCloudRain, FaCloudShowersHeavy } from 'react-icons/fa'; // Import Font Awesome icons

const Weather = () => {
    const dispatch = useDispatch();
    
    // Three states maintained in whole application
    const weatherData = useSelector((state) => state.weather.data);
    const loading = useSelector((state) => state.weather.loading);
    const error = useSelector((state) => state.weather.error);

    const [city, setCity] = useState('');

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleFetchWeather = () => {
        if (city.trim() !== '') {
            dispatch(fetchWeatherRequest(city));
        }
    };

    return (
        <div className="weather-container">
            <input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange} className="city-input"
            />
            <button onClick={handleFetchWeather} className="fetch-button">Fetch Weather</button>

            {loading && (
                <div className="loading-container">
                    <img src={loadingSpinner} alt="Loading..." className="loading-spinner" />
                </div>
            )}

            {error && <div className="error-message">Error: {error}</div>}

            {weatherData && (
                <div className="weather-info">
                    <h2 className="city-name" >Weather in {weatherData.name}</h2>
                    <p className="temperature">Temperature: {weatherData.main.temp}°C</p>
                    <p className="humidity">Humidity: {weatherData.main.humidity}%</p>
                    <div className="weather-icon">
                        {weatherData.weather[0].main === 'Clear' && <FaSun />}
                        {weatherData.weather[0].main === 'Clouds' && <FaCloud />}
                        {weatherData.weather[0].main === 'Rain' && <FaCloudRain />}
                        {weatherData.weather[0].main === 'Drizzle' && <FaCloudShowersHeavy />}
                    </div>
                    <p className="description">
                        Weather Conditions: {weatherData.weather[0].description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Weather;