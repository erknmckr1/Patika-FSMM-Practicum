import React from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { useContext } from "react";
function CurrentWeather() {
  const { currentWeather, photo } = useContext(WeatherContext);

  //time operations on the current day
  let day;
  let time;
  if (currentWeather) {
    const date = new Date(currentWeather.dt * 1000);
    day = date && date.toLocaleDateString("en-EN", { weekday: "long" });
    const hour = date.getHours();
    const minute = date.getMinutes();
    const period = hour >= 12 ? "PM" : "AM"; // pm ve am durumunu belırledık.
    time =
      (hour < 10 ? "0" + hour : hour) +
      ":" +
      (minute < 10 ? "0" + minute : minute) +
      " " +
      period;
  }

  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        {currentWeather && (
          <div className="flex justify-center flex-col items-center relative">
            <div className="w-full h-full flex justify-center">
              <img
                className="sm:w-50 sm:h-40 h-30 w-40"
                src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}
                alt="Weather Icon"
              />
            </div>

            <div className="flex ">
              <span className="text-[50px] sm:text-[80px]">
                {Math.round(currentWeather.temp)}
              </span>
              <span className="text-[30px] sm:text-[40px]">°C</span>
            </div>
            {/* name & country */}
            <div className="flex items-center sm:text-[30px] text-[20px]">
            <span>{currentWeather.name}-</span>
            <span>{currentWeather.country}</span>
            </div>
            
            <div className="w-full py-4  flex sm:flex-row flex-col sm:justify-evenly items-center">
              <span>{day}</span>
              <span className="text-[#D7DBDD ]">{time}</span>
            </div>
            <div className="flex items-center justify-center w-full border-b-2">
              <span>{currentWeather.main}</span>
              <img
                src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}
                alt="Weather Icon"
              />
            </div>
            <div className="w-full absloute p-1">
              <img
                className="rounded-3xl h-[100px] sm:w-[250px] sm:h-[150px] w-full p-3"
                src={photo}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;
