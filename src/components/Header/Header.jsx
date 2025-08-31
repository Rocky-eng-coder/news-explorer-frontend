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

      <nav>
        <Link
          to="/"
          className={`nav-link ${
            transparent ? "nav-link--white" : "nav-link--black"
          }`}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            to="/saved-news"
            className={`nav-link ${
              transparent ? "nav-link--white" : "nav-link--black"
            }`}
          >
            Saved articles
          </Link>
        )}
        {isLoggedIn ? (
          <button
            className={`header__user-button ${
              transparent
                ? "header__user-button--white"
                : "header__user-button--black"
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
            className={`navigation__button ${
              transparent
                ? "navigation__button--white"
                : "navigation__button--black"
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
