import { Link } from "react-router-dom";
import Clock from "./Clock";
import React, { useEffect } from "react";

function Nav() {
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop > 125 ||
      document.documentElement.scrollTop > 125
    ) {
      navbar.style.top = "-175px";
    } else {
      navbar.style.top = "0";
    }
  }

  return (
    <div className="nav-body-div" id="navbar">
      <div className="clock-div">
        <Clock />
      </div>

      <div className="nav-menu-div">
        <ul className="menu-list">
          <Link to="/Projects" className="nav-resume-link">
            <li className="menu-item">All Projects</li>
          </Link>

          <a
            className="nav-resume-link"
            href="Erik Russell - resume.pdf"
            download="Erik Russell - Resume"
          >
            <li id="resume-li" className="menu-item">
              {" "}
              Resume
            </li>
          </a>

          <li className="menu-item">
            <a
              id="menu-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kaltrunner"
            >
              GitHub
            </a>
          </li>

          <li className="menu-item">
            {" "}
            <a
              className="nav-linkedin"
              id="menu-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/erik-russell-software-engineer/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
