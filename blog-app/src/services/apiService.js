import axios from "axios";

//const API_BASE_URL = "http://localhost:5000";
const API_BASE_URL = "https://7coretech-xi.vercel.app/";

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
