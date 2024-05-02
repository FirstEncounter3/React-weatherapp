import React from "react";

import "../styles/CurrentWeather.css";

const CurrentWeather = ( {weather} ) => {
  return (
    <>
      {weather.name ? (
        <div className="current-weather">
          <p className="temp">{weather.main.temp.toFixed()} °C</p>
          <p>{weather.name}</p>
          <p>{weather.weather[0].description}</p>
          <p>{weather.wind.speed} м\с</p>
        </div>
        ) : (
          null
        )}
    </>
  );
};

export default CurrentWeather;
