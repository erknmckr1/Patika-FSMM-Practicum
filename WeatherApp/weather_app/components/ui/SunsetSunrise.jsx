import { WeatherContext } from "@/context/WeatherContext";
import Image from "next/image";
import React from "react";
import { useContext } from "react";

function SunsetSunrise() {
  const { currentWeather } = useContext(WeatherContext);
  //Gün dogumu ve gun batımı verılerını düzenlediğimiz komponent
  return (
    <div className="w-[10rem] h-[10rem] bg-white rounded-3xl flex flex-col items-center justify-between p-1">
      <span className="text-[grey]">Sunset & Sunsire</span>
      <div className="flex flex-col justify-between items-start">
        <div className="flex items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image src="/sunset.png" fill objectFit="cover" />
          </div>
          <span className="text-[13px]">{currentWeather.sunsetTime}</span>
        </div>
        <div className="flex items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image src="/sunrise.jpeg" fill objectFit="cover" />
          </div>
          <span className="text-[13px]">{currentWeather.sunriseTime}</span>
        </div>
      </div>
    </div>
  );
}

export default SunsetSunrise;
