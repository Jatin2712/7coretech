import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogPostList from "./components/BlogPostList";
import BlogPostDetails from "./components/BlogPostDetails";

const App = () => {
  const [category, setCategory] = useState("all");
  const [activeCategory, setActiveCategory] = useState("home");

  useEffect(() => {
    // Initialize activeCategory from session storage
    const storedCategory = sessionStorage.getItem("activeCategory") || "home";
    setActiveCategory(storedCategory);
  }, []);

  return (
    <Router>
      <Navbar
        setCategory={setCategory}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Routes>
        <Route path="/" element={<BlogPostList category={category} />} />
        <Route
          path="/news-detail"
          element={<BlogPostDetails setActiveCategory={setActiveCategory} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
