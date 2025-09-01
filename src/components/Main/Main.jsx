import React, { useState } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";

function Main({ onSearch }) {
  return (
    <section className="main">
      <div className="main__layout">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <SearchForm onSearch={onSearch} />
      </div>
    </section>
  );
}

export default Main;
