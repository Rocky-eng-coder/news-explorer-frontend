import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(stored);
  }, []);

  return (
    <section className="saved-news">
      <h2>Saved Articles</h2>
      {savedArticles.length === 0 ? (
        <p>You haven't saved any articles yet.</p>
      ) : (
        <div className="search-results">
          {savedArticles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              isLoggedIn={true}
              onBookmark={() => {}}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SavedNews;
