import React, { useContext } from 'react'
import {CircleContext} from "../Context/AuthContext"

const Dashboard = () => {
const {value, setValue} = useContext(CircleContext);

  return (
    <div>
        <h1>Dashboard</h1>
        <div style={{width:"500px", border: "1px solid black", margin: "auto", marginTop:"50px"}}>

         <h5>
            First Name : {value.firstName}
         </h5>
         <h5>
            Last Name : {value.lastName}
         </h5>
         <h5>
            Email : {value.email}
         </h5>
         <h5>
            Mobile Number : {value.mobileNumber}
         </h5>
         <h5>
            Date of birth : {value.dob}
         </h5>
         <h5>
            About {value.firstName}: {value.textArea}
         </h5>
            
        </div>
    </div>
  )
}

export default Dashboard;