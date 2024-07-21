import axios from "axios";

// Base URL for the API
const API_BASE_URL = "https://7coretech-5cop.vercel.app";

// Function to fetch posts from the API
export const fetchPosts = async (page, pageSize, category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts`, {
      params: { page, pageSize, query: category },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
