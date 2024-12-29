// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitySelector from './CitySelector';
import Weather from './Weather';
import Forecast from './Forecast';
import './App.css';

const API_KEY = 'db204543a7932af2e5591af1f3a5a14f'; // Замените на ваш API-ключ
const CITIES = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

const App = () => {
    const [selectedCity, setSelectedCity] = useState(CITIES[0]);
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [view, setView] = useState('current'); // 'current' или 'forecast'

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных о погоде:', error);
            }
        };

        const fetchForecast = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${API_KEY}&units=metric`
                );
                setForecastData(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных о прогнозе:', error);
            }
        };

        // Запрос данных в зависимости от выбранного вида
        if (view === 'current') {
            fetchWeather();
        } else {
            fetchForecast();
        }
    }, [selectedCity, view]);

    return (
        <div className="app-container">
            <div className="transparent-box">
                <h1>Сервис просмотра погоды</h1>
                <CitySelector cities={CITIES} onSelectCity={setSelectedCity}/>
                <div className='time'>
                    <button className='time_now' onClick={() => setView('current')}>Сейчас</button>
                    <button className='time_day' onClick={() => setView('forecast')}>Ближайшие 5 дней</button>
                </div>
                {view === 'current' ? (
                    <Weather weatherData={weatherData}/>
                ) : (
                    <Forecast forecastData={forecastData}/>
                )}
            </div>
        </div>
    );
};

export default App;
