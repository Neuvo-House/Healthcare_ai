import React, { useState } from "react";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "Home", id: "home-section" },
  { label: "Report content", id: "report-section" },
  { label: "Report", id: "health-report-section" },
  { label: "Chatbox", id: "chatbox-section" },
];

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleNavClick = (item) => {
    setActive(item.label);
    setMenuActive(false);

    if (item.label === "Home") {
      console.log("Scrolling to Home");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // More robust method to find and scroll to elements
    const targetElement = document.getElementById(item.id);

    if (targetElement) {
      console.log(`Found element: ${item.id}`);

      // Use scrollIntoView for more reliable scrolling
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Add a small offset to account for the fixed navbar
      setTimeout(() => {
        const scrollY = window.scrollY;
        window.scrollTo({
          top: scrollY - 80, // Adjust this offset based on your navbar height
          behavior: "instant",
        });
      }, 500);
    } else {
      console.error(`Element not found: ${item.id}`);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left-container">
          <p>Logo</p>
        </div>
        <div className={`middle-container ${menuActive ? "active" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`navbar-content${
                active === item.label ? " active" : ""
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="right-container">
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
