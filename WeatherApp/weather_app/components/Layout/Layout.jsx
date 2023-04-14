import React from "react";
import Search from "../Search";
import CurrentWeather from "../CurrentWeather";
import TodaysHigh from "../TodaysHigh";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
function Layout() {
  const {loading} = useContext(WeatherContext)
  console.log(loading)
  return (
    <div className="bg-[url('/bg/cloudsbg.png')] w-screen h-screen flex justify-center items-center  ">
      <div className="sm:w-[70%] w-[90%] h-[80%] bg-white layoutShadow rounded-3xl overflow-hidden relative ">
        <div className=" w-full h-full flex ">
          <div className="h-full w-[33%] md:w-[30%] bg-white flex flex-col">
            <Search />
            <CurrentWeather />
          </div>
          
          <TodaysHigh/>
       
          
        </div>
        {loading && <div className="absolute w-full h-full top-0 bg-white">

            <div className="w-full h-full flex justify-center items-center" >
              <img src="/loading/loading.gif"/>
            </div>

          </div>}
      </div>
      
    </div>
  );
}

export default Layout;
