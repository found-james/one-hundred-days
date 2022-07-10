import React, { Fragment, useEffect, useState} from 'react'

function WeatherCard(props) {
    
    const {zipCode} = props

    const [weather, setWeather] = useState(null)

    const getWeatherData = async (zipCode) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&APPID=7f5bbd6dd05e3fdd62172d000f0b41ef`);
            const data = await response.json();
            console.log(data)
            setWeather(data)
    } catch {

    }
  }

    useEffect(() => {
        if (zipCode && zipCode.length === 5) getWeatherData(zipCode)
    }, [zipCode])


    return (
        <div style={{border: "1px solid black", height:"100px"}}>
            {
                weather && (
                    <Fragment>
                        <p>{weather.name}</p>
                        <p>{weather.main.temp}</p>
                        <p>{weather.main.feels_like}</p>
                        <p>{weather.main.temp_min}</p>
                        <p>{weather.main.temp_max}</p>
                        <p>{weather.main.pressure}</p>
                        <p>{weather.main.temp_min}</p>
                    </Fragment>
                )
            }
        </div>
      )
}

    
export default WeatherCard