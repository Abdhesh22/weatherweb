import React, { useState,useEffect } from 'react'; 
import WeatherCard from './weatherCard';
const App =()=>{
  const [searchvalue, setsearchvalue] = useState("New delhi");
   const [tempInfo,setTemp] = useState("");
  const getweatherinfo= async ()=>{
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=7eae17ff4f20d79bd5864aed229f75ad`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        const {temp,humidity,pressure} = data.main;
        const {main : weatherMood} = data.weather[0];
        const {name} = data;
        const {speed} = data.wind;
        const {country,sunset} = data.sys;

        const myNewWeatherInfo ={  //object of new data according to user input
          temp,
          humidity,
          pressure,
          weatherMood,
          name,
          speed,
          country,
          sunset
        };
        setTemp(myNewWeatherInfo)
        // console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getweatherinfo();
  }, []);
  return <>
  <div className="wrap">
    <div className="search">
      <input type="search" placeholder="Enter City Name" autoFocus id="search" className="searchTerm" value={searchvalue} onChange={(e)=>setsearchvalue(e.target.value)}/>
      <button className="SearchBtn" onClick={getweatherinfo}>Search</button>
    </div>
  </div>
  <WeatherCard tempInfo = {tempInfo}/>
  </>;
};
export default App