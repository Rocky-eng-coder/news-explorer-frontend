import "./Footer.css";
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/LinkedInIcon.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; News Explorer, Powered by News API
      </p>
      <div className="footer__right">
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
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHubIcon" className="footer__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/racquel-bryant-b27209325/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedinIcon"
              className="footer__icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
