import { createContext, useEffect, useState } from "react";
export const WeatherContext = createContext();
import axios from "axios";

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [photo,setPhoto] = useState("")


  useEffect(() => {
    // fetch operations start
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch request for location information
        const geoResponse = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2d25b062c228857098a45d3b1936fda2`
        );
        const data = await geoResponse.json();
        const lat = data[0].lat;
        const lon = data[0].lon;

        //fetch request for 5 day weather forecast
        const { data: weatherData } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2d25b062c228857098a45d3b1936fda2&units=metric`
        );

        setForecastWeather(weatherData);
        //console.log(forecastWeather)

        //Current weather information
        const { data:{
          dt,
          name,
          main:{
            temp,
            feels_like,
            humidity,
            temp_min,
            temp_max,
            pressure,
            
          },
          weather:[{ // weather ozellıgı bır dızı ıcerdıgı ıcın dızı ıcerısınde aldık. 
            main,
            icon
          }],
          wind:{
            speed
          },
          sys:{
            sunrise,
            sunset
          }
        } } = await axios(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2d25b062c228857098a45d3b1936fda2&units=metric`
        );
        
        console.log(forecastWeather)
        
        setCurrentWeather({dt, temp, feelsLike: feels_like, humidity, main, icon,name });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    const fetchPhoto = async () => {
      const {data} = await axios(`https://api.unsplash.com/photos/random?query=${city}&client_id=YVOoOy0lCbdz0PUKfwSw80yI9hK76ux9OWRWQKf6Fs0`)

      const {urls:{regular}} = data
      setPhoto(regular)
      
    }
    fetchData();
    fetchPhoto()

  }, [city]);

  // fetch operation end


  const values = {
    city,
    setCity,
    currentWeather,
    loading,
    setLoading,
    forecastWeather,
    photo
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
