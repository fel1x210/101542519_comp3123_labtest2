import React from 'react';
import './WeatherAnimation.css';

const WeatherAnimation = ({ weatherCondition }) => {
  const condition = weatherCondition ? weatherCondition.toLowerCase() : '';

  const getAnimationType = () => {
    if (condition.includes('thunder')) return 'stormy';
    if (condition.includes('rain') || condition.includes('drizzle')) return 'rainy';
    if (condition.includes('snow')) return 'snowy';
    if (condition.includes('cloud')) return 'cloudy';
    if (condition.includes('clear')) return 'sunny';
    if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) return 'foggy';
    return 'sunny'; // Default
  };

  const type = getAnimationType();

  return (
    <div className={`weather-animation ${type}`}>
      {type === 'rainy' && (
        <div className="rain">
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
        </div>
      )}
      
      {type === 'snowy' && (
        <div className="snow">
          <div className="flake"></div>
          <div className="flake"></div>
          <div className="flake"></div>
          <div className="flake"></div>
          <div className="flake"></div>
          <div className="flake"></div>
        </div>
      )}

      {type === 'cloudy' && (
        <div className="clouds">
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
        </div>
      )}

      {type === 'sunny' && (
        <div className="sun-container">
          <div className="sun"></div>
          <div className="sun-rays"></div>
        </div>
      )}

      {type === 'stormy' && (
        <div className="storm">
          <div className="cloud x1"></div>
          <div className="rain">
             <div className="drop"></div>
             <div className="drop"></div>
             <div className="drop"></div>
             <div className="drop"></div>
          </div>
          <div className="flash"></div>
        </div>
      )}
      
      {type === 'foggy' && (
        <div className="fog">
            <div className="fog-layer"></div>
            <div className="fog-layer two"></div>
        </div>
      )}
    </div>
  );
};

export default WeatherAnimation;
