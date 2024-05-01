import React, { useState } from "react";
import axios from "axios";

const apiKey = "001b2162aa83758c575d9d0269b04f2d";
const baseUrl5DayWeather =
  "https://api.openweathermap.org/data/2.5/forecast?q=";

const ForecastWeather = ( {forecastWeather} ) => {
  // interface ForecastWeatherData {
  //   city: { name: string };
  //   list: [
  //     {
  //       dt_txt: string;
  //       main: { temp: number };
  //       weather: { description: string };
  //       wind: { speed: number };
  //     }
  //   ];
  // }

  // const [forecastWeather, setForecastWeather] = useState<ForecastWeatherData>({
  //   city: { name: "" },
  //   list: [
  //     {
  //       dt_txt: "",
  //       main: { temp: 0 },
  //       weather: { description: "" },
  //       wind: { speed: 0 },
  //     },
  //   ],
  // });

  // const get5DayWeather = () => {
  //   const cityElement = document.getElementById("city") as HTMLInputElement;
  //   axios
  //     .get(
  //       `${baseUrl5DayWeather}${cityElement.value}&appid=${apiKey}&units=metric&lang=ru`
  //     )
  //     .then((res) => {
  //       setForecastWeather(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Неверное название города");
  //     });
  // };

  return (
      <>
      {/* <button onClick={get5DayWeather}>Погода на 5 дней</button> */}
        {forecastWeather.city.name ? (
          <div className="forecast-weather">
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
          </div>
        ) : (
          null
        )}
    </>
  );
};

export default ForecastWeather;
