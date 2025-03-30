import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <div className='left-side'>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className='right-side'>
        <ThemeToggle />
        <Link to="/login"><button className='login-btn'>Login</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
