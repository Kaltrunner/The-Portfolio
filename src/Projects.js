// import { useState, useRef } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Projects() {
  return (
    <>
      <div className="projects-body-div">
        <ul className="sub-menu-list">
          <li className="sub-menu-item" id="disabled">
            / Erik Russell 
          </li>
          <Link to="/" className="nav-resume-link">
            <li className="menu-item-home">/ <span className="menu-item-home-span">Home</span></li>
          </Link>
        </ul>

        <div className="projects-header-text-div">
          <h1 className="header-text">All Projects</h1>
          <h4 className="projects-sub-header">2022 - Present</h4>
        </div>

        <div className="line-div"></div>

        <div className="projects-container">
          {/* <div className="img-wrapper">
            <img
              className="projects-image"
              src="Snake pit.png"
              alt="snake pit game"
            />
            <a
              id="project-a"
              href="https://github.com/Kaltrunner/Snake-Pit-Game"
              target="_blank"
              rel="noreferrer"
            >
              <p className="projects-image-text">Snake Pit</p>
            </a>
          </div> */}

          <div className="img-wrapper">
            <a
              id="project-a"
              href="https://a-green-square-project.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects-image"
                src="greensquare.png"
                alt="green square project"
              />

              <p className="projects-image-text">A GREEN SQUARE PROJECT</p>
            </a>
          </div>

          {/* <div className="img-wrapper">
            <img
              className="projects-image"
              src="optical-lie.png"
              alt="optical lie"
            />
            <a
              id="project-a"
              href="https://optical-lie.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="projects-image-text">optical lie</p>
            </a>
          </div> */}

          <div className="img-wrapper">
            <a
              id="project-a"
              href="https://github.com/Kaltrunner/Rudy"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects-image"
                src="rudy.png"
                alt="rudy project website"
              />

              <p className="projects-image-text">.Rudy</p>
            </a>
          </div>

          <div className="img-wrapper">
            <a
              id="project-a"
              href="https://nutimasafn.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects-image"
                src="Screenshot 2023-03-13 at 2.30.32 PM.png"
                alt="nutimasafn"
              />

              <p className="projects-image-text">Nútímasafn</p>
            </a>
          </div>

          <div className="img-wrapper">
            <a
              id="project-a"
              href="https://design-system-sid.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects-image"
                src="Design System Sid - 2023.png"
                alt="design system sid"
              />

              <p className="projects-image-text">Design System Sid.</p>
            </a>
          </div>

          <div className="img-wrapper">
            <a
              id="project-a"
              href="https://new-matter.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects-image"
                src="/Screenshot 2023-04-12 at 10.29.19 AM.png"
                alt=""
              />

              <p className="projects-image-text">New Matter</p>
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Projects;
