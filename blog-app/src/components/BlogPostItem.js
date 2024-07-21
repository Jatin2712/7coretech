import React from "react";
import image from "../assets/img/alternate.png";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../assets/styles/style.css";

const BlogPostItem = ({
  title,
  description,
  publishedAt,
  urlToImage,
  url,
  content,
}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={urlToImage ? urlToImage : image}
          className="card-img-top"
          alt="news"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            {title ? title.slice(0, 30) : "Title is not given"}
          </h5>
          <p className="card-text">
            {description ? description.slice(0, 70) : "Description"}
          </p>
          <p className="text-muted">
            Published At: {new Date(publishedAt).toLocaleDateString()}
          </p>
          <div className="mt-auto d-flex justify-content-between">
            <Link
              to="/news-detail"
              state={{
                title,
                description,
                publishedAt,
                urlToImage,
                url,
                content,
              }}
              className="btn btn-primary"
            >
              Read More
            </Link>
            <a
              href={url}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Article <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostItem;
