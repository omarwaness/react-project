import React from 'react';
import '../styles/Login.css';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import "../styles/Login.css"

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <p className="login-description">Enter your email and password to login to your account</p>

        <LoginForm/>

        <button className="google-button">Login with Google</button>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
