import React from 'react'

function WeatherCard(props) {
const {weather} = props;

const callMade = () => {
    return (
        <div>
            <p>{weather.list[0] && weather.list[0].main.temp}</p>
            <p>{}</p>
            <p>{}</p>
    
        </div>
      )
}

const noCall = () => {
    return (
        <div>
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
        </div>
      )
}
return weather.list ? callMade(): noCall();
  
}

export default WeatherCard