import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9091/use", {
        username: email,
        password: password,
        role: "user",
      })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            navigate("/login")
          } else {
            alert("Problem in register")
          }
        })
    } catch (err) {
      console.log(err)
    }
    // Add registration logic here
  };


  return (
    <div className="register">
      <div className="register-bg" />
      <div className="register-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />


          <button type="submit">Sign Up</button>

        </form>
        <div className="login-link">
          Already have an account?<a href="/">Sign in now</a>.
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
