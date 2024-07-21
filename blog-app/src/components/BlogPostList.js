/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BlogPostItem from "./BlogPostItem";
import { fetchPosts } from "../services/apiService";
import "../assets/styles/style.css";
import "../assets/styles/style.css";
import "../assets/styles/BlogPostList.css";

const BlogPostList = ({ category }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const fetchArticles = async () => {
    try {
      const response = await fetchPosts(currentPage, articlesPerPage, category);
      setData(response.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    fetchArticles();
  }, [category, currentPage]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Top News</h1>
      <div className="row">
        {data.length > 0 ? (
          data.map((news, index) => (
            <BlogPostItem
              key={index}
              title={news.title}
              description={news.description}
              publishedAt={news.publishedAt}
              urlToImage={news.urlToImage}
              url={news.url}
              content={news.content}
              category={category} // Pass the category here
            />
          ))
        ) : (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <div className="pagination-controls mt-4 text-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="btn btn-secondary m-2"
        >
          Previous
        </button>
        <button onClick={handleNextPage} className="btn btn-secondary m-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPostList;
