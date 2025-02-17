const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 5000;
const NEWS_API_KEY = "ce7ca2f81fe948dba52fa0b1ed4a9e0a";

const corsOptions = {
  origin: "https://7coretech-eight.vercel.app",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

// Function to fetch data from NewsAPI
const fetchNewsData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data from NewsAPI",
      error.message,
      error.response ? error.response.data : ""
    );
    throw error;
  }
};

app.get("/api/health", (req, res) => {
  res.send("API is up and running!");
});

// API endpoint to get posts
app.get("/api/posts", async (req, res) => {
  const { page = 1, pageSize = 10, query, sortBy, source } = req.query;
  let url = `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;

  if (query) url += `&q=${query}`;
  if (sortBy) url += `&sortBy=${sortBy}`;
  if (source) url += `&sources=${source}`;

  console.log(`Fetching data from URL: ${url}`);

  try {
    const data = await fetchNewsData(url);
    res.json(data);
  } catch (error) {
    console.error("Error in /api/posts:", error.message);
    res.status(500).json({ error: "Error fetching data from NewsAPI" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
