import React from 'react';
import {Button} from "react-bootstrap";

const WeatherButton = ({cities}) => {
    console.log(cities)
    return (
        <div>
            <Button variant="warning">Current Location</Button>
            {cities.map((item, index) => (
                <Button key={index} variant="warning">{item}</Button>
            ))}
        </div>
    );
};

export default WeatherButton;