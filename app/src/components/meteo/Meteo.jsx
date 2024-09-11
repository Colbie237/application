import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Meteo.css'; // Import the CSS file

const WeatherForecast = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = '318bc45fc7bdbf259b9b1fe06e8db5d9'; // Replace with your API key
    const CITY = 'Paris'; // Replace with the city of your choice

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const weatherResponse = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
                );
                setCurrentWeather(weatherResponse.data);

                const forecastResponse = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
                );
                setForecast(forecastResponse.data.list.filter((_, index) => index % 8 === 0)); // Filter for daily forecast
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    if (loading) return <div className="loading">🌞 Loading...</div>;
    if (error) 
        return <div className="error">⚠️ Erreur: {error.response ? error.response.data.message : error.message}</div>;

    const { main, weather } = currentWeather;

    return (
        <div className="weather-container">
            <h2 className="city-name">Météo Actuelle à {CITY}</h2>
            <div className="weather-info">
                <div className="temp-info">
                    <p className="temperature">{main.temp}°C</p>
                    <p className="weather-description">{weather[0].description}</p>
                </div>
                <div className="humidity-info">
                    <p><strong>Humidité : </strong>{main.humidity} %</p>
                </div>
                <div className="weather-icon">
                    <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Weather Icon" />
                </div>
            </div>

            <h3 className="forecast-title">Prévisions sur 5 jours</h3>
            <div className="forecast-container">
                {forecast.map((day, index) => (
                    <div key={index} className="forecast-item">
                        <p>{new Date(day.dt_txt).toLocaleDateString('fr-FR', { weekday: 'short' })}</p>
                        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather Icon" />
                        <p>{day.main.temp}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;