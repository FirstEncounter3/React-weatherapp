import React, { useState, useEffect } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

import "../styles/App.css";

const apiKey = "001b2162aa83758c575d9d0269b04f2d";
const baseUrlGetCity = "http://api.openweathermap.org/geo/1.0/reverse?";
const baseUrlCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?q=";
const baseUrl5DayWeather = "https://api.openweathermap.org/data/2.5/forecast?q=";

const App = () => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {

          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const url = `${baseUrlGetCity}lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

          axios
            .get(url)
            .then(function (res) {
              const city = res.data[0].local_names.ru;
              document.getElementById("city")?.setAttribute("value", city);
              alert("Геолокация определена");
            })
            .catch(function (error) {
              console.error(error);
            });
        },
        function (error) {
          console.log(error);
          alert("Геолокация не доступна. Укажите город вручную");
        }
      );
    } else {
      alert("Геолокация не поддерживается браузером");
    }
  }
  useEffect(() => {
    getLocation();
  }, []);
  interface CurrentWeatherData {
    main: { temp: number };
    name: string;
    weather: { description: string };
    wind: { speed: number };
  }

  const [weather, setWeather] = useState<CurrentWeatherData>({
    main: { temp: 0 },
    name: "",
    weather: { description: "" },
    wind: { speed: 0 },
  });

  const getCurrentWeather = () => {
    const cityElement = document.getElementById("city") as HTMLInputElement;
    axios
      .get(
        `${baseUrlCurrentWeather}${cityElement.value}&appid=${apiKey}&units=metric&lang=ru`
      )
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Неверное название города");
      });
  };

  interface ForecastWeatherData {
    city: { name: string };
    list: [
      {
        dt_txt: string;
        main: { temp: number };
        weather: { description: string };
        wind: { speed: number };
      }
    ];
  }

  const [forecastWeather, setForecastWeather] = useState<ForecastWeatherData>({
    city: { name: "" },
    list: [
      {
        dt_txt: "",
        main: { temp: 0 },
        weather: { description: "" },
        wind: { speed: 0 },
      },
    ],
  });

  const get5DayWeather = () => {
    const cityElement = document.getElementById("city") as HTMLInputElement;
    axios
      .get(
        `${baseUrl5DayWeather}${cityElement.value}&appid=${apiKey}&units=metric&lang=ru`
      )
      .then((res) => {
        setForecastWeather(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Неверное название города");
      });
  };

  return (
    <>
      <div className="main-container">
        <input id="city" type="text" placeholder="Введите название города" />
        <div className="buttons">
          <button onClick={getCurrentWeather}>Погода сегодня</button>
          <button onClick={get5DayWeather}>Погода на 5 дней</button>
        </div>
      </div>
      <section className="container-buttons">
        <CurrentWeather weather={weather} />
        <ForecastWeather forecastWeather={forecastWeather} />
      </section>
    </>
  );
};

export default App;
