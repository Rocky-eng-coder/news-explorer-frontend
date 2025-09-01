import React from "react";
import "./NoResults.css";

function NoResults() {
  return (
    <div className="no-results">
      <div className="no-results__icon" />
      <h3 className="no-results__title">Nothing found</h3>
      <p className="no-results__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NoResults;
