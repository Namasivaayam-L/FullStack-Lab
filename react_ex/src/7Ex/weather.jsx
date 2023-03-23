import React, { useEffect, useState } from "react";

export function Weather() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
        console.log(process.env.REACT_APP_API_KEY);
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=36f8b9d93a5463ca919059f58b8faa6c`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
      }
      fetchData();
    }, [lat,long])
    
    return (
      <div className="App">
            {
                React.createElement('table', { border: '1px solid black' },
                    Object.keys(data).map((key) => (
                        React.createElement('tr', {},
                            React.createElement('td',{},key),
                            React.createElement('td',{},JSON.stringify(data[key]))
                        )
                    ))
                )
            }
      </div>
    );
  }