import React, { useState } from "react";
import { signupUser } from "../services/SignupApi"; 
import { useNavigate } from "react-router-dom";



function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await signupUser(name, email, password);
      alert(data.message)
      navigate("/dashboard") 
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">Name</label>
        <input
          type="text"
          className="signup-input"
          placeholder="MarMar"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="signup-label">Email</label>
        <input
          type="email"
          className="signup-input"
          placeholder="m@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="signup-label">Password</label>
        <input
          type="password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
