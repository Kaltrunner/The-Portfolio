import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Featured2() {
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
          <h1 className="header-text">Nútímasafn</h1>
        </div>

        <div className="select-body-div">
          <div className="select-section">
            <div className="select-section-info" >
            </div>
            <h4 className="projects-sub-header" >Info...</h4>
          </div>

          <div className="select-section">
          <div className="select-section-info" >
            </div>
            <h4 className="projects-sub-header" >Info...</h4>
          </div>

          <div className="select-section">
          <div className="select-section-info" >
                <div className="section-img" ></div>
                <div className="section-img" ></div>
                <div className="section-img" ></div>
            </div>
            <h4 className="projects-sub-header" >Info...</h4>
          </div>

          <div className="img-gallary-div" >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
          </div>

        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Featured2;
