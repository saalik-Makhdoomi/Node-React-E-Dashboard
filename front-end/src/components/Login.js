import React from "react";
import "./Login.css";
// import { handleLogin } from "../../../backend/controllers/userController";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const loginHandle= async ()=>{
    console.warn("email, password", email, password)
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
