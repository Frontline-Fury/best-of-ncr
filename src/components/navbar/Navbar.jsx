import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Best of NCR</div>

      <ul className={isMobile ? "nav-links mobile-menu" : "nav-links"}>
        <li><a href="sd">Home</a></li>
        <li><a href="sde">Categories</a></li>
        <li><a href="sdf">Top Listings</a></li>
        <li><a href="ff">Contact</a></li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
