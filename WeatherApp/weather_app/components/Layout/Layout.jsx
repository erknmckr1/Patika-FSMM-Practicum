import React from "react";
import Search from "../Search";
import CurrentWeather from "../CurrentWeather";
import ForecastWeather from "../TodaysHigh";

function Layout() {
  return (
    <div className="bg-[#E5E7E9] w-screen h-screen flex justify-center items-center  ">
      <div className="sm:w-[70%] w-[90%] h-[80%] bg-white layoutShadow rounded-3xl overflow-hidden ">
        <div className=" w-full h-full flex ">
          <div className="h-full w-[30%] bg-white flex flex-col">
            <Search />
            <CurrentWeather />
          </div>
          <ForecastWeather/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
