// src/Weather.js
import React from 'react';

const Weather = ({ weatherData }) => {
    if (!weatherData) return null;

    return (
        <div>
            <h2>Погода в {weatherData.name}</h2>
            <p>Температура: {Math.round(weatherData.main.temp)}°C</p>
            <p>Состояние: {weatherData.weather[0].description}</p>
        </div>
    );
};

export default Weather;
