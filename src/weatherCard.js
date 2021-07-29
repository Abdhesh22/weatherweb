import React,{useEffect} from 'react';
import './index.css'
const WeatherCard = ({tempInfo})=>{
    const [wetherUseState, setweatherUseState] = React.useState();
    const {  //object of new data according to user input
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset
      } = tempInfo;
      useEffect(() => {
          if(weatherMood){
              switch(weatherMood){
                  case "Clouds": setweatherUseState("wi-day-cloudy");
                  break;
                  case "Haze": setweatherUseState("wi-fog");
                  break;
                  case "Clear": setweatherUseState("wi-day-sunny");
                  break;
                  case "Mist": setweatherUseState("wi-dust");
                  break;
                  case "Rain": setweatherUseState("wi-day-rain");
                  break;
                  case "Drizzle": setweatherUseState("wi-day-showers");
                  break;
                  case "Snow": setweatherUseState("wi-day-snow");
                  break;
                  case "Fog": setweatherUseState("wi-day-fog");
                  break;
                  default : setweatherUseState("wi-day-sunny");
                  break;
              }
          }
      }, [weatherMood])
      let sec = sunset;
      let date = new Date(sec * 1000);
      let timestr = `${date.getHours()}:${date.getMinutes()}`
return(
<>
    <div className="widget">
    <div className="weatherIcon">
    <i className={`wi ${wetherUseState}`}></i>
    </div>
    <div className="weatherInfo">
      <div className="weatherInfo1">
      <div className="temperature">
        <span>{temp}&deg;</span>
      </div>
      <div className="description">
        <div className="weatherCondition">{weatherMood}
        <div className="place">{name},{country}</div>
        </div>
      </div>
      </div>
    <div className="date">{new Date().toLocaleString()}</div>
    </div>
    <div className="extra-temp">
      <div className="temp-info-minmax">
        <div className="two-sided-section">
          <p><i className={"wi wi-sunset"}></i></p>
          <p className="extra-info-leftside">
                {timestr} PM<br/>
                Sunset
          </p>
        </div>
        <div className="two-sided-section">
          <p><i className={"wi wi-humidity"}></i></p>
          <p className="extra-info-leftside">
                {humidity}<br/>
                Humidity
          </p>
        </div>
        <div className="two-sided-section">
          <p><i className={"wi wi-strong-wind"}></i></p>
          <p className="extra-info-leftside">
                {speed}<br/>
                Speed
          </p>
        </div>
        <div className="two-sided-section">
          <p><i className={"wi wi-hail"}></i></p>
          <p className="extra-info-leftside">
                {pressure}<br/>
                Pressure
          </p>
        </div>
      </div>
    </div>
  </div>
</>
);
};
export default WeatherCard;