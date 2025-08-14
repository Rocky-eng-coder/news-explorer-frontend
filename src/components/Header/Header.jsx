import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <Link to="/" className=" header__logo">
        NewsExplorer
      </Link>

      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/saved-news" className="nav-link">
          Saved articles
        </Link>
        <button className="navigation__button" onClick={onSignInClick}>
          Sign In
        </button>
      </nav>
    </header>
  );
}

export default Header;
