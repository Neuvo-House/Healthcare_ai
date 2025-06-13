import React from "react";
import "./Navbar.css";
function Home() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left-container">
          <p>Logo</p>
        </div>
        <div className="middle-container">
          <div className="navbar-content">Home</div>
          <div className="navbar-content">About us</div>
          <div className="navbar-content">Pricing</div>
          <div className="navbar-content">Healthcare</div>
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  );
}

export default Home;
