import React from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';
import Orb from './components/Orb';

function App() {
  return (
    <div className="App">
      <div className="app-background">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <div className="app-content">
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;


