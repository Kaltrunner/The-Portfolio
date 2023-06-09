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
                New Matter is a captivating hypothetical website that has been
                built using React.js and Bootstrap. Its purpose is to serve as
                an immersive platform for users to embark on an exhilarating
                journey exploring the vast mysteries of the universe. Sparking
                curiosity and deepening understanding of cosmic phenomena,
                visitors can dive into enigmatic realms like stellar evolution,
                extraterrestrial samples analysis, and the captivating dimming
                of Betelgeuse.
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
                I had a lot of fun coming up with engaging names and interesting
                facts to support the theory and allure of the website. This
                scientific yet friendly approach helped maintain its appeal.
              </h4>
            </div>
          </div>

          <div className="select-section-3">
            <div className="select-section-info-3">
              <div className="section-img-mobile">
                <img src="Frame 11.png" alt="" id="mobile-img" />
              </div>
              <div className="section-img-mobile">
                <img src="Frame 12.png" alt="" id="mobile-img" />
              </div>
              <div className="section-img-mobile">
                <img src="Frame 13.png" alt="" id="mobile-img" />
              </div>
            </div>
            <div className="projects-sub-header-div">
              <h4 className="projects-sub-header">
                I embarked on the New Matter project with the enthusiasm to
                enhance my knowledge in utilizing the Bootstrap framework for
                website development. The primary objective was to leverage
                Bootstrap's exceptional responsiveness, thereby reducing the
                dependency on extensive CSS files and creating a more
                streamlined approach to handling media queries.
                <br /> (the above 3 images showcase the mobile interface)
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
