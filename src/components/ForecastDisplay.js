import React from 'react';
import './ForecastDisplay.css';

const ForecastDisplay = ({ forecast }) => {
  if (!forecast) return null;

  // Filter forecast to get one reading per day (e.g., 12:00 PM)
  // The API returns data every 3 hours.
  const dailyForecast = forecast.list.filter((reading) => 
    reading.dt_txt.includes("12:00:00")
  );

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-list">
        {dailyForecast.map((dayData) => {
          const date = new Date(dayData.dt * 1000);
          const dayName = days[date.getDay()];
          const iconUrl = `http://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`;

          return (
            <div key={dayData.dt} className="forecast-item">
              <span className="forecast-day">{dayName}</span>
              <img src={iconUrl} alt={dayData.weather[0].description} className="forecast-icon" />
              <span className="forecast-temp">{Math.round(dayData.main.temp)}°C</span>
              <span className="forecast-desc">{dayData.weather[0].main}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastDisplay;
