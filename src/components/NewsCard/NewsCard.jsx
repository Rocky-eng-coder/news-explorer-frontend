import React from "react";
import "./NewsCard.css";

function NewsCard({ article, isLoggedIn }) {
  const saveArticle = () => {
    if (!isLoggedIn) {
      alert("Please log in to save articles.");
      return;
    }

    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
    const isDuplicate = saved.some((a) => a.url === article.url);

    if (!isDuplicate) {
      saved.push(article);
      localStorage.setItem("savedArticles", JSON.stringify(saved));
      alert("Article saved!");
    } else {
      alert("Article saved.");
    }
  };

  return (
    <div className="news-card">
      <img
        className="news-card__image"
        src={
          article.urlToImage ||
          "https://via.placeholder.com/400x200?text=No+Image"
        }
        alt={article.title}
      />
      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">
          {article.description || "No description available."}
        </p>
        <div className="news-card__footer">
          <span className="news-card__source">{article.source.name}</span>
          <button className="news-card__button" onClick={saveArticle}></button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
