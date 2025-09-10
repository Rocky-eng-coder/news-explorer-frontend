import "./Navigation.css";

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

export default Navigation;
