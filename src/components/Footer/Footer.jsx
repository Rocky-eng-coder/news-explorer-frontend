import "./Footer.css";
import githubIcon from "../../assets/images/github.svg";
import facebookIcon from "../../assets/images/facebookicon.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; News Explorer, Powered by News API
      </p>
      <nav className="footer__nav">
        <a href="/" className="footer__link">
          Home
        </a>
        <a
          href="https://tripleten.com"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          TripleTen
        </a>
      </nav>
      <div className="footer__social">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="footer__icon" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className="footer__icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
