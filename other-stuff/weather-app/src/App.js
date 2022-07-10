import './App.css';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import {useState} from 'react';

function App() {

  const [weather, setWeather]= useState({})
  // const [zipCode, setZipCode] = useState(null)
  const getWeatherData = async (zipCode) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&APPID=cc446624790bbc53a9c8929ea6510e57`);
      const data = await response.json();
      console.log(data)
      setWeather(data)
      
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
