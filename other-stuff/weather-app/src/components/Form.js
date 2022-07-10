import {useState} from 'react'

function Form(props) {

    const [formData, setFormData] = useState({
        zipCode:"",
        error:""
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, error: "", [e.target.name]: e.target.value});
        props.setWeather({});
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (formData.zipCode.length !== 5) {
        setFormData({ zipCode: "", error: "not valid zipcode"});
        } else {
          props.fetch(formData.zipCode)
        }
      };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ZIP" name="zipCode" onChange={handleChange} value={formData.zipCode}/>
        <input type="submit" value="enter zip"/>
      </form>
      <p>{formData.error}</p>q
    </div>
  )
}

export default Form