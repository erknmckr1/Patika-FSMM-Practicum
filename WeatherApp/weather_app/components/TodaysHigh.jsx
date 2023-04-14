
import React, { useEffect } from "react";
import Highlights from "./ui/Highlights";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import SunsetSunrise from "./ui/SunsetSunrise";
import Maxmin from "./ui/Maxmin";
function ForecastWeather() {
  const { currentWeather } = useContext(WeatherContext);
  
  return (
    <div className="h-full w-[70%] bg-[#F8F9F9] p-10 ">
      {/* Weather for 5 days */}
      <div className="w-full h-[30%]">
        <span className="font-bold">5 days weather forecast</span>
      </div>
      {/* Weather for 5 days */}

      {/* Today highlights side start */}
      <div className="w-full h-[70%] flex flex-col items-center justify-center ">
        <div className="w-full flex sm:justify-start">
          <span className="font-bold">Today's highlights</span>
        </div>
        {currentWeather && (
          <div className=" h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-3 items-center overflow-y-auto  ">
            <Maxmin/>
            <Highlights title="Wind Status" prop={currentWeather.speed} type="Km/h" src="/wind.png" />
            <SunsetSunrise/>
            <Highlights title="Humidity" prop={currentWeather.humidity} type="%" src="/humidity.png"/>
            <Highlights title="Visibility" prop={currentWeather.visibility/1000} type="km" src="/haze.png" />
            <Highlights title="Pressure" prop={currentWeather.pressure} type="hPa" src="/pressure.png" />
          </div>
        )}
      </div>
      {/* Today highlights side end */}
    </div>
  );
}

export default ForecastWeather;
