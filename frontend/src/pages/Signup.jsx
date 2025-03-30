import React from 'react'
import SignupForm from '../components/SignupForm'
import '../styles/Signup.css';
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign up</h2>
        <p className="signup-description">Create an account to get started</p>
        
        <SignupForm />
        
        <button className="google-button">Sign up with Google</button>
        
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup