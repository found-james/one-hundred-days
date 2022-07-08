import {useState} from 'react'

function Form() {

    const [formData, setFormData] = useState({
        searchTerm:"",
        error:""
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, error: "", [e.target.name]: e.target.value});
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (formData.searchTerm.length !== 5) {
        setFormData({ searchTerm: "", error: "not valid zipcode"});
        } else {
          // apiCall
        }
      };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm}/>
        <input type="submit" value="enter zip"/>
      </form>
      <p>{formData.error}</p>
    </div>
  )
}

export default Form