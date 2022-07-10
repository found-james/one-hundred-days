import {useState} from 'react'

function Form(props) {

  const {setZipCode} = props

    const [formData, setFormData] = useState({
        zipCode:"",
        error:""
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, error: "", [e.target.name]: e.target.value});
        // setZipCode({});
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (formData.zipCode.length !== 5) {
        setFormData({ zipCode: "", error: "not valid zipcode"});
        } else {
          setZipCode(formData.zipCode)
        }
      };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ZIP" name="zipCode" onChange={handleChange} value={formData.zipCode}/>
        <input type="submit" value="enter zip"/>
      </form>
      <p>{formData.error}</p>
    </div>
  )
}

export default Form