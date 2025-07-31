import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">NewsExplorer</h1>
        <nav className="header__nav">
          <a href="/" className="header__link">
            Home
          </a>
          <button className="header__button">Sign in</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
