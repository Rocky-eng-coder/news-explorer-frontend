import "./Navigation.css";
import PropTypes from "prop-types";

function Navigation({ onSignInClick, theme = "black" }) {
  return (
    <nav className="navigation">
      <a
        href="/"
        className={`navigation__link navigation__link_theme_${theme}`}
      >
        Home
      </a>
      <button
        className={`navigation__button navigation__button_theme_${theme}`}
        onClick={onSignInClick}
      >
        Sign in
      </button>
    </nav>
  );
}
Navigation.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

export default Navigation;
