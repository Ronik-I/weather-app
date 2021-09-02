import React, { useState } from 'react';
const api ={
  key: "key hidden",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result); 
        });
    }
  }
  

  const dateBuilder=(d) => {
    let months = ["Jnauary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


    let s = weather.timezone;
    let h = Math.floor((s/3600));
    let m = Math.floor((s -(3600*h))/60);

    let minute = d.getMinutes()-30+m;
    let hours = d.getHours() - 5 + h;


    if (minute < 0){
      hours--;
      minute = 60 + minute;
    }
    if (hours<0){
      hours = 24 + hours;
    }

    let time =hours + ':' + minute;

    return `${time} ${day} ${date} ${month} ${year} `

  }
  const currTime=(d) => {
    let hrs = d.getHours();
    let s = weather.timezone;
    let h = Math.floor(s/3600);
    hrs = hrs - 5 + h;
    if (hrs<0){
      hrs = 24 + hrs;
    }
    return `${hrs}`
  }
  const getBackgroundicon = (weather) => {
    if (weather === 'Clouds') {
        return "clouds";
    }
    else if (weather === 'Clear') {
        if(currTime(new Date())>=6 && currTime(new Date())<=18)
        return "clear";
        else
        return "moon";
    }
    else if (weather === 'Mist') {
      return "mist";
    }
    else if (weather === 'Rain') {
      return "rain";
    }
    return "clouds";
    
}
const getBackground = (temp,time) => {
  if(temp<=20)
  {
    if(time>=6 && time<18)
     return 'app';
    else
     return 'app coldnight';
  }
  else{
    if(time>=6 && time<18)
     return 'app warmday';
    else
     return 'app warmnight';
  }
}
  return (
    <div className={
      (typeof weather.main != "undefined")?(     
      getBackground(Math.round(weather.main.temp),currTime(new Date())))
      :('app')
    }>
      <main>
        <div className="search-box">
          <input 
          type ="text" 
          className="search-bar"
          placeholder="Search here"
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined")? (
        <div>
           <div className="location-box">
          <div className="location">{weather.name},{weather.sys.country }</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°c
          </div>
          <div className="weather">{weather.weather[0].main}</div>
          <div className={
          getBackgroundicon(weather.weather[0].main)}>
            
          </div>

        </div>
        
        </div>
        
        ) :(<div id= "notfound">City Not Found</div>)}
      </main>
    </div>
  );
}

export default App;
