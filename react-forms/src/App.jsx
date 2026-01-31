import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'
/*
function App() {
  const [formData, setFormData] = useState(
    {name: "", email: ""}
  );
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
    setErrors(validationErrors); 
    console.log("Form data submitted:", formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" 
                 name="name"  
                 value={formData.name} 
                 onChange={handleChange}>
          </input>
          {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type="email" 
                 name="email"  
                 value={formData.email} 
                 onChange={handleChange}>
          </input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}*/

function App(){
  const {register, handleSubmit, watch, reset, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    reset();
  };
  // console.log(watch("name"));
  // console.log(watch("email"));

  const watchedName = watch("name");
  const watchedEmail = watch("email");

  useEffect(() => {
    console.log("Name changed:", watchedName);
  },[watchedName]);
   useEffect(() => {
    console.log("Email changed:", watchedEmail);
  },[watchedEmail]);

  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input{...register("name", {required: true})} className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
        </label>
        {errors.name && <span style={{color: 'red'}}>Name is required</span>}
        <label>
          Email:
          <input{...register("email", {required: true})} className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          {errors.email && <span style={{color: 'red'}}>Email is required</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>{watchedName}</h2>
      <h1 className="text-3xl font-bold underline">HelloTailwind</h1>
    </div>
  )
}
export default App
