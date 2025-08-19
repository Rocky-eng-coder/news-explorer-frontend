import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ isLoggedIn, username }) {
  const [savedArticles, setSavedArticles] = useState([]);
  const [userName] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(stored);
  }, []);

  const getKeywords = () => {
    const keywords = savedArticles.map((a) => a.keyword);
    const unique = [...new Set(keywords)];
    const display = unique.slice(0, 1).join(", ");
    const more = unique.length > 2 ? `, and ${unique.length - 2} other` : "";
    return `${display}${more}`;
  };

  return (
    <section className="saved-news">
      <div className="saved-news__header">
        <p className="saved-news__info">Saved articles</p>
        <h2 className="saved-news__title">
          {userName}, you have {savedArticles.length} saved article
          {savedArticles.length !== 1 ? "s" : ""}
        </h2>
        <p className="saved-news__keywords">
          By keywords: <strong>{getKeywords()}</strong>
        </p>
      </div>

      {savedArticles.length === 0 ? (
        <p className="saved-news__empty">You haven't saved any articles yet.</p>
      ) : (
        <div className="saved-news__cards">
          {savedArticles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              isLoggedIn={isLoggedIn}
              onBookmark={() => {}}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SavedNews;
