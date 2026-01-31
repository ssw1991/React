import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    text:'',
    checkbox: false,
    radio: '',
    select: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    }); 
    
  };
  
  return (
    <div className="form-container">
      <h1>Form Example</h1>
      <form>
        <div  className="form-field">
          <label>Text Input:</label>
          <input 
            type="text"
            name="text"
            value={formData.text} 
            onChange={handleChange} 
          />
        </div>
        <div  className="form-field">
          <label>
            <input 
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange} 
          ></input>
          Checkbox
          </label>
        </div>
          <div  className="form-field">
          <label>Radio:</label>
          <label>
          <input 
            type="radio"
            name="radio"
            value="option1"
            checked={formData.radio === 'option1'} 
            onChange={handleChange} 
          />
          Option1
          </label>
          <label>
          <input 
            type="radio"
            name="radio"
            value="option2"
            checked={formData.radio === 'option2'} 
            onChange={handleChange} 
          />
          Option2
          </label>
        </div>
        <div  className="form-field">
          <label>Select:</label>
          <select 
            name="select" 
            value={formData.select}
            onChange={handleChange}>
            <option value="">---choose an option--</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
          </select>
        </div>
        <div className="form-data">
          <h3>Form Data:</h3>
          <p><strong>Text:</strong> {formData.text}</p>
          <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
          <p><strong>Radio:</strong> {formData.radio}</p>
          <p><strong>Select:</strong> {formData.select}</p>
        </div>
      </form>
    </div>
  )
}

export default App
