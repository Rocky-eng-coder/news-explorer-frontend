import React, { useState, useEffect } from "react";
import "./NewsCard.css";

function NewsCard({
  article,
  isLoggedIn,
  isSavedView = false,
  onDelete,
  onSave,
}) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
    const isAlreadySaved = saved.some((a) => a.url === article.url);
    setIsSaved(isAlreadySaved);
  }, [article.url]);

  const saveArticle = () => {
    if (!isLoggedIn) {
      alert("Please log in to save articles.");
      return;
    }

    if (onSave) {
      onSave(article);
      setIsSaved(true);
      alert("Article saved!");
    }
  };

  return (
    <div className="news-card__image-container">
      <img
        className="news-card__image"
        src={
          article.urlToImage ||
          "https://via.placeholder.com/400x200?text=No+Image"
        }
        alt={article.title}
      />
      {isSavedView ? (
        <button
          className="news-card__button news-card__button_delete"
          onClick={onDelete}
          aria-label="Delete article"
        />
      ) : (
        <button
          className={`news-card__button ${
            isSaved ? "news-card__button_marked" : ""
          }`}
          onClick={saveArticle}
          aria-label="Save article"
        />
      )}
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
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
