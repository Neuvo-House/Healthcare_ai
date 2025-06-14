import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./fotter.css";

function Fotter() {
  return (
    <div className="main-container">
      <footer className="footer-wrapper">
        <div className="footer-inner">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Socials</h4>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;