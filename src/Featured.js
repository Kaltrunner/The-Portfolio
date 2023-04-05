import { Link } from "react-router-dom";

function Featured() {
  return (
    <div className="featured-body-div">
      <h1 className="header-text" id="featured-h1">
        Featured Work
      </h1>
      <div className="line-div"></div>
      <div className="sample-body" id="section-1">
        <div className="sample">
          <div className="sample-img-div">
            <Link to="Featured-1" id="sample-link">
              <img
                className="sample-img"
                src="rudy-thumbnail-1.png"
                alt="Rudy"
              />
            </Link>
          </div>

          <div className="sample-text-div">
            <Link to="Featured-1" id="sample-link">
              <h4 className="sample-name-text">.Rudy</h4>
            </Link>
            <p className="sample-text">
              .Rudy is a fully functional design system, consisting of buttons,
              toggles, sliders, color grids and much more.
            </p>
          </div>
        </div>

        <div className="sample">
          <div className="sample-img-div">
            <Link to="Featured-2" id="sample-link">
              <img
                className="sample-img"
                src="museum-thumbnail-1.png"
                alt="Nútímasafn"
              />
            </Link>
          </div>
          <div className="sample-text-div">
            <Link to="Featured-2" id="sample-link">
              <h4 className="sample-name-text">Nútímasafn</h4>
            </Link>
            <p className="sample-text">
              Nútímasafn is a front end only web site modled to have the
              appearance and feel of exploring a mordern museum website.
            </p>
          </div>
        </div>

        <div className="sample">
          <div className="sample-img-div">
            <Link to="Featured-3" id="sample-link">
              <img
                className="sample-img"
                id="coming-soon"
                src="https://images.unsplash.com/photo-1655720031554-a929595ffad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Nútímasafn"
              />
            </Link>
          </div>
          <div className="sample-text-div">
            <Link to="Featured-3" id="sample-link">
              <h4 className="sample-name-text">Coming Soon</h4>
            </Link>
            <p className="sample-text" id="coming-soon-text" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
