import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Featured1() {
  return (
    <>
      <div className="select-featured-body-div">
        <ul className="sub-menu-list">
          <li className="sub-menu-item" id="disabled">
            / Erik Russell
          </li>
          <Link to="/" className="nav-resume-link">
            <li className="menu-item">/ Home</li>
          </Link>
        </ul>

        <div className="projects-header-text-div">
          <h1 className="header-text">New Matter</h1>
        </div>

        <div className="line-div"></div>

        <div className="select-body-div">
          <div className="select-section">
            <div className="select-section-info">
              <img id="top-img" src="Frame 3.png" alt="" />
            </div>

            <div className="projects-sub-header-div">
              <h4 className="projects-sub-header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </h4>

              <div className="projects-sub-header-laguage">
                <div id="laguage-types">React.js</div>
                <div id="laguage-types">JavaScript</div>
                <div id="laguage-types">Bootstrap</div>
                <div id="laguage-types">CSS</div>
              </div>
            </div>
          </div>

          <div className="select-section-2">
            <div className="select-section-info-2">
              <img src="Frame 15.png" alt="" id="mid-img" />
            </div>

            <div className="select-section-info-2">
              <img src="Frame 8.png" alt="" id="mid-img" />
            </div>

            <div className="projects-sub-header-div">
              <h4 className="projects-sub-header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h4>
            </div>
          </div>

          <div className="select-section-3">
            <div className="select-section-info-3">
              <div className="section-img">
                <img src="Frame 11.png" alt="" id="mobile-img" />
              </div>
              <div className="section-img">
                <img src="Frame 12.png" alt="" id="mobile-img" />
              </div>
              <div className="section-img">
                <img src="Frame 13.png" alt="" id="mobile-img" />
              </div>
            </div>
            <div className="projects-sub-header-div">
              <h4 className="projects-sub-header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h4>
            </div>
            <a
              id="featured-link"
              href="https://new-matter.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h6 className="featured-link-text">View Website</h6>
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Featured1;
