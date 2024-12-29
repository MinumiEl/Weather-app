// src/Forecast.js
import React from 'react';

const Forecast = ({ forecastData }) => {
    if (!forecastData) return null;

    const dailyForecasts = forecastData.list.filter((item) => item.dt_txt.includes("12:00:00")); // Фильтруем данные по времени

    return (
        <div>
            <h2>Прогноз на 5 дней</h2>
            <ul>
                {dailyForecasts.map((day) => (
                    <li key={day.dt}>
                        {new Date(day.dt * 1000).toLocaleDateString()}: {Math.round(day.main.temp)}°C, {day.weather[0].description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Forecast;
