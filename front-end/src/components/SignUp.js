import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

 
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

  const collectData = async () => {
    if (!name || !email || !password) {
      setErrorMessage("All fields are required."); // Set error message
      return;
    }
    setErrorMessage(""); // Clear error message if all fields are filled
    console.warn(name, email, password);

    let result = await fetch("http://localhost:5000/user/signup", {  // Corrected endpoint here
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/')
  }

  return (
    <div className="register">
      <h1>Register</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Display error message */}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={collectData} className="appButton" type="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
