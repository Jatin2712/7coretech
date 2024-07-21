/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import image from "../assets/img/alternate.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import "../assets/styles/style.css";
import "../assets/styles/BlogPostDetails.css";

const BlogPostDetails = ({ setActiveCategory }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, publishedAt, urlToImage, url, content } =
    location.state || {};

  useEffect(() => {
    // Set activeCategory to 'home' when coming back from details page
    setActiveCategory(sessionStorage.getItem("activeCategory") || "home");
  }, [setActiveCategory]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card mb-4">
            <img
              src={urlToImage ? urlToImage : image}
              className="card-img-top"
              alt="news"
            />
            <div className="card-body">
              <h1 className="card-title">{title}</h1>
              <p className="text-muted">
                Published At: {new Date(publishedAt).toLocaleDateString()}
              </p>
              <p className="card-text">{description}</p>
              <p className="card-text">{content}</p>
              <div className="d-flex justify-content-between mt-4">
                <Link to="/" className="btn btn-primary">
                  <FaArrowLeft className="me-1" /> Back
                </Link>
                <a
                  href={url}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Article Website <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetails;
