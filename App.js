import React, { useState } from "react";
import './App.css';
import axios from "axios";

function App() {
let [city, setCity] = useState("");
let [weather, setWeather] = useState({});

function DisplayProp(response) {
  setWeather(
    {
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    }
  );
}

function showProp(event) {
 event.preventDefault();
 let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(DisplayProp);
}

function updateCity (event) {
  setCity(event.target.value);
}
  
  return (
    <div className="App">
      <div className="Weather-app">
        <ul>
          <li>Lisbon</li>
          <li>Paris</li>
          <li>Sydney</li>
          <li>San Francisco</li>
        </ul>
 <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                className="form-control shadow-sm" onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm" onClick={showProp}
              />
            </div>
            <div className="col-3">
              <button className="btn btn-success w-100" id="current-location">
               Current
              </button>
            </div>
          </div>
        </form>
        <br />
        <div className="city">
          <span>{city}</span>
          <br />
          <span>Wednesday 18:43</span>
          <br />
          <span>{weather.description}</span>
        </div>

        
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src={weather.icon} className="Weather_cloud float-left" />
              <div className="float-left">
                <span className="Temperature">{Math.round(weather.temperature)}</span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
          <ul>
      
 <li className="Climate">
Humidity: <span id="humidity">{weather.humidity}</span>% 
</li>
 <li className="Climate">
  Wind: <span id="wind">{weather.wind}</span>km/h  
</li>
</ul>
          </div>
        </div>

        <div className="weather-forecast" id="forecast"> 
        <div className="row">
          <div className="col-2">
            <div>
              Fri
            </div>
            <img src={weather.icon}  />
            <span>
              <strong>13</strong>°C
            </span>
            
          </div>
          <div className="col-2">
            <div>
              Sat
            </div>
            <img src={weather.icon}  />
            <span>
              <strong>23</strong>°C
            </span>
            
          </div>
          <div className="col-2">
            <div>
              Sun
            </div>
            <img src={weather.icon}  />
            <span>
              <strong>33</strong>°C
            </span>
            
          </div>
          <div className="col-2">
            <div>
              Mon
            </div>
            <img src={weather.icon}  />
            <span>
              <strong>10</strong>°C
            </span>
            
          </div>
        </div>
    </div>
        </div>
        <footer className="Git">
        The project was coded by <a href="mailto:judiannpraise004@gmail">Judiann Praise</a> and is {""} <a href="https://github.com/Judiann004/React-homework">open- sourced on Github</a>
      </footer> 
    </div>
  );
}

export default App;
