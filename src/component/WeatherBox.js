import React from 'react';

const WeatherBox = ({weather}) => {
    console.log('weather ? ', weather);

    const celcius = weather?.main.temp;
    const fahrenheit = (celcius * 9/5) + 32;

    return (
        <div className={'weather-box'}>
            <div>{weather?.name}</div>
            <h2>{celcius}C /{fahrenheit}화씨</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    );
};

export default WeatherBox;