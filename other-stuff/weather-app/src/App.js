import './App.css';
import {useState} from 'react';

function App() {

  const [formData, setFormData] = useState({
    searchTerm:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.movieSearch(formData.searchTerm);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm}/>
        <input type="submit" value="enter zip"/>
      </form>
    </div>
  );
}

export default App;
