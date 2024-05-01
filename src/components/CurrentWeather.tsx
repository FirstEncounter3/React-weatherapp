import React, { useState } from "react";
import axios from "axios";

import "../styles/CurrentWeather.css";

const apiKey = "001b2162aa83758c575d9d0269b04f2d";
const baseUrlCurrentWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=";

const CurrentWeather = ( {weather} ) => {
  // interface CurrentWeatherData {
  //   main: { temp: number };
  //   name: string;
  //   weather: { description: string };
  //   wind: { speed: number };
  // }

  // const [weather, setWeather] = useState<CurrentWeatherData>({
  //   main: { temp: 0 },
  //   name: "",
  //   weather: { description: "" },
  //   wind: { speed: 0 },
  // });

  // const getCurrentWeather = () => {
  //   const cityElement = document.getElementById("city") as HTMLInputElement;
  //   axios
  //     .get(
  //       `${baseUrlCurrentWeather}${cityElement.value}&appid=${apiKey}&units=metric&lang=ru`
  //     )
  //     .then((res) => {
  //       setWeather(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Неверное название города");
  //     });
  // };

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
