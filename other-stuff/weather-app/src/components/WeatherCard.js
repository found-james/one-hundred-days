import React, { useEffect } from 'react'

function WeatherCard(props) {
    
const {weather, main, name } = props


// useEffect(() => {
//     getWeatherData()
// }, [weather])

const callMade = () => {
    return (
        <div style={{border: "1px solid black", height:"100px"}}>
            <p>{weather[0].description}</p>
            <p>{main.temp}</p>
            <p>{name}</p>
    
        </div>
      )
}

const noCall = () => {
    return (
        <div>
            Weather APP
        </div>
      )
}
return weather && main && name ? callMade(): noCall();
  
}

export default WeatherCard