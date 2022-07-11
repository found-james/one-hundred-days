import React, { Fragment, useEffect, useState} from 'react'
import {apiCall} from "../util/fetch"

function WeatherCard(props) {
    
    const {zipCode} = props
    const [weather, setWeather] = useState(null)

    const getWeatherData = async (zipCode) => {
        try {
            const response = await apiCall(zipCode);
            const data = await response.json()
            setWeather(data)

        } catch (err) {
            console.error(err)
        }
  }

    useEffect(() => {
        if (zipCode && zipCode.length === 5) getWeatherData(zipCode)
    }, [zipCode])


    return (
        <div className={ weather ? "showCard" : "noShow"}>
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