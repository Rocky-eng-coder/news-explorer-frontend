import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function Main() {
  const [articles, setArticles] = useState([]);

  const fetchNews = async (query) => {
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);

    const from = lastWeek.toISOString().split("T")[0];
    const to = today.toISOString().split("T")[0];

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&from=${from}&to=${to}&sortBy=publishedAt&language=en&pageSize=30&apiKey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== "ok") {
        console.error("API error:", data);
        return;
      }

      setArticles(data.articles);
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <section className="main">
      <div className="main__layout">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <SearchForm onSearch={fetchNews} />

        <div className="search-results">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} isLoggedIn={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
