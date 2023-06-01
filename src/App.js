import { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import WeatherForm from './components/WeatherForm';
const API_key = "16b74458dd620edf6984bfafbdcfb9b3";

function App() {
  // const [ cityCountry, setCityCountry ] = useState({
  //   city: "", 
  //   country: ""
  // });

  const [ data, setData ] = useState({
    city: "",
    country: "",
    temp: 0,
    description: "",
  }); 

  const changeHandler = (e) => {
    setData(prev => {
      return {...prev, [e.target.name] : e.target.value }
    })
  }


  const fetchWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${API_key}`);
    const d = await response.json();
    setData({
      city: d.name,
      country: d.sys.country,
      temp: d.main.temp,
      description: d.weather[0].description,
    });
  }


  const submitHandler = (e) => {
    e.preventDefault();
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${API_key}`)
    //   .then( response => response.json())
    //   .then( d => setData({
    //     city: d.name,
    //     country: d.sys.country,
    //     temp: d.main.temp,
    //     description: d.weather[0].description,
    //   }) );

    // async await method process
      fetchWeather();
  }

  return (
    <>
      <h1>Weather App</h1>
      <WeatherForm submitHandler={submitHandler} changeHandler={changeHandler} />
      {
        data.city && data.country ? <Weather data={data} /> : `<h1>Enter the required details</h1>` 
      }
    </>
  );
}

export default App;
