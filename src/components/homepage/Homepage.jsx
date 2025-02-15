import React, { useState } from "react";
import { FaSearch, FaUtensils, FaBed, FaChair, FaFootballBall, FaHotel, FaStore } from "react-icons/fa";
import "./Homepage.css";
import backgroundimg from '../Assets/background.jpg';
import Navbar from "../navbar/Navbar";

const categories = [
  { name: "Furniture", icon: <FaChair /> },
  { name: "Hotels", icon: <FaBed /> },
  { name: "Restaurants", icon: <FaUtensils /> },
  { name: "Sports", icon: <FaFootballBall /> },
  { name: "Resorts", icon: <FaHotel /> },
  { name: "StreetFood", icon: <FaUtensils /> },
  { name: "Market", icon: <FaStore /> },
  { name: "Temples", icon: <FaStore /> },
  { name: "Clubs", icon: <FaStore /> },
  { name: "PayingGuest", icon: <FaStore /> },
  { name: "Colleges", icon: <FaStore /> },
//   { name: "Colleges", icon: <FaStore /> },
  
];

const sampleData = {
  Furniture: ["Modern Sofa", "Dining Table", "Office Chair", "Cupboard", "Beds"],
  Hotels: ["Grand Palace", "City View Hotel", "Luxury Stay", "Night View Stay", "Hayatt Residency"],
  Restaurants: ["Tandoori Delights", "Pasta House", "BBQ Grill"],
  Sports: ["Football Arena", "Cricket Stadium", "Badminton Court"],
  Resorts: ["Beachside Resort", "Mountain Escape", "Forest Retreat"],
  StreetFood: ["Chaat Corner", "Momos Delight", "Juice Bar"],
  Market: ["Local Bazaar", "Night Market", "Handicraft Store"],
  Temples: ["ISCON Temple", "Pracheen Hanuman Mandir", "Ayyappa Temple"],
  Clubs: ["Club Tito's", "Illuzion Luxe Club", "LIT Ultrabar Club"],
  PayingGuest: ["Vizima", "Your PG's", "Orchid By Hive"],
  Colleges: ["Amity Univeristy", "Jaypee Universty", "Sharda University"],
};

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Furniture");

  return (
    <div>
        <Navbar/>
      {/* Hero Section */}
      <div className="hero-section"
      style={{ backgroundImage: `url(${backgroundimg})` }}>
        
        <div className="hero-text">Discover the Best of NCR</div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search categories..." className="search-bar" />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

      {/* Category Tabs */}
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`tab ${selectedCategory === cat.name ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Listings */}
      <div className="listings-grid">
        {sampleData[selectedCategory].map((item, index) => (
          <div key={index} className="listing-card">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
