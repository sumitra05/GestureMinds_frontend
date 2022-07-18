import React, { useState,useContext } from 'react'
import {CircleContext} from "../Context/AuthContext"
import { Link } from "react-router-dom";
import "./Register.css"

const Register = () => {
    
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const {value, setValue} = useContext(CircleContext);
    const handleChange = (e) =>{
        setValue({...value, [e.target.name] : e.target.value})
    }
    // console.log(value)

   const handleSubmit = (e) =>{
       e.preventDefault();
       if(value.firstName && value.lastName && value.email && value.mobileNumber && value.dob && value.password && value.textArea){
           setValid(true);
           
       }
       setSubmitted(true);
    //    window.location = "Login.jsx"
   }
   
return (
    <div class="form-container">
      <form class="register-form"  onSubmit={handleSubmit}>
        {submitted && valid ?  <div class="success-message">Success! Thank you for registering</div> : null}
        <input
          onChange={handleChange}
          value={value.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
       {submitted && !value.firstName ? <span>Please enter first name</span> : null}
        <input
          onChange={handleChange}
          value={value.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !value.lastName ? <span>Please enter last name</span> : null}
        <input
          onChange={handleChange}
          value={value.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !value.email ? <span>Please enter an email address</span>: null}
        <input
          onChange={handleChange}
          value={value.mobileNumber}
          id="mobileNumber"
          class="form-field"
          type="text"
          placeholder="Mobile Number"
          name="mobileNumber"
        />
        {submitted && !value.mobileNumber ? <span>Please enter Mobile Number</span>: null}
        <input
          onChange={handleChange}
          value={value.dob}
          id="dob"
          class="form-field"
          type="dob"
          placeholder="date of birth"
          name="dob"
        />
        {submitted && !value.dob ? <span>Please enter date of birth</span>: null}
        <input
          onChange={handleChange}
          value={value.password}
          id="password"
          class="form-field"
          type="password"
          placeholder="password"
          name="password"
        />
        {submitted && !value.password ? <span>Please enter Password</span>: null}
        <textarea
            onChange={handleChange}
            value={value.textArea}
            id="textArea"
            class="form-field"
            type="textArea"
            placeholder="About me...."
            name="textArea">
          </textarea>
        {submitted && !value.textArea ? <span>Please enter About yourself</span>: null}

       <Link to="/login">
        <button class="form-field" type="submit" >
            Register
        </button>
       </Link> 
      </form>
    </div>
  )
}

export default Register;