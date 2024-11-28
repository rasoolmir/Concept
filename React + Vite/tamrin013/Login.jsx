import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const staticUsername = "rasool@gmail.com";
    const staticPassword = "1234";

    if (data.email === staticUsername && data.password === staticPassword) {
      navigate("/UserTable");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
        <div className="form-fild">
          <label className="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-fild">
          <label className="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
