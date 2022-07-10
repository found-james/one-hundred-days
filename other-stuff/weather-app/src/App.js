import './App.css';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import {useState} from 'react';

function App() {

  const [zipCode, setZipCode] = useState(null)

  return (
    <div className="App">
      <Form setZipCode={setZipCode} />
      <WeatherCard zipCode={zipCode} />
    </div>
  );
}

export default App;
