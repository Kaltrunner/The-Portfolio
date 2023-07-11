import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Featured2() {
  return (
    <>
      <Link to="/Hidden" className="hidden-link">
        <button className="hidden-btn">shhh</button>
      </Link>
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

        <div className="line-div"></div>

        <div className="select-body-div">
          <div className="select-section">
            <div className="select-section-info">
              <img src="top-img.png" alt="" id="top-img" />
            </div>
            <div className="projects-sub-header-div">
              <h4 className="projects-sub-header">
                {" "}
                Nútímasafn, which translates to "Modern Museum" in Icelandic,
                was an exciting adventure for me as I delved into a large-scale
                frontend-only project. I focused 100% on perfecting the user
                interface and experience. My ultimate goal was to ensure that
                visitors could easily navigate, find clickable elements, and
                enjoy a seamless and immersive experience akin to exploring a
                real museum's website. To bring this vision to life, I utilized
                React, a powerful framework, along with JavaScript functions,
                while adding a touch of artistic finesse with pure CSS.
              </h4>

              <div className="projects-sub-header-laguage">
                <div id="laguage-types">React.js</div>
                <div id="laguage-types">JavaScript</div>
                <div id="laguage-types">CSS</div>
              </div>
            </div>
          </div>

          <div className="select-section-2">
            <div className="select-section-info-2">
              <img src="Events.png" alt="" id="mid-img" />
            </div>

            <div className="projects-sub-header-div">
              <h4 className="projects-sub-header">
                Using CSS's Grid properties, I built individual cards to display
                event information on the "Events" page. I also incorporated
                photos from Unsplash.com, resulting in a visually appealing and
                user-friendly presentation.
              </h4>
            </div>
          </div>

          <div className="select-section-3">
            <div className="select-section-2">
              <div className="section-img">
                <img src="Membership.png" alt="" id="mid-img" />
              </div>
            </div>
            <div className="select-section-2">
              <div className="section-img">
                <img src="Donation.png" alt="" id="mid-img" />
              </div>
            </div>

            <div className="projects-sub-header-div">
              <h4 className="projects-sub-header">
                Drawing inspiration from real museum websites, I crafting pages
                such as the Membership and Make a donation. My aim was to design
                these pages with a clean and intuitive interface, ensuring
                visitors could seamlessly navigate and explore the offerings. By
                combining aesthetics and user-friendly elements, I strived to
                create an engaging and enriching experience for users engaging
                with these pages.
              </h4>
            </div>
            <a
              id="featured-link"
              href="https://nutimasafn.onrender.com/"
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

export default Featured2;
