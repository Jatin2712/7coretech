/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/Navbar.css";
import {
  FaHome,
  FaLaptop,
  FaHeartbeat,
  FaBriefcase,
  FaFootballBall,
  FaFlask,
} from "react-icons/fa";

const Navbar = ({ setCategory, activeCategory, setActiveCategory }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set the active category based on the current route
    if (location.pathname === "/") {
      const storedCategory = sessionStorage.getItem("activeCategory") || "home";
      setActiveCategory(storedCategory);
    } else {
      setActiveCategory(""); // Clear activeCategory if not on home page
    }
  }, [location.pathname, setActiveCategory]);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
    sessionStorage.setItem("activeCategory", category); // Store the active category in session storage
    navigate("/"); // Navigate to home
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          <span className="badge bg-light text-dark fs-4">NewsApp</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "home" ? "active" : ""
                } cursor-pointer`}
                aria-current="page"
                onClick={() => handleCategoryClick("home")}
              >
                <FaHome className="me-1" /> Home
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "technology" ? "active" : ""
                } cursor-pointer`}
                onClick={() => handleCategoryClick("technology")}
              >
                <FaLaptop className="me-1" /> Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "health" ? "active" : ""
                } cursor-pointer`}
                onClick={() => handleCategoryClick("health")}
              >
                <FaHeartbeat className="me-1" /> Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "business" ? "active" : ""
                } cursor-pointer`}
                onClick={() => handleCategoryClick("business")}
              >
                <FaBriefcase className="me-1" /> Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "sports" ? "active" : ""
                } cursor-pointer`}
                onClick={() => handleCategoryClick("sports")}
              >
                <FaFootballBall className="me-1" /> Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "science" ? "active" : ""
                } cursor-pointer`}
                onClick={() => handleCategoryClick("science")}
              >
                <FaFlask className="me-1" /> Science
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
