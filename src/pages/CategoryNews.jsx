import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://openapi.programming-hero.com/api/news/category/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        const data = await response.json();
        setNews(data.data || []);
      } catch (err) {
        console.error("Error fetching news:", err.message);
        setError(err.message);
      }
    };

    fetchNews();
  }, [id]);

  console.log("News:", news);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      {news.length ? (
        <>
          <p className="text-gray-400 text-sm">{news.length} News found</p>
          <div>
            {news.map((singleNews) => (
              <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
            ))}
          </div>
        </>
      ) : (
        <p className="text-gray-500">No news found.</p>
      )}
    </div>
  );
};

export default CategoryNews;
