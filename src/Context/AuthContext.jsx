import React, { useState } from "react";
import { createContext } from "react";

export const CircleContext = createContext();

function CircleContextProvider({children}) {
    const [value, setValue] = useState({
        firstName : "",
        lastName : "",
        email : "",
        mobileNumber : "",
        dob : "",
        password: "",
        textArea : "",

    })

    return (
    <CircleContext.Provider value={{value,setValue}}>
        {children} 
    </CircleContext.Provider>
  )
}

export default CircleContextProvider;