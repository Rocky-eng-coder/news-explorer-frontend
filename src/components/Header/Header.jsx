import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import menuIconWhite from "../../assets/images/menuicon.svg";
import menuIconBlack from "../../assets/images/menuicon-black.svg";
import closeIcon from "../../assets/images/close-btn.svg";

function Header({
  onSignInClick,
  onLogout,
  isLoggedIn,
  username,
  transparent,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`header ${transparent ? "header_transparent" : ""}`}>
        <Link
          to="/"
          className={`header__logo ${
            transparent ? "header__logo_type_white" : "header__logo_type_black"
          }`}
        >
          NewsExplorer
        </Link>

        <button className="header__menu-icon" onClick={toggleMenu}>
          <img src={transparent ? menuIconWhite : menuIconBlack} alt="Menu" />
        </button>

        <nav className="header__nav">
          <Link
            to="/"
            className={`header__link ${
              transparent
                ? "header__link_type_white"
                : "header__link_type_black"
            }`}
          >
            Home
          </Link>
          {isLoggedIn && (
            <Link
              to="/saved-news"
              className={`header__link header__link_savedArticle ${
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

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__header">
            <span className="header__logo header__logo_type_white">
              NewsExplorer
            </span>
            <button className="mobile-menu__close" onClick={closeMenu}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
          <nav className="mobile-menu__nav">
            <Link to="/" className="mobile-menu__link" onClick={closeMenu}>
              Home
            </Link>

            {isLoggedIn && (
              <Link
                to="/saved-news"
                className="mobile-menu__link"
                onClick={closeMenu}
              >
                Saved articles
              </Link>
            )}

            {isLoggedIn ? (
              <button className="mobile-menu__button" onClick={onLogout}>
                {username}
                <span className="mobile-menu__logout-icon" />
              </button>
            ) : (
              <button className="mobile-menu__button" onClick={onSignInClick}>
                Sign in
              </button>
            )}
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
