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
    <header className={`header ${transparent ? "header_transparent" : ""}`}>
      <Link
        to="/"
        className={`header__logo ${
          transparent ? "header__logo_type_white" : "header__logo_type_black"
        }`}
      >
        NewsExplorer
      </Link>

      <nav className="header__nav">
        <Link
          to="/"
          className={`header__link ${
            transparent ? "header__link_type_white" : "header__link_type_black"
          }`}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            to="/saved-news"
            className={`header__link ${
              transparent
                ? "header__link_type_white"
                : "header__link_type_black"
            }`}
          >
            Saved articles
          </Link>
        )}
        {isLoggedIn ? (
          <button
            className={`header__button ${
              transparent
                ? "header__button_theme_white"
                : "header__button_theme_black"
            }`}
            onClick={onLogout}
          >
            <span className="header__username">{username}</span>
            <span
              className={`header__logout-icon ${
                transparent
                  ? "header__logout-icon_theme_white"
                  : "header__logout-icon_theme_black"
              }`}
            />
          </button>
        ) : (
          <button
            className={`header__button ${
              transparent
                ? "header__button_theme_white"
                : "header__button_theme_black"
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
