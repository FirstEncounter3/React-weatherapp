import React from "react";

import "../styles/ForecastWeather.css";

const ForecastWeather = ({ forecastWeather }) => {
  return (
    <div className="forecast-table-wrapper">
      {forecastWeather.city.name ? (
        <table className="forecast-table">
          <thead>
            <tr>
              <th>Дата</th>
              <th>Температура</th>
              <th>Погода</th>
              <th>Скорость ветра</th>
            </tr>
          </thead>
          <tbody>
            {forecastWeather.list.map((item, index) => (
              <tr key={index}>
                <td>{item.dt_txt}</td>
                <td>{item.main.temp.toFixed()} °C</td>
                <td>{item.weather[0].description}</td>
                <td>{item.wind.speed} м/с</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default ForecastWeather;
