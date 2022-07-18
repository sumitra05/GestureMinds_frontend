import React, { useContext } from 'react'
import "./Register.css"
import { useNavigate } from "react-router-dom";
import {CircleContext} from "../Context/AuthContext"

const Login = () => {
    const [formDetails, setFormDetails] = React.useState({
        email: "",
        password: ""
    });

    const  [valid, setValid] = React.useState(false)

    const {value, setValue} = useContext(CircleContext);
    const navigate = useNavigate();
      
    const handleChange = (e) => {
    const { name, value } = e.target;
      
        setFormDetails({
         ...formDetails,
         [name]: value,
        });
    };
    // console.log(formDetails)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formDetails.email == value.email && formDetails.password == value.password){
            navigate("/dashboard")
        }
        else{
            alert("Please provide correct credentials");
        }
    }

    const { email, password } = formDetails;

  return (
    <div class="form-container">
        <form class="register-form" onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <input
                type="text"
                class="form-field"
                placeholder="Email"
                value={email}
                name = "email"
                onChange={handleChange}
                required
                />

            <input
                type="password"
                class="form-field"
                placeholder="password"
                value={password}
                name = "password"
                onChange={handleChange}
                required
                />
            
               <button class="form-field" type='submit'>Log in</button>
        
        </form>
    </div>
  )
}

export default Login;