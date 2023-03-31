import React, { useEffect, useState } from "react";

export function Weather() {
    const [lat, setLat] = useState();
    const [long, setLong] = useState([]);
    const [weather, setWeather] = useState({
      description: "",
      main: ""
    });
    const [wind, setWind] = useState({ speed: 0, deg: 0, gust: 0 })
    const [main, setMain] = useState({})
    const [name, setName] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=36f8b9d93a5463ca919059f58b8faa6c`)
        .then(res => res.json())
        .then(result => {
          setWeather(result['weather'][0])
          setWind(result['wind'])
          setMain(result['main'])
          setName(result['name'])
          console.log(result);
        });
      }
      fetchData();
    }, [lat,long])
    return (
      <div>
        <table styles={{border:'1px solid black'}}>
          <tr>
            <td>Name:</td>
            <td>{name}</td>
          </tr>
          {
            Object.keys(wind).map((key)=>(
              <tr>
                <td>{key}:</td>
                <td>{wind[key]}</td>
              </tr>
            ))
          }
          {
            Object.keys(weather).map((key)=>(
              <tr>
                <td>{key}:</td>
                <td>{weather[key]}</td>
              </tr>
            ))
          }
          {
            Object.keys(main).map((key)=>(
              <tr>
                <td>{key}:</td>
                <td>{main[key]}</td>
              </tr>
            ))
          }
        </table>
      </div>
    );
  }