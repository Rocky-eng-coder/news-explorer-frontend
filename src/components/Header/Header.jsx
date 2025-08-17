import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LogoutIcon from "../../assets/images/usernameLogout.svg";

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

        {isLoggedIn ? (
          <button className="header__user-button" onClick={onLogout}>
            <span className="header__username">{username}</span>
            <span className="header__logout-icon" />
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
