import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function SignUpForm() {
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMsg("User registration is successful.");
    axios.post('/signup', data)
    .then(r => {
        console.log(r)
      })
    reset();
  };

  return (
    <div className="Register">
      <h1>Get started!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {successMsg && <p className="success-msg">{successMsg}</p>}
        <div className="form-control">
          {/* <label>Username</label> */}
          <input
          className="input-control"
          placeholder="Username"
            type="text"
            {...register("username", {
              required: "Username is required."
            })}
          />
          {errors.username && (
            <p className="errorMsg">{errors.username.message}</p>
          )}
        </div>
        <div className="form-control">
          {/* <label>Email</label> */}
          <input
          className="input-control"
          placeholder="Email"
            type="text"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          {/* <label>Password</label> */}
          <input
          className="input-control"
          placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  )
              }
            })}
          />
          {errors.password?.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="errorMsg">
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button id="login-button" type="submit">Create an account</button>
        </div>
        <div className="form-control">
          
          <h4>Already have an account? <a  href="/login">Sign in</a></h4>
        </div>
      </form>
    </div>
  );
}
