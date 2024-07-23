import React from 'react';
import {Button} from "react-bootstrap";

const WeatherButton = ({cities, selectedCity, handleCityChange}) => {
    return (
        <div className="menu-container">
            <Button variant={`${selectedCity === '' ? "outline-warning" : "warning"}`}
                    onClick={() => handleCityChange('current')}>Current Location</Button>
            {cities.map((item, index) => (
                <Button key={index} variant={`${selectedCity === item ? "outline-warning" : "warning"}`}
                        onClick={() => handleCityChange(item)}>{item}</Button>
            ))}
        </div>
    );
};

export default WeatherButton;