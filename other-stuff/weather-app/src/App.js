import './App.css';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import {useState} from 'react';

function App() {

  const [weather, setWeather]= useState({})
  const getWeatherData = async () => {
    try {
      const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cc446624790bbc53a9c8929ea6510e57");
      const data = await response.json();
      setWeather(data);
      
    } catch {

    }
  }
  return (
    <div className="App">
      <Form fetch={getWeatherData} setWeather={setWeather}/>
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
