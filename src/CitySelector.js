// src/CitySelector.js
import React from 'react';

const CitySelector = ({ cities, onSelectCity }) => {
    const handleInputChange = (event) => {
        onSelectCity(event.target.value); // Обновляем значение города на основе ввода
    };

    return (
        <div className='sity'>

                <input className='search_line'
                    type="text"
                    placeholder="Введите город"
                    onChange={handleInputChange}
                />

            <select className='sity_search' onChange={(e) => onSelectCity(e.target.value)}>
                    {cities.map((city, index) => (
                        <option  key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
        </div>
);
};

export default CitySelector;
