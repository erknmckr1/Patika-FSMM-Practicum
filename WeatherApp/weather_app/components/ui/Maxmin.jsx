import { WeatherContext } from "@/context/WeatherContext";
import React from "react";
import { useContext } from "react";
import Image from "next/image";
function Maxmin() {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <div className="w-[10rem] h-[10rem] bg-white rounded-3xl flex flex-col items-center justify-between p-1">
      <span className="text-[grey]">Max & Min Temp</span>

      <div className="flex flex-col justify-between items-start">
        <div className="flex items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image src="/max.png" fill  alt="a" />
          </div>
          <div>
            <span className="text-[13px]">
              {Math.round(currentWeather.temp_max)}
            </span>
            <span className="text-[13px]">°C</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image src="/min.png" fill  alt="a" />
          </div>
          <div>
            <span className="text-[13px]">
              {Math.round(currentWeather.temp_min)}
            </span>
            <span className="text-[13px]">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maxmin;
