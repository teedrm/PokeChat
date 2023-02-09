import React from "react";
import { useForm } from "react-hook-form";
import "./loginform.css"


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="Login">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          {/* <label>Email</label> */}
          <input type="text" name="email" {...register("email")} placeholder="Email"/>
        </div>
        <div className="form-control">
          {/* <label>Password</label> */}
          <input type="password" name="password" {...register("password")} placeholder="Password" />
        </div>
        <div className="form-control">
          <label></label>
          <button id="login-button" type="submit">Login</button>
        </div>
        <div className="form-control">
          
          <h4>Don't have an account? <a  href="/signup">Register</a></h4>
        </div>
      </form>
    </div>
  );
}

