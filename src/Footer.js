import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-body-div">
      {/* <div className="coordinates-div">
        <p className="coordinates">
        • 40.7305° N, 73.9515° W
        </p>
      </div> */}
      <div className="footer-link-list">
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

        
      </div>

      <div id="email-tag">
        <p className="footer-text">
          <a
            className="tag"
            href="mailto:erikrussells@gmail.com?subject=Hello!"
          >
            erikrussells@gmail.com
          </a>
        </p>
        <p className="footer-copy-right">© 2023 Erik Russell</p>
      </div>
    </div>
  );
}

export default Footer;
