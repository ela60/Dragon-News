import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log("News Data:", news);

  const { title, details, image_url, author, total_view, rating } = news;

  const stars = Math.round(rating?.number || 0); // Round rating to nearest integer
  const maxStars = 5; // Maximum number of stars

  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <img
        src={image_url}
        alt={title}
        className="w-full object-cover rounded-lg mb-4"
          />
          

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-600 text-sm mb-4">{details.slice(0, 150)}...{" "}
                  <Link to={`/news/${news._id}`}
                      className="text-primary">
                      Read More
                  </Link>
              </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>By: {author?.name || "Unknown"}</span>
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>{total_view || 0}</span>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Rating: {rating?.number || "N/A"} ({rating?.badge || "No Badge"})
          </span>
          <div className="flex space-x-1">
            {Array(maxStars)
              .fill(0)
              .map((_, index) => (
                <span
                  key={index}
                  className={`${
                    index < stars ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
