import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({
  onSignInClick,
  onLogout,
  isLoggedIn,
  username,
  transparent,
}) {
  return (
    <header className={`header ${transparent ? "header--transparent" : ""}`}>
      <Link
        to="/"
        className={`header__logo ${
          transparent ? "header__logo--white" : "header__logo--black"
        }`}
      >
        NewsExplorer
      </Link>

      <nav className="header__nav">
        <Link
          to="/"
          className={`header-link ${
            transparent ? "header-link--white" : "header-link--black"
          }`}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            to="/saved-news"
            className={`header-link ${
              transparent ? "header-link--white" : "header-link--black"
            }`}
          >
            Saved articles
          </Link>
        )}
        {isLoggedIn ? (
          <button
            className={`header__button ${
              transparent ? "header__button--white" : "header__button--black"
            }`}
            onClick={onLogout}
          >
            <span className="header__username">{username}</span>
            <span
              className={`header__logout-icon ${
                transparent
                  ? "header__logout-icon--white"
                  : "header__logout-icon--black"
              }`}
            />
          </button>
        ) : (
          <button
            className={`header__button ${
              transparent ? "header__button--white" : "header__button--black"
            }`}
            onClick={onSignInClick}
          >
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
