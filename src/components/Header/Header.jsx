import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ onSignInClick, onLogout, isLoggedIn, username }) {
  return (
    <header className="header">
      <Link to="/" className=" header__logo">
        NewsExplorer
      </Link>

      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        {isLoggedIn && (
          <Link to="/saved-news" className="nav-link">
            Saved articles
          </Link>
        )}

        {isLoggedIn && <span className="header__welcome">{username}</span>}
        {isLoggedIn ? (
          <button className="navigation__button" onClick={onLogout}>
            Log Out
          </button>
        ) : (
          <button className="navigation__button" onClick={onSignInClick}>
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
