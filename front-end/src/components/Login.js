import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import { handleLogin } from "../../../backend/controllers/userController";

const Login = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();


  useEffect(()=>{
const auth = localStorage.getItem('user');
if(auth)
{
  navigate("/")
}
  },)


  const loginHandle= async ()=>{
    console.warn("email, password", email, password)
    let result = await fetch('http://localhost:5000/user/login',{
      method:'post',
      body:JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    if(!result.name){
      localStorage.setItem("user",JSON.stringify(result));
      navigate('/')

    }else{
      alert("Please Enter Correct Details")
    }
    
  }

  return (
    <div className="login">
      <input type="text"
       className="inputBox"
        placeholder="Enter Email"
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
         />
      <input
        type="password"
        className="inputBox"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={loginHandle} className="appButton" type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
