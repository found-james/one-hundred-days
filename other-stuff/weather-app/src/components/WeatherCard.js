import React, { Fragment, useEffect, useState} from 'react'

function WeatherCard(props) {
    
    const {zipCode} = props

    const [weather, setWeather] = useState({})

    const {name, main} = weather

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
                        <p>{name}</p>
                        <p>{main.temp}</p>
                        <p>{main.feels_like}</p>
                        <p>{main.temp_min}</p>
                        <p>{main.temp_max}</p>
                        <p>{main.pressure}</p>
                        <p>{main.temp_min}</p>
                    </Fragment>
                )
            }
        </div>
      )
}

    
export default WeatherCard