import React, { useState, useEffect } from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiDayHaze,
  WiNightClear,
  WiNightCloudy,
  WiNightThunderstorm,
  WiNightRain,
  WiNightSnow,
  WiNightPartlyCloudy,
} from 'react-icons/wi';
import axios from 'axios';

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=6eff17c5c4556545b5029079f0b42026&units=metric'
      );
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
      '50d': WiDayHaze,
      '01n': WiNightClear,
      '02n': WiNightCloudy,
      '03n': WiNightCloudy,
      '04n': WiNightCloudy,
      '09n': WiNightRain,
      '10n': WiNightRain,
      '11n': WiNightThunderstorm,
      '13n': WiNightSnow,
      '50n': WiNightPartlyCloudy,
    };

    const IconComponent = iconMap[iconCode];

    return IconComponent ? <IconComponent size={iconSize} /> : null;
  };

  return (
    <div>
      {weather ? (
        <div className="card bg-white mt-2">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{weather.name}</h2>
              <div>{getWeatherIcon(weather.weather[0].icon)}</div>
            </div>
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
