import React, { useState } from "react";
import { loginUser } from "../services/LoginApi";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"


const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await loginUser(email, password)
      localStorage.setItem("token", data.token)
      navigate("/dashboard")
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">Email</label>
        <input
          type="email"
          className="login-input"
          placeholder="m@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="login-label">Password</label>
        <input
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
