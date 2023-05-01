import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-body-div">
      <div className="footer-link-list">
        <ul>
          <Link className="projects-link" to="/Projects">
            <p className="footer-text-tag">All Projects</p>
          </Link>

          <p className="footer-text">
            <a
              className="tag"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kaltrunner"
            >
              GitHub
            </a>
          </p>

          <p className="footer-text">
            <a
              className="tag"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/erik-russell-software-engineer/"
            >
              LinkedIn
            </a>
          </p>

          <p className="footer-logo">© 2023 Erik Russell</p>
        </ul>
      </div>

      <div id="email-tag">
        <ul>
          <p className="footer-text">
            <a
              className="tag"
              href="mailto:erikrussells@gmail.com?subject=Hello!"
            >
              erikrussells@gmail.com
            </a>
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
