import React from "react";

const NewsCard = ({ news }) => {
  console.log("News Data:", news);

  const { title, details, image_url, author, total_view, rating } = news;

  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <img
        src={image_url}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{details.slice(0, 150)}...</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>By: {author?.name || "Unknown"}</span>
          <span>Views: {total_view || 0}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Rating: {rating?.number || "N/A"} ({rating?.badge || "No Badge"})
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
