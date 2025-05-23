import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="top-row">
          <div className="small-box"></div>
          <div className="small-box"><h1 className='title'>HOME</h1></div>
          <div className="small-box"></div>
        </div>
        <div className="large-box"></div>
      </div>
    </div>
  );
}

export default Home;
