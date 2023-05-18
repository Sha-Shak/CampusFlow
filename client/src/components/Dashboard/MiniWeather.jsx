import React, { useState, useEffect } from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from 'react-icons/wi';
import axios from 'axios';

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=6eff17c5c4556545b5029079f0b42026&units=metric'
      );
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getWeatherIcon = (iconCode) => {
    const iconSize = 64;

    // Map the weather condition codes to the corresponding icons
    const iconMap = {
      '01d': WiDaySunny,
      '02d': WiCloudy,
      '03d': WiCloudy,
      '04d': WiCloudy,
      '09d': WiRain,
      '10d': WiRain,
      '11d': WiThunderstorm,
      '13d': WiSnow,
      // ... add more mappings for other weather conditions
    };

    const IconComponent = iconMap[iconCode];

    return IconComponent ? <IconComponent size={iconSize} /> : null;
  };

  return (
    <div>
      {weather ? (
        <div className="card w-96 glass">
          <div className="card-body">
            <h2 className="card-title">{weather.name}</h2>
            <p>
              Current Temperature:{' '}
              <span className="text-md font-semibold">
                {weather.main.temp}°C
              </span>
            </p>
            <p>
              Condition:{' '}
              <span className="text-md font-semibold">
                {weather.weather[0].main}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
