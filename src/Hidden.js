import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Hidden() {
  return (
    <>
      <div className="hidden-body-div">
      <ul className="sub-menu-list">
          <li className="sub-menu-item" id="disabled">
            / Erik Russell
          </li>
          <Link to="/" className="nav-resume-link">
            <li className="menu-item">/ Home</li>
          </Link>
        </ul>

        <div className="projects-header-text-div">
          <h1 className="header-text">Secret Page!!!</h1>
        </div>

        <div className="line-div"></div>

      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Hidden;
