import React, { useState } from "react";

const SignUp=()=> {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const collectData= async()=>{
            try {
                console.warn(name, email, password);
            const result = await fetch("http://localhost:5000/register",{
                method:'post',
                body: JSON.stringify({name, email, password}),
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
                result = await result.json();
                console.warn(result);
           
            
            } catch (error) {
                console.log("error while fetching")
            }
            
            
        }

    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
            value={name} onChange={(e)=>setName(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Email"
            value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder="Enter Password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>

        </div>
    )
}

export default SignUp;