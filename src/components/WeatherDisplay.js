import React from 'react';
import './WeatherDisplay.css';
import ForecastDisplay from './ForecastDisplay';
import WeatherAnimation from './WeatherAnimation';

const WeatherDisplay = ({ weather, forecast }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails, wind, sys } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@4x.png`; // Larger icon

  // Date formatting
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const dayName = days[date.getDay()];
  const dateString = `${date.getDate()} ${months[date.getMonth()]}`;

  return (
    <div className="weather-card">
      <div className="weather-current-row">
        <div className="weather-left">
          <WeatherAnimation weatherCondition={weatherDetails[0].main} />
          <div className="date-info">
            <h2 className="day-name">{dayName}</h2>
            <span className="full-date">{dateString}</span>
            <div className="location-info">
              <i className="fas fa-map-marker-alt"></i> {name}, {sys.country}
            </div>
          </div>
          
          <div className="weather-main-info">
            <img src={iconUrl} alt={weatherDetails[0].description} className="weather-icon-large" />
            <h1 className="temperature-large">{Math.round(main.temp)}°C</h1>
            <h3 className="weather-desc">{weatherDetails[0].description}</h3>
          </div>
        </div>

        <div className="weather-right">
          <div className="details-list">
            <div className="detail-row">
              <span className="label">PRECIPITATION</span>
              <span className="value">0%</span> {/* API doesn't always provide this, placeholder */}
            </div>
            <div className="detail-row">
              <span className="label">HUMIDITY</span>
              <span className="value">{main.humidity} %</span>
            </div>
            <div className="detail-row">
              <span className="label">WIND</span>
              <span className="value">{wind.speed} km/h</span>
            </div>
            <div className="detail-row">
              <span className="label">AIR PRESSURE</span>
              <span className="value">{main.pressure} mb</span>
            </div>
            <div className="detail-row">
              <span className="label">MAX TEMP</span>
              <span className="value">{Math.round(main.temp_max)}°C</span>
            </div>
            <div className="detail-row">
              <span className="label">MIN TEMP</span>
              <span className="value">{Math.round(main.temp_min)}°C</span>
            </div>
          </div>
        </div>
      </div>
      <ForecastDisplay forecast={forecast} />
    </div>
  );
};

export default WeatherDisplay;


