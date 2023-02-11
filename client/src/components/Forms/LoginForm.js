import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
// import { authContext } from '../../providers/AuthProvider';


import React from "react";
import axios from 'axios';
import "./loginform.css"


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  // const { login, user } = useContext(authContext);
  let navigate = useNavigate();

  const login = function(email, password) {
    axios.post("/login", {email, password})
      .then(res => {
        console.log(res.data);
        setUser(res.data);
        navigate("/lobby")
      });
  };

  const onSubmit = function(event) {
    event.preventDefault();
    email && login(email, password);
  };

  

  return (
    <div className="Login">
      <h1>Welcome Back!</h1>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          {/* <label>Email</label> */}
          <input className="input-control" type="text" name="email" value={email} onChange={event => setEmail(event.target.value)}placeholder="Username"/>
        </div>
        <div className="form-control">
          {/* <label>Password</label> */}
          <input className="input-control" type="password" name="password" value={password} placeholder="Password"
            onChange={event => setPassword(event.target.value)}/>
        </div>
        <div className="form-control">
          <button id="login-button" type="submit">Login</button>
        </div>
        <div className="form-control">
          
          <h4>Don't have an account? <a  href="/signup">Register</a></h4>
        </div>
      </form>
    </div>
  );
}

