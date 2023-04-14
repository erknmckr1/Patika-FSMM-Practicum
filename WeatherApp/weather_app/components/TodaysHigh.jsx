
import React, { useEffect, useState } from "react";
import Highlights from "./ui/Highlights";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import SunsetSunrise from "./ui/SunsetSunrise";
import Maxmin from "./ui/Maxmin";

function TodaysHigh() {
  const { currentWeather,dailyWeather } = useContext(WeatherContext);
  // daily weather dan ay ve gün bilgisini alalım. 5 farklı verı tutacagımız ıcın bır state olusturup data'yı map ile dönüp her gün için istediğimiz verileri tutalım
  const [editDate,setEditDate] = useState([])
  useEffect(()=>{
    const getDate = dailyWeather.map((item)=>{
      const date = new Date(item.dt_txt);
      return date.toLocaleString("en-EN", {
        weekday: "short",
        day: "numeric",
        month: "long",
      });
    })
    setEditDate(getDate)
  },[dailyWeather])
  
  return (
    <div className="h-full w-[67%] md:w-[70] bg-[#F8F9F9] sm:p-10 p-5">
      {/* Weather for 5 days */}
      <span className="font-bold">5 days weather forecast</span>
      <div className="w-full h-[30%] flex flex-col justify-center items-start overflow-auto ">
        <div className="flex overflow-auto gap-x-3 py-2 ">
          {dailyWeather && dailyWeather.map((item,index)=>(
            <div key={index} className="w-[7rem] h-[8rem] bg-white rounded-3xl justify-center flex flex-col items-center ">
                <span className="text-[13px]">{editDate[index]}</span>
                <div className="flex items-center ">
                <img  className="w-[50px] h-[50px]" src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
                <span>{Math.round(item.main.temp)} °C</span>
                </div>
                
                <span className="text-[10px]">{item.weather[0].description}</span>
            </div>
          ))}
        </div>
        
        
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

export default TodaysHigh;
