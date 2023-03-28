import { Link } from "react-router-dom";
import Clock from "./Clock";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("navbar").style.top = "-150px";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
}

function Nav() {
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

          {/* <Link to="/Resume" className="nav-resume-link"> */}
            <a className="nav-resume-link" href="Erik Russell - Resume (Revised).pdf" download="Erik Russell-Resume" ><li id="resume-li" className="menu-item"> Resume</li></a>
            {/* <span><img id="resume-arrow" src="https://static.thenounproject.com/png/9709-200.png" alt="" /></span> */}
          {/* </Link> */}

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

          {/* <li className="menu-item"> <a className="nav-linkedin" id="menu-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erik-russell-software-engineer/">Contact</a></li> */}

          {/* <li className="menu-item"><a id="menu-link" target="_blank" rel="noreferrer" href="https://medium.com/@erikrussells">Blog /</a></li> */}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
