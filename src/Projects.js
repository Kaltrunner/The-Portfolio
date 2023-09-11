import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Projects() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProjects = [
    {
      name: "THE GREEN SQUARE",
      imageSrc: "Screenshot-the-green-square.png",
      link: "https://a-green-square-project.onrender.com/",
    },
    {
      name: ".Rudy",
      imageSrc: "rudy.png",
      link: "https://rudy.onrender.com/",
    },
    {
      name: "Nútímasafn",
      imageSrc: "museum-screen-shot.png",
      link: "https://nutimasafn.onrender.com/",
    },
    {
      name: "Design System Sid.",
      imageSrc: "Design System Sid - 2023.png",
      link: "https://design-system-sid.onrender.com/",
    },
    {
      name: "New Matter",
      imageSrc: "test asset.png",
      link: "https://new-matter.onrender.com/",
    },
    {
      name: "Helvetica",
      imageSrc: "Screenshot-font-app.png",
      link: "https://helvetica.onrender.com/",
    },
    {
      name: "KALTRUNNER",
      imageSrc: "KALTRUNNER.png",
      link: "https://kaltrunner.com/",
    },
    // {
    //   name: "",
    //   imageSrc: "",
    //   link: "",
    // },
  ].filter((project) =>
    project.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="projects-body-div">
        <ul className="sub-menu-list">
          <li className="sub-menu-item" id="disabled">
            / Erik Russell
          </li>
          <Link to="/" className="nav-resume-link">
            <li className="menu-item-home">
              / <span className="menu-item-home-span">Home</span>
            </li>
          </Link>
        </ul>

        <div className="projects-header-text-div">
          <h1 className="header-text">All Projects</h1>
          <h4 className="projects-sub-header">2022 - Present</h4>
        </div>

        <div className="line-div"></div>

        <div>
          <input
            type="text"
            placeholder="Search Projects..."
            value={searchText}
            onChange={handleSearchChange}
            className="search-bar"
          />
        </div>

        <div className="line-div"></div>

        <div className="projects-container">
          {filteredProjects.map((project, index) => (
            <div className="img-wrapper" key={index}>
              <a
                id="project-a"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projects-image"
                  src={project.imageSrc}
                  alt={project.name}
                />

                <p className="projects-image-text">{project.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Projects;
