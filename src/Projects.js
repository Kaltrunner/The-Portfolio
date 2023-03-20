import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
// import {
//   Animator,
//   ScrollContainer,
//   ScrollPage,
//   batch,
//   Fade,
//   FadeIn,
//   FadeOut,
//   Move,
//   MoveIn,
//   MoveOut,
//   Sticky,
//   StickyIn,
//   StickyOut,
//   Zoom,
//   ZoomIn,
//   ZoomOut,
// } from "react-scroll-motion";

function Projects() {
  // const location = useLocation();
  // console.log(location);

//   const moveinleft = batch(Sticky(35, 60), FadeOut(0, -900));

  return (
    <>
      <div className="projects-body-div">
        <ul className="sub-menu-list">
          <li className="sub-menu-item" id="disabled">
            / Erik Russell
          </li>
          <Link to="/" className="nav-resume-link">
            <li className="menu-item">/ Home</li>
          </Link>
        </ul>

        <div className="projects-header-text-div">
          <h1 className="header-text">Projects</h1>
          <h4 className="projects-sub-header" >2022 - present</h4>
        </div>

        <div className="line-div"></div>

        <div className="projects-container">
        
          <div className="horizontalScroll">
            
            <div class="external">
      
              <div className="horizontal-scroll-wrapper">

            {/* <div class="img-wrapper faster" id="invisible-img">
                  <img className="projects-image" src="rudy.png" alt="" />
                </div> */}


                <div className="img-wrapper">
                <a href="https://www.erikmrussell.com/" target="_blank" rel="noreferrer">
                    <img
                      className="projects-image"
                      src="Snake pit.png"
                      alt="snake pit game"
                    />
                    <p className="projects-image-text">Snake Pit</p>
                  </a>
                </div>

                {/* <div class="img-wrapper faster" id="invisible-img">
                  <img className="projects-image" src="rudy.png" alt="" />
                </div> */}

                <div class="img-wrapper">
                <a
                    href="https://kaltrunner.github.io/agreensquare.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="projects-image"
                      src="greensquare.png"
                      alt="green square project"
                    />
                    <p className="projects-image-text">
                      A GREEN SQUARE PROJECT
                    </p>
                  </a>
                </div>

                {/* <div class="img-wrapper slower slower-down" id="invisible-img">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg" alt=""/>
                </div> */}

                <div class="img-wrapper">
                <a href="https://optical-lie.onrender.com/" target="_blank" rel="noreferrer">
                    <img
                      className="projects-image"
                      src="optical-lie.png"
                      alt="optical lie"
                    />
                    <p className="projects-image-text">optical lie</p>
                  </a>
                </div>

                {/* <div class="img-wrapper slower" id="invisible-img">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg"
                      alt=""
                    />
                </div> */}

                <div class="img-wrapper">
                <a href="https://www.erikmrussell.com/" target="_blank" rel="noreferrer">
                    <img
                      className="projects-image"
                      src="rudy.png"
                      alt="rudy project website"
                    />
                    <p className="projects-image-text">.Rudy</p>
                  </a>
                </div>

                {/* <div class="img-wrapper slower slower2" id="invisible-img">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg"
                      alt=""
                    />
                </div> */}

                <div class="img-wrapper">
                <a href="https://nutimasafn.onrender.com/" target="_blank" rel="noreferrer">
                    <img
                      className="projects-image"
                      src="Screenshot 2023-03-13 at 2.30.32 PM.png"
                      alt="nutimasafn"
                    />
                    <p className="projects-image-text">Nútímasafn</p>
                  </a>
                </div>

                {/* <div class="img-wrapper slower" id="invisible-img">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg"
                      alt=""
                    />
                </div> */}

                <div class="img-wrapper">
                <a href="https://design-system-sid.onrender.com/" target="_blank" rel="noreferrer">
                    <img
                      className="projects-image"
                      src="design-system-sid.png"
                      alt="design system sid"
                    />
                    <p className="projects-image-text">Design System Sid.</p>
                  </a>
                </div>

                {/* <div class="img-wrapper slower" id="invisible-img">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg"
                      alt=""
                    />
                </div> */}

              </div>
             
            </div>
            
          </div>
          
        </div>
        {/* <div className="line-div"></div> */}
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Projects;
